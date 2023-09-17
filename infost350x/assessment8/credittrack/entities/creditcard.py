from credittrack.constants import SIMPLE_DATE_FORMAT_US, FULL_DATE_FORMAT_US
from credittrack.entities.account import Account
from credittrack.utils.types import CardType


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
