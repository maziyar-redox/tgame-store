import os
import dotenv

from pathlib import Path
from functools import lru_cache

from tgame.core.settings import (
    AppDirectories,
    AppLoggingSettings,
    AppSettings,
    appSettingConstructor
)

# Determining .env path in application
CWD = Path(__file__).parent
BASE_DIR = CWD.parent
ENV = BASE_DIR.joinpath(".env")

# loading dotenv environment
dotenv.load_dotenv(ENV)

PRODUCTION = os.getenv("PRODUCTION", "True").lower() in ["true", "1"]
TESTING = os.getenv("TESTING", "False").lower() in ["true", "1"]
DATA_DIR = os.getenv("DATA_DIR")

def determineDataDir() -> Path:
    """
    Determines data directory for creating it for server space

    Returns:
        Path: A path is returned in answer
    """
    global PRODUCTION, TESTING, BASE_DIR, DATA_DIR

    if TESTING:
        return BASE_DIR.joinpath("tests/.temp/testing")

    if PRODUCTION:
        return Path(DATA_DIR if DATA_DIR else "/app/data")

    return BASE_DIR.joinpath("tests", ".temp", "dev")

@lru_cache
def getAppDirs() -> AppDirectories:
    return AppDirectories(determineDataDir())

@lru_cache
def getAppSettings() -> AppSettings:
    return appSettingConstructor(env_file=ENV, production=PRODUCTION, data_dir=determineDataDir())

@lru_cache
def getLoggingSettings() -> AppLoggingSettings:
    return AppLoggingSettings(PRODUCTION=PRODUCTION)

settings = getAppSettings()