from fastapi import APIRouter

from tgame.routes.user import (
    login,
    register
)

authRouter = APIRouter(prefix="/auth")

authRouter.include_router(login.user_login)
authRouter.include_router(register.user_register)