from pyrate_limiter import (
    AbstractBucket,
    BucketFactory,
    RateItem,
    MonotonicClock,
    InMemoryBucket,
    Rate,
    Duration,
    Limiter,
)
from starlette.requests import Request
from fastapi import HTTPException, status, Depends
from pydantic import TypeAdapter

from tgame.repos.rate_limit import RateLimiter

from tgame.schema.login import RequestUserLogin
from tgame.schema.register import RequestUserRegister
from tgame.schema.otp import RequestUserOtp

RegisterPayload = RequestUserRegister | RequestUserOtp | RequestUserLogin
adapter = TypeAdapter(RegisterPayload)

def which_model(payload: dict):
    try:
        obj = adapter.validate_python(payload)
        return obj
    except Exception as e:
        raise Exception("Error while validating fields")

async def phoneNumberIdentifier(request: Request) -> str:
    """
    Register identifier which maps a request in memory for rate limiting
    
    Parameters:
            request (Request): Request context from starlette for accessing request object.
        
    Returns:
        str: returns formatted string
    """
    try:
        jsonRequest = await request.json()
        determine_type = which_model(jsonRequest)
        if determine_type.phone_number:
            return determine_type.phone_number
        raise
    except Exception as e:
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, "Internal error from rate limiter")

class PerPhoneBucketFactory(BucketFactory):
    """Create a separate bucket for each phone number."""

    def __init__(self, clock: MonotonicClock):
        self.clock = clock
        self.buckets: dict[str, AbstractBucket] = {}

    def wrap_item(self, name: str, weight: int = 1) -> RateItem:
        return RateItem(name, self.clock.now(), weight=weight)

    def get(self, item: RateItem) -> AbstractBucket:
        if item.name not in self.buckets:
            # Each phone number gets its own fresh bucket
            self.buckets[item.name] = self.create(
                InMemoryBucket,
                [Rate(5, Duration.HOUR * 6)],
            )
        return self.buckets[item.name]

_phone_limiter = Limiter(
    PerPhoneBucketFactory(MonotonicClock()),
)

phoneNumberDep = Depends(
    RateLimiter(
        limiter=_phone_limiter,
        identifier=phoneNumberIdentifier
    )
)