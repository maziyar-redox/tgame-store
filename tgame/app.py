import re
import warnings
import uvicorn

# pyrdfa3 is no longer being updated and has docstrings that emit syntax warnings
warnings.filterwarnings(
    "ignore", module=".*pyRdfa", category=SyntaxWarning, message=re.escape("invalid escape sequence '\\-'")
)

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.requests import Request
from contextlib import asynccontextmanager
from typing import AsyncGenerator, Any

from tgame.routes import router

from tgame.db.database import createDbAndTables

from tgame.core.config import settings
from tgame.core.root_logger import get_logger
from tgame.core.settings.static import APP_VERSION

logger = get_logger()

description = """
Tgame Store is an ecommerce web application for purchasing games, tech products, and more. 
This is the interactive RESTful API documentation that can be used to explore and test the API.
"""

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, Any]:
    """
    lifespan function to executing some hooks before app startup.

    Args:
        app (FastAPI): app context space.

    Returns:
        AsyncGenerator[None, Any]: A AsyncGenerator.
    """
    logger.info("start: database initialization")
    
    createDbAndTables()
    
    logger.info("end: database initialization")

    logger.info("-----SYSTEM STARTUP-----")
    
    yield

    logger.info("-----SYSTEM SHUTDOWN----- \n")

# Initiating FastAPI app
app = FastAPI(
    title="Tgame",
    description=description,
    version=APP_VERSION,
    docs_url=settings.DOCS_URL,
    lifespan=lifespan
)

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request: Request, exc: StarletteHTTPException) -> JSONResponse:
    """
    Modifying http exception handler from starlette official function.

    Args:
        request (Request): request context.
        exc (StarletteHTTPException): execution details.

    Returns:
        JSONResponse: A JSON response dedicating error.
    """
    content = {
        "status": False,
        "detail": exc.detail
    }
    return JSONResponse(content=content, status_code=exc.status_code)

# Including router from routes in route folder
app.include_router(router)

def main():
    """
    Initiating uvicorn process.

    Returns:
        None: Returns nothing.
    """
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=settings.API_PORT,
        reload=True,
        reload_dirs=["tgame"],
        reload_delay=2,
        log_level="info",
        use_colors=True,
        log_config=None,
        workers=1,
        forwarded_allow_ips="*",
        ws="websockets-sansio",
    )


if __name__ == "__main__":
    main()