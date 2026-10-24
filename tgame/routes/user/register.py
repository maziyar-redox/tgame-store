from pyrate_limiter import Limiter, Rate, Duration
from fastapi import APIRouter, Body, HTTPException, Depends, status
from fastapi.responses import JSONResponse
from sqlmodel import select
from typing import Annotated
from secrets import randbelow
from starlette.requests import Request

from tgame.db.database import SessionDep
from tgame.db.model.user import User

from tgame.schema.register import RequestUserRegister, ResponseUserRegister

from tgame.repos.cache import OTPCacheContainer
from tgame.services.sms import SMSClass

from tgame.repos.rate_limit import RateLimiter

async def registerIdentifier(request: Request) -> str:
    """
    Register identifier which maps a request in memory for rate limiting
    
    Parameters:
            request (Request): Request context from starlette for accessing request object.
        
    Returns:
        str: returns formatted string
    """
    try:
        jsonRequest = await request.json()
        isValid = RequestUserRegister.model_validate(jsonRequest)
        return isValid.phone_number
    except Exception as e:
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, "Internal error from rate limiter")

user_register = APIRouter(
    tags=["User Authentication"]
)

@user_register.post(
    "/register",
    name="User Register Request",
    tags=["User Authentication"],
    description="User register route for registering in the shop",
    status_code=200,
    responses={
        status.HTTP_200_OK: {
            "description": "Registration was successful and otp code has been sent",
            "content": {
                "application/json": {
                    "example": {
                        "status": "true",
                        "detail": "success",
                    },
                },
            },
        },
        status.HTTP_401_UNAUTHORIZED: {
            "description": "Registration was not successful and otp code has not been sent",
            "content": {
                "application/json": {
                    "example": {
                        "status": "false",
                        "detail": "fail",
                    },
                },
            },
        },
        status.HTTP_422_UNPROCESSABLE_CONTENT: {
            "description": "Validation error for register schema",
            "content": {
                "application/json": {
                    "example": {
                        "detail": [
                            {
                                "loc": [
                                    "string",
                                    0
                                ],
                                "msg": "string",
                                "type": "string",
                                "input": "string",
                                "ctx": {}
                            }
                        ]
                    },
                },
            },
        },
        status.HTTP_429_TOO_MANY_REQUESTS: {
            "description": "Too many request",
            "content": {
                "application/json": {
                    "example": {
                        "status": "false",
                        "detail": "fail",
                    },
                },
            },
        },
        status.HTTP_500_INTERNAL_SERVER_ERROR: {
            "description": "Internal server error",
            "content": {
                "application/json": {
                    "example": {
                        "status": "false",
                        "detail": "fail",
                    },
                },
            },
        }
    },
    response_class=JSONResponse,
    response_model=ResponseUserRegister,
    deprecated=False,
    include_in_schema=True,
    dependencies=[
        Depends(
            RateLimiter(
                limiter=Limiter(
                    Rate(5, Duration.SECOND * 120)
                ),
                identifier=registerIdentifier
            )
        )
    ],
)
async def UserRegisterHandler(
    requestBody: Annotated[
        RequestUserRegister,
        Body(
            embed=False,
            media_type="application/json",
            title="Request field dto",
            strict=True,
            include_in_schema=False
        )
    ],
    session: SessionDep
) -> ResponseUserRegister:
    try:
        # See if user exist or not
        isUserExists = session.exec(select(User).where(User.phone_number == requestBody.phone_number)).one_or_none()

        # If exist, and verified too, then do not do anything
        if isUserExists and isUserExists.verified == True:
            raise HTTPException(status_code=401, detail="This phone number is already exists")

        # Else, if exist and not verified yet, check the server cache if otp code has been sent to him already,
        # If otp found in TTL cache, then do not send the code again,
        # Else, send the code again
        sendSms = SMSClass(templateId=123456)
        otp_code: int = 100_000 + randbelow(900_000)
        if isUserExists and isUserExists.verified == False:
            isOtpCached = OTPCacheContainer.Get(phoneNumber=requestBody.phone_number)
            
            if isOtpCached != None:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")
            
            isSend = sendSms.Send(phoneNumber=requestBody.phone_number, otpCode=otp_code)
            otpCache = OTPCacheContainer.Set(phoneNumber=requestBody.phone_number, otpCode=otp_code, ttl=120)
    
            if isSend == True and otpCache:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")
            else:
                raise HTTPException(status_code=500, detail="Operation not permitted")

        # If user do not exist, then create new one
        newUser = User(
            first_name=requestBody.first_name,
            last_name=requestBody.last_name,
            phone_number=requestBody.phone_number,
            verified=False,
            last_login=None
        )

        session.add(newUser)
        session.commit()
        session.refresh(newUser)

        isSend = sendSms.Send(phoneNumber=requestBody.phone_number, otpCode=otp_code)
        otpCache = OTPCacheContainer.Set(phoneNumber=requestBody.phone_number, otpCode=otp_code, ttl=120)

        if isSend == True and otpCache:
            return ResponseUserRegister(status=True, detail="Otp code has been sent")

        raise HTTPException(status_code=401, detail="Otp code has not been sent")
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Operation not permitted")