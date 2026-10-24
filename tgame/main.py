import uvicorn

from tgame.app import settings
from tgame.core.logger.config import log_config

def main():
    uvicorn.run(
        "tgame.app:app",
        host=settings.API_HOST,
        port=settings.API_PORT,
        reload=True,
        reload_dirs=["tgame"],
        reload_delay=2,
        log_level=settings.LOG_LEVEL.lower(),
        log_config=log_config(),
        workers=1,
        forwarded_allow_ips=settings.HOST_IP,
        ws="websockets-sansio",
    )

if __name__ == "__main__":
    main()