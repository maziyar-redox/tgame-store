from pyrate_limiter import Limiter, Rate, Duration
from fastapi import APIRouter, Body, HTTPException, Depends
from fastapi.responses import JSONResponse
from sqlmodel import select
from typing import Annotated
from secrets import randbelow

from tgame.db import db
from tgame.db.model.user import User

from tgame.schema.register import RequestUserRegister, ResponseUserRegister

from tgame.services.cache import OTPCacheContainer
from tgame.services.sms import SMSClass

from tgame.repos.phone import phone_number_normalizer
from tgame.repos.rate_limit import RateLimiter, register_identifier

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
        200: {
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
        401: {
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
        422: {
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
        429: {
            "description": "Too many request",
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
    dependencies=[Depends(RateLimiter(limiter=Limiter(Rate(5, Duration.SECOND * 120)), identifier=register_identifier))],
)
async def UserRegisterHandler(
    userData: Annotated[
        RequestUserRegister,
        Body(
            embed=False,
            media_type="application/json",
            title="Request field dto",
            strict=True,
            include_in_schema=False
        )
    ],
    session: db.SessionDep
) -> ResponseUserRegister:
    try:
        """ 
        Normalizing users phone number to return 9XXXX for better usability
        """
        normalizePhone = phone_number_normalizer(phone=userData.phone_number)
        """ 
        See if user exist or not
        """
        isUserExists = session.exec(select(User).where(User.phone_number == normalizePhone)).one_or_none()
        """ 
        If exist, and verified too, then do not do anything
        """
        if isUserExists and isUserExists.verified == True:
            raise HTTPException(status_code=401, detail="This phone number is already exists")
        """ 
        Else, if exist and not verified yet, check the server cache if otp code has been sent to him already,
        If otp found in TTL cache, then do not send the code again,
        Else, send the code again
        """
        sendSms = SMSClass(template_id=123456)
        otp_code: int = 100_000 + randbelow(900_000)
        if isUserExists and isUserExists.verified == False:
            isOtpCached = OTPCacheContainer.get(phone_number=normalizePhone)
            
            if isOtpCached != None:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")
            
            isSend = sendSms.send(phone_number=normalizePhone, otp_code=otp_code)
            otpCache = OTPCacheContainer.set(phone_number=normalizePhone, otp=otp_code, ttl=120)
    
            if isSend == True and otpCache:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")
            else:
                raise HTTPException(status_code=500, detail="Operation not permitted")

        """ 
        If user do not exist, then create new one
        """
        newUser = User(
            first_name=userData.first_name,
            last_name=userData.last_name,
            phone_number=normalizePhone,
            verified=False,
            last_login=None
        )

        session.add(newUser)
        session.commit()
        session.refresh(newUser)

        isSend = sendSms.send(phone_number=normalizePhone, otp_code=otp_code)
        otpCache = OTPCacheContainer.set(phone_number=normalizePhone, otp=otp_code, ttl=120)

        if isSend == True and otpCache:
            return ResponseUserRegister(status=True, detail="Otp code has been sent")

        raise HTTPException(status_code=401, detail="Otp code has not been sent")
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Operation not permitted")