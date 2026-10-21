from fastapi import APIRouter, Body, HTTPException
from fastapi.responses import JSONResponse
from typing import Annotated
from secrets import randbelow

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
    user: Annotated[
        RequestUserRegister,
        Body(
            embed=False,
            media_type="application/json",
            title="Request field dto",
            strict=True,
            include_in_schema=False
        )
    ]
) -> ResponseUserRegister:
    try:
        isOtpCached = OTPCacheContainer.get(phone_number=user.phone_number)

        if isOtpCached != None:
            return ResponseUserRegister(status=True, detail="Otp code has been sent")

        sendSms = SMSClass(template_id=123456)

        otp_code: int = 100_000 + randbelow(999_999)

        isSend = sendSms.send(phone_number=user.phone_number, otp_code=otp_code)

        if isSend == True:
            otpCache = OTPCacheContainer.set(phone_number=user.phone_number, otp=otp_code, ttl=120)

            if otpCache:
                return ResponseUserRegister(status=True, detail="Otp code has been sent")

        raise HTTPException(status_code=401, detail="Otp code has not been sent")
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        raise HTTPException(status_code=401, detail="Operation not permitted")