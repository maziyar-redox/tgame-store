from sqlmodel import SQLModel, Field
from uuid import uuid7, UUID
from zoneinfo import ZoneInfo
from datetime import datetime

TEHRAN_TZ = ZoneInfo("Asia/Tehran")

def now_tehran() -> datetime:
    return datetime.now(TEHRAN_TZ)

class User(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid7, primary_key=True, unique=True, nullable=False)
    first_name: str = Field(default=None, min_length=2, max_length=32, nullable=False)
    last_name: str = Field(default=None, min_length=2, max_length=32, nullable=False)
    phone_number: str = Field(default=None, min_length=10, max_length=10, unique=True, index=True, nullable=False)
    verified: bool = Field(nullable=False, default=False)
    last_login: datetime = Field()
    created_at: datetime = Field(default_factory=now_tehran)
    updated_at: datetime = Field(default_factory=now_tehran)