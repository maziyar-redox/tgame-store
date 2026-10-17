import uvicorn

from fastapi import FastAPI
from sqlmodel import create_engine, Session, SQLModel, select

from tgame.models.user import User

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url, echo=True)

def get_session():
    with Session(engine) as session:
        yield session

app = FastAPI()

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)

@app.get("/")
async def aa():
    with Session(engine) as session:
        users = session.exec(select(User)).all()
        return users

@app.get("/ab")
async def ab():
    with Session(engine) as session:
        users = User(first_name="maziyar", last_name="isanezhad", phone_number="9117462751")
        session.add(users)
        session.commit()
        session.refresh(users)
        return "ok"

def main():
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000
    )