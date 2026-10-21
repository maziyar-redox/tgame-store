import httpx

from secrets import randbelow

from tgame.core.config import OTP_API_KEY, OTP_API_URL

class SMSClass():
    def __init__(self, template_id: int = 123456) -> None:
        self.__template_id: int = template_id

    def send(self, phone_number: str, otp_code: int) -> bool:

        try:
            headers = {
                "Content-Type": "application/json",
                "Accept": "text/plain",
                "x-api-key": f"{OTP_API_KEY}"
            }

            data = {
                "mobile": f"{phone_number}",
                "templateId": f"{self.__template_id}",
                "parameters": [
                    {
                        "name": "CODE",
                        "value": f"{otp_code}"
                    }
                ]
            }
            
            otp_res = httpx.post(OTP_API_URL, json=data, headers=headers).json()
            
            if otp_res["status"] == 1:
                return True

            return False
        
        except Exception:
            return False