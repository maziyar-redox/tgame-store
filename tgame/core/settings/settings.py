import logging

from pathlib import Path
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator

from tgame.core.settings.db_providers import AbstractDBProvider, dbProviderFactory

class AppLoggingSettings(BaseSettings):
    """
    Subset of AppSettings to only access logging-related settings.

    This is separated out from AppSettings to allow logging during construction
    of AppSettings.
    """

    TESTING: bool = False
    PRODUCTION: bool

    LOG_CONFIG_OVERRIDE: Path | None = None
    """path to custom logging configuration file"""

    LOG_LEVEL: str = "info"
    """corresponds to standard Python log levels"""

class AppSettings(AppLoggingSettings):
    """
    app_settings_constructor is a factory function that returns an AppSettings object. It is used to inject the
    required dependencies into the AppSettings object and nested child objects. AppSettings should not be instantiated
    directly, but rather through this factory function.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    BASE_URL: str = "http://localhost:8080"
    """trailing slashes are trimmed (ex. `http://localhost:8080/` becomes ``http://localhost:8080`)"""

    @property
    def is_default_base_url(self) -> bool:
        """Returns True if BASE_URL has not been changed from the default."""
        return self.BASE_URL == "http://localhost:8080"

    IS_DEMO: bool = False

    HOST_IP: str = "*"

    API_HOST: str = "0.0.0.0"
    API_PORT: int = 9000
    API_DOCS: bool = True

    TOKEN_JWT_SECRET: str
    TOKEN_ALGORITHM: str
    TOKEN_ACCESS_TOKEN_EXPIRE_MINUTES: int = 48
    """time in hours"""

    @field_validator("TOKEN_ACCESS_TOKEN_EXPIRE_MINUTES")
    @classmethod
    def validate_token_time(cls, v: int) -> int:
        if v < 1:
            raise ValueError("TOKEN_ACCESS_TOKEN_EXPIRE_MINUTES must be at least 1 hour")
        # Certain browsers (webkit) have issues with very long-lived cookies, so we limit to 400 days
        return min(v, 400 * 24)

    OTP_API_KEY: str
    OTP_API_URL: str
    
    @property
    def logger(self) -> logging.Logger:
        # Avoid a circular import by importing here instead of at the file's top-level.
        # get_logger -> AppSettings -> get_logger
        from tgame.core.root_logger import get_logger

        return get_logger()

    # ===============================================
    # Security Configuration

    @field_validator("BASE_URL")
    @classmethod
    def remove_trailing_slash(cls, v: str) -> str:
        if v and v[-1] == "/":
            return v[:-1]

        return v

    @property
    def DOCS_URL(self) -> str | None:
        return "/docs" if self.API_DOCS else None

    # ===============================================
    # Database Configuration

    DB_ENGINE: Literal["postgresql", "sqlite"] = "sqlite"  # Options: 'sqlite', 'postgres'
    DB_PROVIDER: AbstractDBProvider | None = None

    @property
    def DB_URL(self) -> str | None:
        return self.DB_PROVIDER.db_url if self.DB_PROVIDER else None

    @property
    def DB_URL_PUBLIC(self) -> str | None:
        return self.DB_PROVIDER.db_url_public if self.DB_PROVIDER else None

    model_config = SettingsConfigDict(arbitrary_types_allowed=True, extra="allow", env_nested_delimiter="__")


def appSettingConstructor(data_dir: Path, production: bool, env_file: Path, env_encoding="utf-8") -> AppSettings:
    """
    app_settings_constructor is a factory function that returns an AppSettings object. It is used to inject the
    required dependencies into the AppSettings object and nested child objects. AppSettings should not be instantiated
    directly, but rather through this factory function.
    """
    app_settings = AppSettings(
        _env_file=env_file,
        _env_file_encoding=env_encoding
    )

    app_settings.DB_PROVIDER = dbProviderFactory(
        app_settings.DB_ENGINE or "sqlite",
        data_dir,
        env_file=env_file,
        env_encoding=env_encoding,
    )

    return app_settings