from dataclasses import dataclass
from datetime import UTC, datetime, timedelta
from cachetools import TTLCache
from typing import cast
from threading import RLock

@dataclass(slots=True)
class OTPEntry:
    """
    A Class for initiating OTP entry and schema for caching.

    Attributes:
        phoneNumber (str): User phone number for registering.
        attempts (int): User attempts for entering otp.
        otpCode (int): otp code.
        expires (datetime): expiration
    """
    phoneNumber: str
    attempts: int
    otpCode: int
    expires: datetime

class OTPCache():
    """
    A Class for initiating OTP cache and schema for caching.

    Attributes:
        maxsize (int): Max cache size for registering in memroy.
        ttl (int): default ttl for staying in memory.
    """
    def __init__(self, maxsize: int = 1_000, ttl: int = 300) -> None:
        """
        Initialize an OTPCache object.

        Parameters:
            maxsize (int): Max cache size for registering in memroy.
            ttl (int): default ttl for staying in memory.
        """
        self._cache: TTLCache[str, OTPEntry] = cast(TTLCache[str, OTPEntry], TTLCache(maxsize=maxsize, ttl=ttl))
        self._lock: RLock = RLock()

    def Set(self, phoneNumber: str, otpCode: int, ttl: int = 300) -> OTPEntry:
        """
        Set the otp cache key and object.

        Parameters:
            phoneNumber (str): User phone number to send sms to it.
            otpCode (int): Special 6 digit otp code for verifying user.
            ttl (int): default ttl for staying in memory.

        Returns:
            OTPEntry: Returns the otp object in memory.
        """
        try:
            entry = OTPEntry(
                phoneNumber=phoneNumber,
                attempts=0,
                otpCode=otpCode,
                expires=datetime.now(UTC) + timedelta(seconds=ttl)
            )

            self._cache[phoneNumber] = entry
            return entry
        except Exception as e:
            raise Exception("Cannot save into cache")

    def Get(self, phoneNumber: str) -> OTPEntry | None:
        """
        Get the otp cache key and object.

        Parameters:
            phoneNumber (str): User phone number to send sms to it.

        Returns:
            OTPEntry: Returns the otp object in memory.
            None: If nothing has been found, returns none
        """
        try:
            return self._cache.get(phoneNumber)
        except Exception as e:
            raise Exception("Cannot get cache from memory")

    def IncrementAttempts(self, phoneNumber: str) -> int | None:
        """
        Increment attempts to entering the otpCode.

        Parameters:
            phoneNumber (str): User phone number to send sms to it.

        Returns:
            int: Returns the number of current attempts in memory.
            None: If nothing has been found, returns none
        """
        try:
            entry = self.Get(phoneNumber)

            if entry is None:
                return None

            entry.attempts += 1
            return entry.attempts
        except Exception as e:
            raise Exception("An error occured during inrementing attempt for entering otpCode")

    def Verify(self, phoneNumber: str, otpCode: int, maxAttempts: int = 5) -> bool:
        """
        Verifying otpCode from cached user phone number.

        Parameters:
            phoneNumber (str): User phone number to send sms to it.
            otpCode (int): otp code.
            maxAttempts (int): maxAttempt for entering otpCode.

        Returns:
            bool: If entered code is correct return a bool indicating truthy of that code.
        """
        try:
            with self._lock:
                entry = self.Get(phoneNumber)

                if entry is None:
                    return False
                
                if datetime.now(UTC) >= entry.expires:
                    self.Delete(phoneNumber)
                    return False

                if entry.attempts >= maxAttempts:
                    self.Delete(phoneNumber)
                    return False

                if entry.otpCode != otpCode:
                    entry.attempts += 1
                    return False

                self.Delete(phoneNumber)
                return True
        except Exception as e:
            raise Exception("An error occured during trying to verifying users phone number")

    def Delete(self, phoneNumber: str) -> bool:
        """
        Deleting created cache and free allocated space.

        Parameters:
            phoneNumber (str): User phone number to send sms to it.

        Returns:
            bool: If entered phone number is correct return a bool deleting that object from cache.
        """
        try:
            key = phoneNumber

            if key not in self._cache:
                return False

            del self._cache[key]
            return True
        except Exception as e:
            raise Exception("An error occured while deallocating mem space")

    def Clear(self) -> None:
        """
        Purging created cache and free allocated space.

        Returns:
            None: This method returns nothing.
        """
        try:
            self._cache.clear()
        except Exception as e:
            raise Exception("An error occured while purging OTP cache")

    def __len__(self) -> int:
        """
        Returning total len of OTP cache in memory space.

        Returns:
            int: This method returns total len of cache in int.
        """
        try:
            return len(self._cache)
        except Exception as e:
            raise Exception("An error occured while returning len of cache")

# Allocating mem and creating an instance of mem cache
OTPCacheContainer = OTPCache(maxsize=1_000, ttl=300)