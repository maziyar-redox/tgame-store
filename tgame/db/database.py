from fastapi import Depends
from sqlmodel import SQLModel
from sqlmodel.ext.asyncio.session import AsyncSession
from sqlalchemy.ext.asyncio import AsyncEngine, async_sessionmaker, create_async_engine
from typing import AsyncGenerator, Annotated

from tgame.core.config import settings

engine: AsyncEngine = create_async_engine(
    str(settings.DB_URL),
    echo=False,
    pool_pre_ping=True,
)

# Async session factory
async_session_factory = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


async def createDbAndTables() -> None:
    """
    Initiating database engine and tables (async).

    Returns:
        None
    """
    try:
        async with engine.begin() as conn:
            await conn.run_sync(SQLModel.metadata.create_all)
    except Exception as e:
        raise Exception("An error occured during initiating database and tables") from e


async def getSession() -> AsyncGenerator[AsyncSession, None]:
    """
    Getting async session.

    Yields:
        AsyncSession
    """
    async with async_session_factory() as session:
        try:
            yield session
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()


SessionDep = Annotated[AsyncSession, Depends(getSession)]