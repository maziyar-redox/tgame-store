from fastapi import APIRouter, Body, HTTPException, status
from fastapi.responses import JSONResponse
from sqlmodel import select
from typing import Annotated
from secrets import randbelow

from tgame.db.database import SessionDep
from tgame.db.model.user import User

from tgame.schema.login import RequestUserLogin, ResponseUserLogin

from tgame.repos.otp_cache import OTPCacheContainer
from tgame.repos.auth.rate_limiter import phoneNumberDep

from tgame.services.sms import SMSClass

user_login = APIRouter(
    tags=["User Authentication"]
)

@user_login.post(
    "/login",
    name="User Login Request",
    tags=["User Authentication"],
    description="User login route for sign in users in the shop",
    status_code=200,
    responses={
        status.HTTP_200_OK: {
            "description": "Phone number was correct and access is granted for otp verification",
            "content": {
                "application/json": {
                    "example": {
                        "status": "true",
                        "detail": "success"
                    },
                },
            },
        },
        status.HTTP_401_UNAUTHORIZED: {
            "description": "Phone number was not correct and access is not granted",
            "content": {
                "application/json": {
                    "example": {
                        "status": "false",
                        "detail": "fail"
                    },
                },
            },
        },
        status.HTTP_422_UNPROCESSABLE_CONTENT: {
            "description": "Validation error for login schema",
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
    response_model=ResponseUserLogin,
    deprecated=False,
    include_in_schema=True,
    dependencies=[phoneNumberDep]
)
async def UserLoginHandler(
    requestBody: Annotated[
        RequestUserLogin,
        Body(
            embed=False,
            media_type="application/json",
            title="Request field dto",
            strict=True,
            include_in_schema=False
        )
    ],
    session: SessionDep
) -> ResponseUserLogin:
    try:
        # See if user exist or not
        isUserExists = session.exec(select(User).where(User.phone_number == requestBody.phone_number)).one_or_none()

        # If user doesn't exist at all
        if isUserExists is None:
            raise HTTPException(status_code=401, detail="This phone number does not exist")

        # Initiating sms and otp classes
        sendSms = SMSClass(templateId=123456)
        otpCode: int = 100_000 + randbelow(900_000)

        # Is otp already cached or not
        isOtpCached = OTPCacheContainer.Get(phoneNumber=requestBody.phone_number)

        # If cached, then do nothing
        if isOtpCached != None:
            return ResponseUserLogin(status=True, detail="Otp code has been sent")

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
        return ResponseUserLogin(status=True, detail="Otp code has been sent")
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Operation not permitted")