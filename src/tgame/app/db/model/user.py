from pydantic import EmailStr
from sqlmodel import SQLModel, Field
from uuid import uuid7, UUID
from zoneinfo import ZoneInfo
from datetime import datetime

TEHRAN_TZ = ZoneInfo("Asia/Tehran")

def now_tehran() -> datetime:
    return datetime.now(TEHRAN_TZ)

def null_value() -> bool:
    return False

class User(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid7, primary_key=True, unique=True, nullable=False)
    first_name: str = Field(default=None, min_length=2, max_length=32, nullable=False)
    last_name: str = Field(default=None, min_length=2, max_length=32, nullable=False)
    phone_number: str = Field(default=None, min_length=10, max_length=10, unique=True, index=True, nullable=False)
    phoneNumber_verified: bool = Field(nullable=False, default=False)
    image: str | None = Field(default=None, nullable=True)
    email: EmailStr | None = Field(default=None, nullable=True, unique=True, index=True)
    email_verified: bool = Field(default=False, nullable=False, sa_column_kwargs={"server_default": "false"})
    name: str = Field(min_length=4, max_length=64)
    last_login: datetime = Field(default_factory=now_tehran)
    created_at: datetime = Field(default_factory=now_tehran)
    updated_at: datetime = Field(default_factory=now_tehran)