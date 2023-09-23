from datetime import datetime
from uuid import UUID

from tracker_constants import SIMPLE_DATE_FORMAT_US, FULL_DATE_FORMAT_US
from tracker_types import CardType

class Account:
    """
    Represents a credit account.
    """
    id: UUID
    balance_last_updated_at: datetime
    balance: float
    company: str
    credit_limit: float
    date_opened: datetime
    interest_rate: float
    name: str

    def __init__(
        self,
        *,
        id: UUID = None,
        balance: float,
        company: str,
        credit_limit: float,
        date_opened: datetime,
        interest_rate: float,
        name: str,
    ):
        self.id = UUID() if id is None else id
        self.balance = balance
        self.company = company
        self.credit_limit = credit_limit
        self.date_opened = date_opened
        self.interest_rate = interest_rate
        self.name = name
        self.balance_last_updated_at = datetime.now()

    def __str__(self) -> str:
        return "\n".join(
            [
                f"\t{self.company} {self.name} ({self.id})",
                "",
                f"\tDate Opened: {self.date_opened.strftime(SIMPLE_DATE_FORMAT_US)}",
                f"\tLast Updated: {self.balance_last_updated_at.strftime(FULL_DATE_FORMAT_US)}",
                "",
                f"\tInterest Rate: {self.interest_rate:.2f}%",
                f"\tBalance: ${self.balance:,.2f}",
                f"\tCredit Limit: ${self.credit_limit:,.2f}",
            ]
        )

    def get_available_credit(self) -> float:
        """
        Returns the available credit of the account.
        """
        return self.credit_limit - self.balance

    def get_utilization(self) -> float:
        """
        Returns the utilization of the account.
        """
        return (self.balance / self.credit_limit) * 100

    def get_monthly_interest(self) -> float:
        """
        Returns the monthly interest of the account.
        """
        return self.balance * (self.interest_rate / 100) / 12

    def update_balance(self, balance: float):
        """
        Updates the balance of the account.
        """
        self.balance = balance
        self.balance_last_updated_at = datetime.now()

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
        *,
        active_promotions: str,
        annual_fee: float,
        card_type: CardType,
        rewards: str,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.active_promotions = active_promotions
        self.annual_fee = annual_fee
        self.card_type = card_type
        self.rewards = rewards

    def __str__(self) -> str:
        return "\n".join(
            [
                f"\t{self.company} {self.name} ({self.card_type.name})",
                "",
                f"\tDate Opened: {self.date_opened.strftime(SIMPLE_DATE_FORMAT_US)}",
                f"\tLast Updated: {self.balance_last_updated_at.strftime(FULL_DATE_FORMAT_US)}",
                "",
                f"\tInterest Rate: {self.interest_rate:.2f}%",
                f"\tBalance: ${self.balance:,.2f}",
                f"\tCredit Limit: ${self.credit_limit:,.2f}",
                f"\tAnnual Fee: ${self.annual_fee:,.2f}",
                "",
                f"\tActive Promotions: {self.active_promotions}",
                f"\tRewards: {self.rewards}",
            ]
        )

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
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
