from pydantic import BaseModel, Field

class RequestUserRegister(BaseModel):
    """ 
        Route request for registering user in shop
    """
    first_name: str = Field(
        min_length=2,
        max_length=32,
        description="User first name which shows in factores",
        title="First Name",
        examples=["Jhon"]
    )
    last_name: str = Field(
        min_length=2,
        max_length=32,
        description="User last name which shows in factores",
        title="Last Name",
        examples=["Doe"]
    )
    phone_number: str = Field(
        min_length=10,
        max_length=14,
        description="User phone number for registering in tgame shop",
        title="Phone Number",
        examples=["9101234567"]
    )

    model_config = {
        "json_schema_extra": {
            "title": "User Register Schema(Request)",
            "examples": [
                {
                    "first_name": "Jhon",
                    "last_name": "Doe",
                    "phone_number": "9101234567"
                }
            ]
        }
    }

class ResponseUserRegister(BaseModel):
    """ 
        Route response for registering user in shop
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
            "title": "User Register Schema(Response)",
            "examples": [
                {
                    "stauts": "true",
                    "detail": "success"
                }
            ]
        }
    }