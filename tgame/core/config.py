import os
import dotenv

from pathlib import Path

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
    global PRODUCTION, TESTING, BASE_DIR, DATA_DIR

    if TESTING:
        return BASE_DIR.joinpath("tests/.temp/testing")

    if PRODUCTION:
        return Path(DATA_DIR if DATA_DIR else "/app/data")

    return BASE_DIR.joinpath("tests", ".temp", "dev")

print(determineDataDir())

JWT_SECRET = os.getenv("JWT_SECRET", "")
ALGORITHM = os.getenv("ALGORITHM", "")
ACCESS_TOKEN_EXPIRE_MINUTES= os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 120)

OTP_API_KEY = os.getenv("OTP_API_KEY", "")
OTP_API_URL = os.getenv("OTP_API_URL", "")