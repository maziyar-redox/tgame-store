import logging
import os
import secrets
from datetime import UTC, datetime
from enum import StrEnum
from pathlib import Path
from typing import Annotated, Literal, NamedTuple

from dateutil.tz import tzlocal
from pydantic import PlainSerializer, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

from tgame.core.settings.db_providers import AbstractDBProvider, db_provider_factory

class ScheduleTime(NamedTuple):
    hour: int
    minute: int

class FeatureDetails(NamedTuple):
    enabled: bool
    """Indicates if the feature is enabled or not"""
    description: str | None
    """Short description describing why the feature is not ready"""

    def __str__(self):
        s = f"Enabled: {self.enabled}"
        if not self.enabled and self.description:
            s += f"\nReason: {self.description}"
        return s

MaskedNoneString = Annotated[
    str | None,
    PlainSerializer(lambda x: None if x is None else "*****", return_type=str | None),
]
"""
Custom serializer for sensitive settings. If the setting is None, then will serialize as null, otherwise,
the secret will be serialized as '*****'
"""


def determine_secrets(data_dir: Path, secret: str, production: bool) -> str:
    if not production:
        return "shh-secret-test-key"

    secrets_file = data_dir.joinpath(secret)
    if secrets_file.is_file():
        with open(secrets_file) as f:
            existing_secret = f.read().strip()
        if existing_secret:
            return existing_secret

    data_dir.mkdir(parents=True, exist_ok=True)
    new_secret = secrets.token_hex(32)
    tmp_file = secrets_file.with_suffix(".tmp")
    with open(tmp_file, "w") as f:
        f.write(new_secret)
        f.flush()
        os.fsync(f.fileno())
    tmp_file.replace(secrets_file)
    return new_secret


def get_secrets_dir() -> str | None:
    """
    Returns a directory to load secret settings from, or `None` if the secrets
    directory does not exist or cannot be accessed.
    """
    # Avoid a circular import by importing here instead of at the file's top-level.
    # get_logger -> AppSettings -> get_logger
    from tgame.core.root_logger import get_logger

    logger = get_logger()

    secrets_dir = "/run/secrets"

    # Check that the secrets directory exists.
    if not os.path.exists(secrets_dir):
        logger.warning(f"Secrets directory '{secrets_dir}' does not exist")
        return None

    # Likewise, check we have permission to read from the secrets directory.
    if not os.access(secrets_dir, os.R_OK):
        logger.warning(f"Secrets directory '{secrets_dir}' cannot be read from. Check permissions")
        return None

    # The secrets directory exists and can be accessed.
    return secrets_dir

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
    TOKEN_TIME: int = 48
    """time in hours"""

    @field_validator("TOKEN_TIME")
    @classmethod
    def validate_token_time(cls, v: int) -> int:
        if v < 1:
            raise ValueError("TOKEN_TIME must be at least 1 hour")
        # Certain browsers (webkit) have issues with very long-lived cookies, so we limit to 400 days
        return min(v, 400 * 24)

    SECRET: str
    SESSION_SECRET: str

    GIT_COMMIT_HASH: str = "unknown"

    ALLOW_SIGNUP: bool = False
    ALLOW_PASSWORD_LOGIN: bool = True

    HTTP_ALLOW_LIST: str = ""
    """Comma-separated hosts or CIDRs that server-initiated requests (recipe scraping, webhooks,
    recipe actions) may reach even if they resolve to an otherwise-blocked private/internal address.
    Use this to allow a known internal server."""

    HTTP_DISALLOW_LIST: str = ""
    """Comma-separated hosts or CIDRs that server-initiated requests may never reach, even if public.
    Takes precedence over `HTTP_ALLOW_LIST`."""

    @property
    def http_allow_list(self) -> list[str]:
        return [host.strip() for host in self.HTTP_ALLOW_LIST.split(",") if host.strip()]

    @property
    def http_disallow_list(self) -> list[str]:
        return [host.strip() for host in self.HTTP_DISALLOW_LIST.split(",") if host.strip()]

    DAILY_SCHEDULE_TIME: str = "23:45"
    """Local server time, in HH:MM format. See `DAILY_SCHEDULE_TIME_UTC` for the parsed UTC equivalent"""

    @property
    def logger(self) -> logging.Logger:
        # Avoid a circular import by importing here instead of at the file's top-level.
        # get_logger -> AppSettings -> get_logger
        from tgame.core.root_logger import get_logger

        return get_logger()

    @property
    def DAILY_SCHEDULE_TIME_UTC(self) -> ScheduleTime:
        """The DAILY_SCHEDULE_TIME in UTC, parsed into hours and minutes"""

        # parse DAILY_SCHEDULE_TIME into hours and minutes
        try:
            hour_str, minute_str = self.DAILY_SCHEDULE_TIME.split(":")
            local_hour = int(hour_str)
            local_minute = int(minute_str)
        except ValueError:
            local_hour = 23
            local_minute = 45
            self.logger.exception(
                f"Unable to parse {self.DAILY_SCHEDULE_TIME=} as HH:MM; defaulting to {local_hour}:{local_minute}"
            )

        # DAILY_SCHEDULE_TIME is in local time, so we convert it to UTC
        local_tz = tzlocal()
        now = datetime.now(local_tz)
        local_time = now.replace(hour=local_hour, minute=local_minute)
        utc_time = local_time.astimezone(UTC)

        self.logger.debug(f"Local time: {local_hour}:{local_minute} | UTC time: {utc_time.hour}:{utc_time.minute}")
        return ScheduleTime(utc_time.hour, utc_time.minute)

    # ===============================================
    # Security Configuration

    SECURITY_MAX_LOGIN_ATTEMPTS: int = 5
    SECURITY_USER_LOCKOUT_TIME: int = 24
    "time in hours"

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

    DB_ENGINE: Literal["postgressql", "sqlite"] = "sqlite"  # Options: 'sqlite', 'postgres'
    DB_PROVIDER: AbstractDBProvider | None = None

    SQLITE_MIGRATE_JOURNAL_WAL: bool = False

    @property
    def DB_URL(self) -> str | None:
        return self.DB_PROVIDER.db_url if self.DB_PROVIDER else None

    @property
    def DB_URL_PUBLIC(self) -> str | None:
        return self.DB_PROVIDER.db_url_public if self.DB_PROVIDER else None

    DEFAULT_GROUP: str = "Home"
    DEFAULT_HOUSEHOLD: str = "Family"

    _DEFAULT_EMAIL: str = "changeme@example.com"
    """
    This is the default email used for the first user created in the database. This is only used if no users
    exist in the database. it should no longer be set by end users.
    """
    _DEFAULT_PASSWORD: str = "MyPassword"
    """
    This is the default password used for the first user created in the database. This is only used if no users
    exist in the database. it should no longer be set by end users.
    """

    # ===============================================
    # Email Configuration

    SMTP_HOST: str | None = None
    SMTP_PORT: str | None = "587"
    SMTP_FROM_NAME: str | None = "Tgame"
    SMTP_FROM_EMAIL: str | None = None
    SMTP_USER: MaskedNoneString = None
    SMTP_PASSWORD: MaskedNoneString = None
    SMTP_AUTH_STRATEGY: str | None = "TLS"  # Options: 'TLS', 'SSL', 'NONE'

    @property
    def SMTP_ENABLE(self) -> bool:
        return self.SMTP_FEATURE.enabled

    @property
    def SMTP_FEATURE(self) -> FeatureDetails:
        return AppSettings.validate_smtp(
            self.SMTP_HOST,
            self.SMTP_PORT,
            self.SMTP_FROM_NAME,
            self.SMTP_FROM_EMAIL,
            self.SMTP_AUTH_STRATEGY,
            self.SMTP_USER,
            self.SMTP_PASSWORD,
        )

    @staticmethod
    def validate_smtp(
        host: str | None = None,
        port: str | None = None,
        from_name: str | None = None,
        from_email: str | None = None,
        strategy: str | None = None,
        user: str | None = None,
        password: str | None = None,
    ) -> FeatureDetails:
        """Validates all SMTP variables are set"""
        description = None
        required = {
            "SMTP_HOST": host,
            "SMTP_PORT": port,
            "SMTP_FROM_NAME": from_name,
            "SMTP_FROM_EMAIL": from_email,
            "SMTP_AUTH_STRATEGY": strategy,
        }
        if user or password:
            required["SMTP_USER"] = user
            required["SMTP_PASSWORD"] = password

        missing_values = [key for (key, value) in required.items() if value is None or value == ""]
        if missing_values:
            description = f"Missing required values for {missing_values}"

        return FeatureDetails(enabled=not missing_values, description=description)

    # ===============================================
    # Web Concurrency

    WORKER_PER_CORE: int = 1
    """Old gunicorn env for workers per core."""

    UVICORN_WORKERS: int = 1
    """Number of Uvicorn workers to run."""

    @property
    def WORKERS(self) -> int:
        return max(1, self.WORKER_PER_CORE * self.UVICORN_WORKERS)

    model_config = SettingsConfigDict(arbitrary_types_allowed=True, extra="allow", env_nested_delimiter="__")

    # ===============================================
    # TLS

    TLS_CERTIFICATE_PATH: str | os.PathLike[str] | None = None
    """Path where the certificate resides."""

    TLS_PRIVATE_KEY_PATH: str | os.PathLike[str] | None = None
    """Path where the private key resides."""


def app_settings_constructor(data_dir: Path, production: bool, env_file: Path, env_encoding="utf-8") -> AppSettings:
    """
    app_settings_constructor is a factory function that returns an AppSettings object. It is used to inject the
    required dependencies into the AppSettings object and nested child objects. AppSettings should not be instantiated
    directly, but rather through this factory function.
    """
    secret_settings = {
        "SECRET": determine_secrets(data_dir, ".secret", production),
        "SESSION_SECRET": determine_secrets(data_dir, ".session_secret", production),
    }
    app_settings = AppSettings(
        _env_file=env_file,  # type: ignore
        _env_file_encoding=env_encoding,  # type: ignore
        # `get_secrets_dir` must be called here rather than within `AppSettings`
        # to avoid a circular import.
        _secrets_dir=get_secrets_dir(),  # type: ignore
        **secret_settings,
    )

    app_settings.DB_PROVIDER = db_provider_factory(
        app_settings.DB_ENGINE or "sqlite",
        data_dir,
        env_file=env_file,
        env_encoding=env_encoding,
    )

    return app_settings