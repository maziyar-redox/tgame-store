import uvicorn

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def aa():
    return "ok"

def main():
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000
    )