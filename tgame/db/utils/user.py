from sqlmodel import Session

class UserAuthClass():
    def __init__(self, session: Session) -> None:
        self.__session: Session = session