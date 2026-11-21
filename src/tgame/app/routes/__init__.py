from fastapi import APIRouter

from tgame.tgame.routes.user import authRouter

router = APIRouter(prefix="/api")

router.include_router(authRouter)