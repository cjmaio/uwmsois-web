from datetime import datetime


class Account:
    """
    Represents a credit account, whether its a credit card or regular revolving
    line of credit that you can withdraw from.
    """
    balance_last_updated_at: datetime
    balance: float
    company: str
    credit_limit: float
    date_opened: datetime
    interest_rate: float
    name: str

    def __init__(
        self,
        *,  # I want these all to be forced to be named arguments
        balance: float,
        company: str,
        credit_limit: float,
        date_opened: datetime,
        interest_rate: float,
        name: str,
    ):
        self.balance = balance
        self.company = company
        self.credit_limit = credit_limit
        self.date_opened = date_opened
        self.interest_rate = interest_rate
        self.name = name
        self.balance_last_updated_at = datetime.now()

    def get_available_credit(self):
        """
        Returns the available credit of the account.
        """
        return self.credit_limit - self.balance

    def get_utilization(self):
        """
        Returns the utilization of the account.
        """
        return (self.balance / self.credit_limit) * 100

    def get_monthly_interest(self):
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
