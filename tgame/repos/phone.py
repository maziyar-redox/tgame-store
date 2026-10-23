import re

def phone_number_normalizer(phone: str) -> str:
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
    """

    digits = re.sub(r"\D", "", phone)

    if digits.startswith("0098"):
        digits = digits[4:]
    elif digits.startswith("98") and len(digits) == 12:
        digits = digits[2:]

    if digits.startswith("0"):
        digits = digits[1:]

    if len(digits) != 10 or not digits.startswith("9"):
        raise ValueError(f"Invalid Iranian mobile number: {phone!r}")

    return digits