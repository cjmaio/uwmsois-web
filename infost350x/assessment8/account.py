from enum import Enum
from datetime import datetime


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


class Account:
    """
    Represents a credit account, whether its a credit card or regular revolving
    line of credit that you can withdraw from.
    """
    balance_last_updated_at: str
    balance: float
    company: str
    credit_limit: float
    date_opened: str
    interest_rate: float
    name: str

    def __init__(
        self,
        *,  # I want these all to be forced to be named arguments
        balance: float,
        company: str,
        credit_limit: float,
        date_opened: str,
        interest_rate: float,
        name: str,
    ):
        self.balance = balance
        self.company = company
        self.credit_limit = credit_limit
        self.date_opened = date_opened
        self.interest_rate = interest_rate
        self.name = name
        self.balance_last_updated_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    def __str__(self):
        return '{} ({})'.format(self.name, self.company)

    def update_balance(self, balance: float):
        """
        Updates the balance of the account.
        """
        self.balance = balance
        self.balance_last_updated_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    def update_interest_rate(self, interest_rate: float):
        """
        Updates the interest rate of the account.
        """
        self.interest_rate = interest_rate

    def update_credit_limit(self, credit_limit: float):
        """
        Updates the credit limit of the account.
        """
        self.credit_limit = credit_limit


class CreditCard(Account):
    active_promotions: str
    annual_fee: float
    card_type: CardType
    rewards: str

    def __init__(
        self,
        *,  # I want these all to be forced to be named arguments
        active_promotions: str,
        annual_fee: float,
        card_type: CardType,
        rewards: str,
        **kwargs  # This is a catch all to pass the arugments through to the subclass
    ):
        super().__init__(**kwargs)
        self.active_promotions = active_promotions
        self.annual_fee = annual_fee
        self.card_type = card_type
        self.rewards = rewards

    def update_annual_fee(self, annual_fee: float):
        """
        Updates the annual fee of the account.
        """
        self.annual_fee = annual_fee

    def update_rewards(self, rewards: str):
        """
        Updates the rewards of the account.
        """
        self.rewards = rewards

    def update_active_promotions(self, active_promotions: str):
        """
        Updates the active promotions of the account.
        """
        self.active_promotions = active_promotions


class LineOfCredit(Account):
    def __init__(
        self,
        **kwargs  # This is a catch all to pass the arugments through to the subclass
    ):
        super().__init__(**kwargs)
