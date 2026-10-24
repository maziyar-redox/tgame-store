# Importing httpx lib for sending http request
import httpx

# Importing python modules
from dataclasses import dataclass

# Importing config from base config file
from tgame.core.config import settings

@dataclass(slots=True)
class SMSClass():
    """
    A Class for initiating sms sender and sending sms to user.

    Attributes:
        templateId (int): Template id(can be special) for sms.ir api usage.
    """
    def __init__(self, templateId: int = 123456) -> None:
        """
        Initialize an SMSClass object.

        Parameters:
            templateId (int): Template id(can be special) for sms.ir api usage.
        """
        self.__templateId: int = templateId

    def Send(self, phoneNumber: str, otpCode: int) -> bool:
        """
        Send the sms for dedicated phoneNumber with special otpCode.

        Parameters:
            phoneNumber (str): User phone number to send sms to it.
            otpCode (int): Special 6 digit otp code for verifying user.

        Returns:
            bool: Returns the state of the sent message or exception if not sent.
        """
        try:
            smsHeaders = {
                "Content-Type": "application/json",
                "Accept": "text/plain",
                "x-api-key": f"{settings.OTP_API_KEY}"
            }

            smsData = {
                "mobile": f"{phoneNumber}",
                "templateId": f"{self.__templateId}",
                "parameters": [
                    {
                        "name": "CODE",
                        "value": f"{otpCode}"
                    }
                ]
            }
            
            requestResult = httpx.post(settings.OTP_API_URL, json=smsData, headers=smsHeaders).json()
            
            if requestResult["status"] == 1:
                return True

            raise Exception("Sms cannot sent to user.")
        
        except Exception:
            raise Exception("Sms cannot sent to user.")