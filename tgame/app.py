import re
import warnings

# pyrdfa3 is no longer being updated and has docstrings that emit syntax warnings
warnings.filterwarnings(
    "ignore", module=".*pyRdfa", category=SyntaxWarning, message=re.escape("invalid escape sequence '\\-'")
)

# ruff: noqa: E402
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.routing import APIRoute
from starlette.middleware.sessions import SessionMiddleware

from tgame.core.config import get_app_settings
from tgame.core.root_logger import get_logger
from tgame.core.settings.static import APP_VERSION
# from mealie.middleware.locale_context import LocaleContextMiddleware
# from mealie.routes import router, spa, utility_routes
# from mealie.routes.handlers import register_debug_handler
# from mealie.routes.media import media_router
# from mealie.services.scheduler import SchedulerRegistry, SchedulerService, tasks

settings = get_app_settings()

description = """
Tgame Store is an ecommerce web application for purchasing games, tech products, and more. 
This is the interactive RESTful API documentation that can be used to explore and test the API.
"""

logger = get_logger()


@asynccontextmanager
async def lifespan_fn(_: FastAPI) -> AsyncGenerator[None]:
    """
    lifespan_fn controls the startup and shutdown of the FastAPI Application.
    This function is called when the FastAPI application starts and stops.

    See FastAPI documentation for more information:
      - https://fastapi.tiangolo.com/advanced/events/
    """
    logger.info("start: database initialization")
    # import mealie.db.init_db as init_db

    # init_db.main()
    logger.info("end: database initialization")

    # await start_scheduler()

    logger.info("-----SYSTEM STARTUP-----")
    logger.info("------APP SETTINGS------")
    logger.info(
        settings.model_dump_json(
            indent=4,
        )
    )
    logger.info("------APP FEATURES------")
    logger.info("--------==SMTP==--------")
    logger.info(settings.SMTP_FEATURE)
    logger.info("------------------------")

    yield

    logger.info("-----SYSTEM SHUTDOWN----- \n")


app = FastAPI(
    title="Tgame",
    description=description,
    version=APP_VERSION,
    docs_url=settings.DOCS_URL,
    lifespan=lifespan_fn,
)

app.add_middleware(GZipMiddleware, minimum_size=1000)
app.add_middleware(SessionMiddleware, secret_key=settings.SESSION_SECRET)
# app.add_middleware(LocaleContextMiddleware)

if not settings.PRODUCTION:
    allowed_origins = ["http://localhost:3000", "https://tgame1store.ir"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

if settings.PRODUCTION:
    allowed_origins = ["https://tgame1store.ir"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# register_debug_handler(app)


""" async def start_scheduler():
    SchedulerRegistry.register_daily(
        tasks.purge_expired_tokens,
        tasks.purge_group_registration,
        tasks.purge_password_reset_tokens,
        tasks.purge_group_data_exports,
        tasks.create_mealplan_timeline_events,
        tasks.delete_old_checked_list_items,
    )

    SchedulerRegistry.register_minutely(
        tasks.post_group_webhooks,
    )

    SchedulerRegistry.register_hourly(
        tasks.locked_user_reset,
    )

    SchedulerRegistry.print_jobs()

    await SchedulerService.start() """


""" def api_routers():
    app.include_router(router)
    app.include_router(media_router)
    app.include_router(utility_routes.router)

    if settings.PRODUCTION and not settings.TESTING:
        spa.mount_spa(app) """


# api_routers()

# fix routes that would get their tags duplicated by use of @controller,
# leading to duplicate definitions in the openapi spec
for route in app.routes:
    if isinstance(route, APIRoute):
        route.tags = list(set(route.tags))


def main():
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