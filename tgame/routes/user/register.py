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
from tgame.repos.rate_limit import RateLimiter

from tgame.services.sms import SMSClass

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
                    Rate(
                        limit=5,
                        interval=Duration.DAY * 1
                    )
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
        if isUserExists is not None and isUserExists.verified == True:
            raise HTTPException(status_code=401, detail="This phone number is already exists")

        # Initiating sms and otp classes
        sendSms = SMSClass(templateId=123456)
        otpCode: int = 100_000 + randbelow(900_000)

        # Else, if exist and not verified yet, check the server cache if otp code has been sent to him already,
        # If otp found in TTL cache, then do not send the code again,
        # Else, send the code again
        if isUserExists and isUserExists.verified == False:

            # Is otp already cached or not
            isOtpCached = OTPCacheContainer.Get(phoneNumber=requestBody.phone_number)

            # If cached, then do nothing
            if isOtpCached != None:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")

            # if not, then send otp
            sendOtpSms = sendSms.Send(phoneNumber=requestBody.phone_number, otpCode=otpCode)

            # If sms was not send throw exception
            if sendOtpSms != True:
                raise HTTPException(status_code=500, detail="Operation not permitted")

            # If sms has been sent, then cache it
            otpCache = OTPCacheContainer.Set(phoneNumber=requestBody.phone_number, otpCode=otpCode, ttl=120)

            # If not cached, then throw exception
            if not otpCache:
                raise HTTPException(status_code=500, detail="Operation not permitted")

            # If cached and sent sms, return Success
            return ResponseUserRegister(status=True, detail="Otp code has been sent")

        # If user do not exist, then create new one
        newUser = User(
            first_name=requestBody.first_name,
            last_name=requestBody.last_name,
            phone_number=requestBody.phone_number,
            verified=False
        )

        # Then commit it to database
        session.add(newUser)
        session.commit()
        session.refresh(newUser)

        # Send the sms after user creation
        sendOtpSms = sendSms.Send(phoneNumber=requestBody.phone_number, otpCode=otpCode)

        # If sms was not send throw exception
        if sendOtpSms != True:
            raise HTTPException(status_code=500, detail="Operation not permitted")
        
        # If sms has been sent, then cache it
        otpCache = OTPCacheContainer.Set(phoneNumber=requestBody.phone_number, otpCode=otpCode, ttl=120)

        # If not cached, then throw exception
        if not otpCache:
            raise HTTPException(status_code=500, detail="Operation not permitted")

        return ResponseUserRegister(status=True, detail="Otp code has been sent")
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Operation not permitted")