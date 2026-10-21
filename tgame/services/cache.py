from dataclasses import dataclass
from datetime import UTC, datetime, timedelta
from cachetools import TTLCache
from typing import cast
from threading import RLock

from time import sleep

@dataclass(slots=True)
class OTPEntry:
    phone_number: str
    attempts: int
    otp: int
    expires: datetime

class OTPCache:
    def __init__(
        self,
        maxsize: int = 10_000,
        ttl: int = 300,
    ) -> None:
        self._cache: TTLCache[str, OTPEntry] = cast(TTLCache[str, OTPEntry], TTLCache(maxsize=maxsize, ttl=ttl))
        self._lock: RLock = RLock()

    def set(
        self,
        phone_number: str,
        otp: int,
        ttl: int = 300,
    ) -> OTPEntry:
        entry = OTPEntry(
            phone_number=phone_number,
            attempts=0,
            otp=otp,
            expires=datetime.now(UTC) + timedelta(seconds=ttl),
        )

        self._cache[phone_number] = entry
        return entry

    def get(self, phone_number: str) -> OTPEntry | None:
        return self._cache.get(phone_number)

    def increment_attempts(self, phone_number: str) -> int | None:
        entry = self.get(phone_number)

        if entry is None:
            return None

        entry.attempts += 1
        return entry.attempts

    def verify(self, phone_number: str, otp: int, max_attempts: int = 5) -> bool:
        with self._lock:
            entry = self.get(phone_number)

            if entry is None:
                return False

            sleep(5)

            if datetime.now(UTC) >= entry.expires:
                self.delete(phone_number)
                return False

            if entry.attempts >= max_attempts:
                self.delete(phone_number)
                return False

            if entry.otp != otp:
                entry.attempts += 1
                return False

            self.delete(phone_number)
            return True

    def delete(self, phone_number: str) -> bool:
        key = phone_number

        if key not in self._cache:
            return False

        del self._cache[key]
        return True

    def clear(self) -> None:
        self._cache.clear()

    def __len__(self) -> int:
        return len(self._cache)

OTPCacheContainer = OTPCache(maxsize=100, ttl=300)