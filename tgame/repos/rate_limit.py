from pyrate_limiter import Limiter
from typing import Union
from fastapi import HTTPException
from fastapi import status
from starlette.requests import Request
from starlette.responses import Response
from starlette.websockets import WebSocket

from tgame.schema.register import RequestUserRegister

from tgame.repos.phone import phone_number_normalizer

def default_callback(*args, **kwargs):
    raise HTTPException(
        status.HTTP_429_TOO_MANY_REQUESTS,
        "Too Many Requests",
    )


async def register_identifier(request: Request):
    try:
        jsonRequest = await request.json()
        isValid = RequestUserRegister.model_validate(jsonRequest)
        normalizePhone = phone_number_normalizer(phone=isValid.phone_number)
        forwarded = request.headers.get("X-Forwarded-For")
        if forwarded:
            ip = forwarded.split(",")[0]
        elif request.client:
            ip = request.client.host
        else:
            ip = "127.0.0.1"
        return ip + ":" + request.scope["path"] + ":" + normalizePhone
    except Exception as e:
        raise HTTPException(
            status.HTTP_500_INTERNAL_SERVER_ERROR,
            "Internal error from rate limiter",
        )

async def default_identifier(request: Union[Request, WebSocket]):
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        ip = forwarded.split(",")[0]
    elif request.client:
        ip = request.client.host
    else:
        ip = "127.0.0.1"
    return ip + ":" + request.scope["path"]

class _BaseRateLimiter:
    def __init__(
        self,
        limiter: Limiter,
        identifier=default_identifier,
        callback=default_callback,
        blocking: bool = False,
        skip=None,
    ):
        self.limiter = limiter
        self.identifier = identifier
        self.callback = callback
        self.blocking = blocking
        self.skip = skip


class RateLimiter(_BaseRateLimiter):
    async def __call__(self, request: Request, response: Response):
        if self.skip and await self.skip(request):
            return
        rate_key = await self.identifier(request)
        success = await self.limiter.try_acquire_async(rate_key, blocking=self.blocking)
        if not success:
            return await self.callback(request, response)