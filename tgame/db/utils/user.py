from sqlmodel import Session

from tgame.repos.phone import phone_number_normalizer

class UserAuthClass():
    def __init__(self, session: Session) -> None:
        self.__session: Session = session
""" 
    def isVerifiedByPhone(self, phone_number: str) -> bool:
        normalizePhone = phone_number_normalizer(phone=phone_number)

         """