from credittrack.utils.types import CardType
from credittrack.entities.account import Account


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
