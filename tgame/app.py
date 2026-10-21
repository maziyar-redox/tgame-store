import re
import warnings

# pyrdfa3 is no longer being updated and has docstrings that emit syntax warnings
warnings.filterwarnings(
    "ignore", module=".*pyRdfa", category=SyntaxWarning, message=re.escape("invalid escape sequence '\\-'")
)

import uvicorn

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.requests import Request
from contextlib import asynccontextmanager

from tgame.routes import router

from tgame.db import db

@asynccontextmanager
async def lifespan(app: FastAPI):
    db.create_db_and_tables()
    yield

app = FastAPI(
    title="Tgame",
    lifespan=lifespan
)

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    content = {
        "status": False,
        "detail": exc.detail
    }
    return JSONResponse(content=content, status_code=exc.status_code)

app.include_router(router)

def main():
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        reload_dirs=["tgame"],
        reload_delay=2,
        log_level="info",
        use_colors=True,
        workers=1,
    )


if __name__ == "__main__":
    main()