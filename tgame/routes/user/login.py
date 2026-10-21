from fastapi import APIRouter

user_login = APIRouter(
    tags=["User Authentication"]
)

@user_login.post(
    "/login",
)
async def UserLoginHandler():
    return "OK"