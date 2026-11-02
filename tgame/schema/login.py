from pydantic import BaseModel, Field, field_validator

from tgame.repos.phone_number import phoneNumberNormalizer

class RequestUserLogin(BaseModel):
    """ 
        Route request for sign in user in shop.

        Attributes:
            phone_number (str): User phone number for sign in user in tgame shop.
    """
    phone_number: str = Field(
        min_length=10,
        max_length=14,
        description="User phone number for sign in user in tgame shop",
        title="Phone Number",
        examples=["9101234567"]
    )

    @field_validator("phone_number")
    @classmethod
    def _normalize_phone(cls, v: str) -> str:
        return phoneNumberNormalizer(v)

    model_config = {
        "json_schema_extra": {
            "title": "User Login Schema(Request)",
            "examples": [
                {
                    "phone_number": "9101234567"
                }
            ]
        }
    }

class ResponseUserLogin(BaseModel):
    """ 
        Route response for sign in user in shop.

        Attributes:
            status (bool): Status key in json schema.
            detail (str): Detail key in json schema.
    """
    status: bool = Field(
        default=False,
        description="Status key in json schema",
        title="Status",
        examples=["true"]
    )
    detail: str = Field(
        min_length=2,
        max_length=32,
        description="Detail key in json schema",
        title="Detail",
        examples=["success"]
    )

    model_config = {
        "json_schema_extra": {
            "title": "User Login Schema(Response)",
            "examples": [
                {
                    "stauts": "true",
                    "detail": "success"
                }
            ]
        }
    }