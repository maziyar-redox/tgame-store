from pathlib import Path

class AppDirectories():
    """
    App directories for ensuring that in container environment,
    We have these dirs

    Attributes:
        DATA_DIR (Path): Main data dir
        BACKUP_DIR (Path): Backup dir for server backup files
        USER_DIR (Path): User data dir for storing user temp files
        TEMPLATE_DIR (Path): Template dir for storing templates
        _TEMP_DIR (Path): Temp dir for temperory files
    """
    def __init__(self, data_dir: Path) -> None:
        self.DATA_DIR = data_dir
        self.BACKUP_DIR = data_dir.joinpath("backups")
        self.USER_DIR = data_dir.joinpath("users")
        self.TEMPLATE_DIR = data_dir.joinpath("templates")
        self._TEMP_DIR = data_dir.joinpath(".temp")

        self.ensure_directories()

    @property
    def TEMP_DIR(self):
        return self._TEMP_DIR

    def ensure_directories(self):
        required_dirs = [
            self.BACKUP_DIR,
            self.TEMPLATE_DIR,
            self.USER_DIR,
        ]

        for dir in required_dirs:
            dir.mkdir(parents=True, exist_ok=True)