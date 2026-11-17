from pyrate_limiter import Limiter
from typing import Union, Any
from fastapi import HTTPException
from fastapi import status
from starlette.requests import Request
from starlette.responses import Response
from starlette.websockets import WebSocket

def defaultCallback(*args, **kwargs):
    """
    Default callback for when rate limit is reached

    Returns:
        NoReturn: This callback don't returns
    """
    raise HTTPException(status.HTTP_429_TOO_MANY_REQUESTS, "Too Many Requests")

async def defaultIdentifier(request: Union[Request, WebSocket]):
    """
    Default identifier for determining a badge for specific resource

    Returns:
        Any: This callback don't returns
    """
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        ip = forwarded.split(",")[0]
    elif request.client:
        ip = request.client.host
    else:
        ip = "127.0.0.1"
    return ip + ":" + request.scope["path"]

class _BaseRateLimiter:
    """
    A Class for initiating Base rate limiter and definig arguments

    Attributes:
        limiter (Limiter): Limiter type from pyrate_limiter package
        identifier (Unknown): Default identifier which identifies patterns for rate limiting
        callback (Unknown): Default callback for when rate limit is reached
        blocking (bool, default False): If True, wait until a permit is available (subject to timeout); if False, return immediately
        skip (None): Skip the request in specific condition
    """
    def __init__(
        self,
        limiter: Limiter,
        identifier=defaultIdentifier,
        callback=defaultCallback,
        blocking: bool = False,
        skip=None,
    ):
        """
        Initialize an _BaseRateLimiter object.

        Parameters:
            limiter (Limiter): Limiter type from pyrate_limiter package
            identifier (Unknown): Default identifier which identifies patterns for rate limiting
            callback (Unknown): Default callback for when rate limit is reached
            blocking (bool, default False): If True, wait until a permit is available (subject to timeout); if False, return immediately
            skip (None): Skip the request in specific condition
        """
        self.limiter = limiter
        self.identifier = identifier
        self.callback = callback
        self.blocking = blocking
        self.skip = skip


class RateLimiter(_BaseRateLimiter):
    """
    A Class for initiating Base rate limiter and definig arguments

    Attributes:
        request (Request): Request context from starlette
        response (Response): Response context from starlette
    """
    async def __call__(self, request: Request, response: Response) -> (Any | None):
        """
        Call object to do something when initiated.

        Parameters:
            request (Request): Request context from starlette
            response (Response): Response context from starlette
        Returns:
            Any: this caller could return anything
            None: may not return any
        """
        if self.skip and await self.skip(request):
            return
        rate_key = await self.identifier(request)
        success = await self.limiter.try_acquire_async(rate_key, blocking=self.blocking)
        if not success:
            return await self.callback(request, response)