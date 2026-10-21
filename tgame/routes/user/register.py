from fastapi import APIRouter, Body, HTTPException
from fastapi.responses import JSONResponse
from sqlmodel import select
from typing import Annotated
from secrets import randbelow

from tgame.db import db
from tgame.db.model.user import User

from tgame.schema.register import RequestUserRegister, ResponseUserRegister

from tgame.services.cache import OTPCacheContainer
from tgame.services.sms import SMSClass

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
        }
    },
    response_class=JSONResponse,
    response_model=ResponseUserRegister,
    deprecated=False,
    include_in_schema=True,
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
        """ validateUserModel = User.model_validate(userData)

        if not validateUserModel:
            raise HTTPException(status_code=401, detail="User data cannot be validated") """

        isUserExists = session.exec(select(User).where(User.phone_number == userData.phone_number)).one_or_none()

        if isUserExists and isUserExists.verified == True:
            raise HTTPException(status_code=401, detail="This phone number is already exists")
        if isUserExists and isUserExists.verified == False:
            isOtpCached = OTPCacheContainer.get(phone_number=userData.phone_number)
            
            if isOtpCached != None:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")
    
            sendSms = SMSClass(template_id=123456)
    
            otp_code: int = 100_000 + randbelow(999_999)
    
            isSend = sendSms.send(phone_number=userData.phone_number, otp_code=otp_code)
            otpCache = OTPCacheContainer.set(phone_number=userData.phone_number, otp=otp_code, ttl=120)
    
            if isSend == True and otpCache:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")


        session.add(userData)
        session.commit()
        session.refresh(userData)
        
        isOtpCached = OTPCacheContainer.get(phone_number=userData.phone_number)

        if isOtpCached != None:
            return ResponseUserRegister(status=True, detail="Otp code has been sent")

        sendSms = SMSClass(template_id=123456)

        otp_code: int = 100_000 + randbelow(999_999)

        isSend = sendSms.send(phone_number=userData.phone_number, otp_code=otp_code)
        otpCache = OTPCacheContainer.set(phone_number=userData.phone_number, otp=otp_code, ttl=120)

        if isSend == True and otpCache:
            return ResponseUserRegister(status=True, detail="Otp code has been sent")

        raise HTTPException(status_code=401, detail="Otp code has not been sent")
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=401, detail="Operation not permitted")