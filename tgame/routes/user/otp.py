from pyrate_limiter import Limiter, Rate, Duration
from fastapi import APIRouter, Body, HTTPException, Depends, status
from fastapi.responses import JSONResponse
from sqlmodel import select
from typing import Annotated
from secrets import randbelow
from starlette.requests import Request

from tgame.db.database import SessionDep
from tgame.db.model.user import User

from tgame.schema.otp import RequestUserOtp, ResponseUserOtp

from tgame.repos.cache import OTPCacheContainer
from tgame.repos.auth.rate_limiter import phonNumberDep

from tgame.services.sms import SMSClass

user_otp = APIRouter(
    tags=["User Authentication"]
)

@user_otp.post(
    "/verify",
    name="User Otp Verify Request",
    tags=["User Authentication"],
    description="User otp verify route for verifying users in the shop",
    status_code=200,
    responses={
        status.HTTP_200_OK: {
            "description": "otp code was correct and access is granted",
            "content": {
                "application/json": {
                    "example": {
                        "status": "true",
                        "detail": "success",
                        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
                        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                    },
                },
            },
        },
        status.HTTP_401_UNAUTHORIZED: {
            "description": "Otp code was not correct and access is not granted",
            "content": {
                "application/json": {
                    "example": {
                        "status": "false",
                        "detail": "fail",
                        "refresh_token": "null",
                        "access_token": "null"
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
    response_model=ResponseUserOtp,
    deprecated=False,
    include_in_schema=True,
    dependencies=[phonNumberDep]
)
async def UserVerifyOtpHandler(
    requestBody: Annotated[
        RequestUserOtp,
        Body(
            embed=False,
            media_type="application/json",
            title="Request field dto",
            strict=True,
            include_in_schema=False
        )
    ],
    session: SessionDep
) -> ResponseUserOtp:
    try:
        """ # See if user exist or not
        isUserExists = session.exec(select(User).where(User.phone_number == requestBody.phone_number)).one_or_none()

        # If user doesn't exist at all
        if isUserExists is None:
            raise HTTPException(status_code=401, detail="This phone number does not exist")

        # If exist, and verified too, then just authenticate it
        if isUserExists.verified == True:
            raise HTTPException(status_code=401, detail="This phone number is already exists")
        raise HTTPException(status_code=401, detail="Operation not permitted") """
        return ResponseUserOtp(status=True, detail="ok", access_token="ok", refresh_token="f")
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        raise HTTPException(status_code=401, detail="Operation not permitted")