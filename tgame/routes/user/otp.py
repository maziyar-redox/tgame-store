import jwt

from fastapi import APIRouter, Body, HTTPException, status
from fastapi.responses import JSONResponse
from sqlmodel import select
from typing import Annotated
from datetime import datetime, timedelta, timezone
from zoneinfo import ZoneInfo

from tgame.core.config import settings

from tgame.db.database import SessionDep
from tgame.db.model.user import User

from tgame.schema.otp import RequestUserOtp, ResponseUserOtp

from tgame.repos.cache.otp_cache import OTPCacheContainer

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
            "model": ResponseUserOtp,
            "description": "otp code was correct and access is granted",
            "content": {
                "application/json": {
                    "example": {
                        "status": "true",
                        "detail": "authenticated successfully",
                        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMWExZGEwZS1lNGNkLTcwYTgtYjU2MS0yN2YxOWVjNjc0YjUiLCJwaG9uZSI6IjkxMTc0NjI3NTEiLCJmaXJzdF9uYW1lIjoiXHUwNjQ1XHUwNjI3XHUwNjMyXHUwNmNjXHUwNjI3XHUwNjMxIiwibGFzdF9uYW1lIjoiXHUwNjM5XHUwNmNjXHUwNjMzXHUwNmNjIFx1MDY0Nlx1MDY5OFx1MDYyN1x1MDYyZiIsImlhdCI6MTc5NDY1OTgxNCwiZXhwIjoxNzk0NjY3MDE0LCJpc3MiOiJ0Z2FtZS1zdG9yZSIsImF1ZCI6InRnYW1lLXVzZXJzIiwidHlwZSI6ImFjY2VzcyJ9.vpyy6u1MFr9F_uVLk3Pxc_-Q4BEN0QTxsb8l3efmY7k",
                        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMWExZGEwZS1lNGNkLTcwYTgtYjU2MS0yN2YxOWVjNjc0YjUiLCJwaG9uZSI6IjkxMTc0NjI3NTEiLCJmaXJzdF9uYW1lIjoiXHUwNjQ1XHUwNjI3XHUwNjMyXHUwNmNjXHUwNjI3XHUwNjMxIiwibGFzdF9uYW1lIjoiXHUwNjM5XHUwNmNjXHUwNjMzXHUwNmNjIFx1MDY0Nlx1MDY5OFx1MDYyN1x1MDYyZiIsImlhdCI6MTc5NDY1OTgxNCwiZXhwIjoxNzk0NjY3MDE0LCJpc3MiOiJ0Z2FtZS1zdG9yZSIsImF1ZCI6InRnYW1lLXVzZXJzIiwidHlwZSI6ImFjY2VzcyJ9.vpyy6u1MFr9F_uVLk3Pxc_-Q4BEN0QTxsb8l3efmY7k",
                        "user": {
                            "verified": "true",
                            "first_name": "مازیار",
                            "last_name": "عیسی نژاد",
                            "created_at": "2026-11-14T12:36:11.597904Z",
                            "id": "01a1da0e-e4cd-70a8-b561-27f19ec674b5",
                            "phone_number": "9117462751",
                            "email": "example@gmail.com",
                            "email_verfied": "true",
                            "name": "مازیار عیسی نژاد",
                            "image": "null",
                            "last_login": "2026-11-14T12:36:11.597887Z",
                            "updated_at": "2026-11-14T12:36:11.597914Z"
                        }
                    }
                },
            },
        },
        status.HTTP_401_UNAUTHORIZED: {
            "model": ResponseUserOtp,
            "description": "Otp code was not correct and access is not granted",
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
            "model": ResponseUserOtp,
            "description": "Validation error for otp schema",
            "content": {
                "application/json": {
                    "example": {
                        "status": "false",
                        "detail": "fail"
                    },
                },
            },
        },
        status.HTTP_429_TOO_MANY_REQUESTS: {
            "model": ResponseUserOtp,
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
            "model": ResponseUserOtp,
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
    dependencies=[],
    response_model_exclude={"User"},
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
        # See if user exist or not
        getUser = await session.exec(select(User).where(User.phone_number == requestBody.phone_number))
        isUserExists = getUser.one_or_none()

        # If user doesn't exist at all
        if isUserExists is None:
            raise HTTPException(status_code=401, detail="This phone number does not exist")

        # Is otp already cached or not
        isOtpCached = OTPCacheContainer.Get(phoneNumber=requestBody.phone_number)

        # If not cached, then do nothing
        if isOtpCached == None:
            raise HTTPException(status_code=401, detail="Unauthorized operation detected")

        # If code was wrong, then do nothing
        verifyOtp = OTPCacheContainer.Verify(phoneNumber=requestBody.phone_number, otpCode=requestBody.otp_code)

        if verifyOtp == False:
            raise HTTPException(status_code=401, detail="Otp code is wrong")

        # If user is not verified, update it
        if isUserExists.verified == False:
            isUserExists.verified = True
            session.add(isUserExists)
            await session.commit()
            await session.refresh(isUserExists)

        TEHRAN_TZ = ZoneInfo("Asia/Tehran")
        now = datetime.now(TEHRAN_TZ)

        isUserExistsOldLogin = isUserExists
        
        isUserExists.last_login = now
        session.add(isUserExists)
        await session.commit()
        await session.refresh(isUserExists)
        
        accessTokenExpire = now + timedelta(minutes=settings.TOKEN_ACCESS_TOKEN_EXPIRE_MINUTES)
        #refreshTokenExpire = now + timedelta(minutes=settings.TOKEN_ACCESS_TOKEN_EXPIRE_MINUTES)

        accessTokenPayload = {
            "sub": str(isUserExists.id),
            "phone": isUserExists.phone_number,
            "first_name": isUserExists.first_name,
            "last_name": isUserExists.last_name,
            "iat": int(now.timestamp()),
            "exp": int((accessTokenExpire).timestamp()),
            "iss": "tgame-store",
            "aud": "tgame-users",
            "type": "access"
        }

        accessToken = jwt.encode(payload=accessTokenPayload, key=settings.TOKEN_JWT_SECRET, algorithm=settings.TOKEN_ALGORITHM)
        # refreshToken = jwt.encode(payload=accessTokenPayload, key=settings.TOKEN_JWT_SECRET, algorithm=settings.TOKEN_ALGORITHM)

        return ResponseUserOtp(
            status=True,
            detail="authenticated successfully",
            access_token=accessToken,
            refresh_token=accessToken,
            user=isUserExistsOldLogin
        )
    except HTTPException as e:
        raise HTTPException(status_code=e.status_code, detail=e.detail)
    except Exception as e:
        raise HTTPException(status_code=401, detail="Operation not permitted")