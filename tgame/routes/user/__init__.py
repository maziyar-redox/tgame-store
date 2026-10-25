from fastapi import APIRouter

from tgame.routes.user import (
    login,
    register,
    otp
)

authRouter = APIRouter(prefix="/auth")

authRouter.include_router(login.user_login)
authRouter.include_router(register.user_register)
authRouter.include_router(otp.user_otp)