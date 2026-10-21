from pydantic import BaseModel, Field

class RequestUserOtp(BaseModel):
    """ 
        Route request for verifying otp for users in shop
    """
    otp_code: int = Field(
        min_length=6,
        max_length=6,
        description="User otp code which was sent to him/her with sms",
        title="Otp Code",
        examples=["123456"]
    )
    phone_number: str = Field(
        min_length=10,
        max_length=10,
        description="User phone number for verifying users otp in tgame shop",
        title="Phone Number",
        examples=["9101234567"]
    )

    model_config = {
        "json_schema_extra": {
            "title": "User Otp Verification Schema(Request)",
            "examples": [
                {
                    "otp_code": "123456",
                    "phone_number": "9101234567"
                }
            ]
        }
    }

class ResponseUserOtp(BaseModel):
    """ 
        Route response for otp verification user in shop
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
    access_token: str = Field(
        description="Access token key in json schema",
        title="Access Token",
        examples=["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"]
    )
    refresh_token: str = Field(
        description="Refresh token key in json schema",
        title="Refresh Token",
        examples=["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"]
    )

    model_config = {
        "json_schema_extra": {
            "title": "User Register Schema(Response)",
            "examples": [
                {
                    "stauts": "true",
                    "detail": "success"
                }
            ]
        }
    }