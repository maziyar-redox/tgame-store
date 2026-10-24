from pathlib import Path

from tgame import __version__

APP_VERSION = __version__

CWD = Path(__file__).parent
PACKAGE_DIR = CWD.parent.parent
BASE_DIR = CWD.parent.parent