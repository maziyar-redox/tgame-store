from pyrate_limiter import Limiter, Rate, Duration
from starlette.requests import Request
from fastapi import HTTPException, status, Depends
from pydantic import TypeAdapter

from tgame.repos.rate_limit import RateLimiter

from tgame.schema.register import RequestUserRegister
from tgame.schema.otp import RequestUserOtp

RegisterPayload = RequestUserRegister | RequestUserOtp
adapter = TypeAdapter(RegisterPayload)

def which_model(payload: dict):
    try:
        obj = adapter.validate_python(payload)
        return type(obj), obj
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
        print(determine_type)
        # isValid = RequestUserRegister.model_validate(jsonRequest)
        return "OK"
    except Exception as e:
        print(e)
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, "Internal error from rate limiter")

phonNumberDep = Depends(
    RateLimiter(
        limiter=Limiter(
            Rate(
                limit=5,
                interval=Duration.DAY * 1
            )
        ),
        identifier=phoneNumberIdentifier
    )
)