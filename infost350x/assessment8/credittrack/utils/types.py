from enum import Enum


class AccountType(Enum):
    """
    Represents the type of account.
    """
    CREDIT_CARD = 1
    LINE_OF_CREDIT = 2


class CardType(Enum):
    """
    Represents the type of card.
    """
    VISA = 1
    MASTERCARD = 2
    AMERICAN_EXPRESS = 3
    DISCOVER = 4
    STORE = 5


class InputType(Enum):
    """
    Represents the type of input.
    """
    STRING = 1
    FLOAT = 2
    INT = 3
    DATE = 4
    OPTION = 5
