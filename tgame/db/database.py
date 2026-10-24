from fastapi import Depends
from sqlmodel import SQLModel, create_engine, Session
from typing import Generator, Any, Annotated

sqlite_url: str = "sqlite:///database.db"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)

def createDbAndTables():
    """
    Initiating database engine

    Returns:
        None: this function returns nothing.
    """
    try:
        SQLModel.metadata.create_all(engine)
    except Exception as e:
        raise Exception("An error occured during initiating database and tables")

def getSession() -> Generator[Session, Any, None]:
    """
    Getting session

    Returns:
        Generator[Session, Any, None]: this function returns Generator.
    """
    try:
        with Session(engine) as session:
            yield session
    except Exception as e:
        raise Exception("As error occured during getting session")

SessionDep = Annotated[Session, Depends(getSession)]