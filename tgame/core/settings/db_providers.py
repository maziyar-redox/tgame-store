from abc import ABC, abstractmethod
from pathlib import Path
from urllib import parse as urlparse
from typing import Literal
from pydantic import BaseModel, PostgresDsn
from pydantic_settings import BaseSettings, SettingsConfigDict


class AbstractDBProvider(ABC):
    """
    Abstract classs for database providers(sqlite and postgresql)
    """
    @property
    @abstractmethod
    def db_url(self) -> str: ...

    @property
    @abstractmethod
    def db_url_public(self) -> str: ...


class SQLiteProvider(AbstractDBProvider, BaseModel):
    """
    Class for database provider(sqlite) which initiate the sqlite database

    Arguments:
        data_dir (Path): A path for putting db init in local
        prefix (str): A prefix for database
    """
    data_dir: Path
    prefix: str = ""

    @property
    def db_path(self):
        return self.data_dir / f"{self.prefix}tgame.db"

    @property
    def db_url(self) -> str:
        return f"sqlite:///{self.db_path.absolute()!s}"

    @property
    def db_url_public(self) -> str:
        return self.db_url


class PostgresProvider(AbstractDBProvider, BaseSettings):
    """
    Class for database provider(postgresql) which initiate the postgresql database

    Arguments:
        data_dir (Path): A path for putting db init in local
        prefix (str): A prefix for database
    """
    POSTGRES_USER: str = "tgame"
    POSTGRES_PASSWORD: str = "tgame"
    POSTGRES_SERVER: str = "postgres"
    POSTGRES_PORT: str = "5432"
    POSTGRES_DB: str = "tgame"
    POSTGRES_URL_OVERRIDE: str | None = None

    model_config = SettingsConfigDict(arbitrary_types_allowed=True, extra="allow")

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def _parse_override_url(self, url: str) -> str:
        if not url.startswith("postgresql://"):
            raise ValueError("POSTGRES_URL_OVERRIDE scheme must be postgresql")

        # SQLAlchemy resolves a bare postgresql:// to psycopg 3, so the installed driver is named explicitly
        url = "postgresql+psycopg2://" + url.removeprefix("postgresql://")
        scheme, remainder = url.split("://", 1)
        if "@" in remainder and ":" in remainder.split("@")[0]:
            credentials, host_part = remainder.rsplit("@", 1)
            user, password = credentials.split(":", 1)
            return f"{scheme}://{user}:{urlparse.quote(password, safe='')}@{host_part}"

        return url

    @property
    def db_url(self) -> str:
        if self.POSTGRES_URL_OVERRIDE:
            return self._parse_override_url(self.POSTGRES_URL_OVERRIDE)

        return str(
            PostgresDsn.build(
                scheme="postgresql+psycopg2",
                username=self.POSTGRES_USER,
                password=urlparse.quote(self.POSTGRES_PASSWORD),
                host=f"{self.POSTGRES_SERVER}:{self.POSTGRES_PORT}",
                path=f"{self.POSTGRES_DB or ''}",
            )
        )

    @property
    def db_url_public(self) -> str:
        if self.POSTGRES_URL_OVERRIDE:
            return "Postgres Url Overridden"

        return f"postgresql://******:******@{self.POSTGRES_SERVER}:{self.POSTGRES_PORT}/{self.POSTGRES_DB or ''}"


def dbProviderFactory(provider_name: Literal["postgresql", "sqlite"], data_dir: Path, env_file: Path, env_encoding="utf-8") -> AbstractDBProvider:
    """
    Documented engines are only sqlite and postgres. Anything else used to
    fall through to SQLite, so a typo such as "postgress" started a Postgres
    deployment on a local file and reported success.

    Returns:
        AbstractDBProvider: an abstract returned, contains db settings
    """
    if provider_name == "postgresql":
        return PostgresProvider(_env_file=env_file, _env_file_encoding=env_encoding)
    if provider_name == "sqlite":
        return SQLiteProvider(data_dir=data_dir)
    raise ValueError(f"DB_ENGINE must be 'sqlite' or 'postgresql', got {provider_name!r}")