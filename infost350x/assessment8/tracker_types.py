from enum import Enum


class SortType(Enum):
    """
    Represents the type of sort.
    """

    NAME = 1
    BALANCE = 2
    DATE_OPENED = 3
    INTEREST_RATE = 4
    CREDIT_LIMIT = 5
    UTILIZATION = 6
    AVAILABLE_CREDIT = 7
    LAST_UPDATED_AT = 8


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
