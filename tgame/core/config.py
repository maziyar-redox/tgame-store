import os
import dotenv

from pathlib import Path

dotenv.load_dotenv()

CWD = Path(__file__).parent
BASE_DIR = CWD.parent.parent
ENV = BASE_DIR.joinpath(".env")

dotenv.load_dotenv(ENV)

JWT_SECRET = os.getenv("JWT_SECRET", "")
ALGORITHM = os.getenv("ALGORITHM", "")
ACCESS_TOKEN_EXPIRE_MINUTES= os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 120)

OTP_API_KEY = os.getenv("OTP_API_KEY", "")
OTP_API_URL = os.getenv("OTP_API_URL", "")