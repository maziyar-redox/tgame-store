import re

def phoneNumberNormalizer(phoneNumber: str) -> str:
    """
    Normalize an Iranian mobile number to the '9XXXXXXXXX' format (10 digits).

    Accepts:
        +98911xxxxxxx
        98911xxxxxxx
        0098911xxxxxxx
        0911xxxxxxx
        911xxxxxxx
        With spaces/dashes/parens in between.
    Raises:
        ValueError if the input is not a valid Iranian mobile number.

    Parameters:
        phoneNumber (str): User phone number to send sms to it.
    
    Returns:
        str: returns formatted string
    """

    digits = re.sub(r"\D", "", phoneNumber)

    if digits.startswith("0098"):
        digits = digits[4:]
    elif digits.startswith("98") and len(digits) == 12:
        digits = digits[2:]

    if digits.startswith("0"):
        digits = digits[1:]

    if not re.fullmatch(r"9\d{9}", digits):
        raise ValueError("Invalid Iranian mobile number")

    return digits