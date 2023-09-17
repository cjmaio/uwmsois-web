class SavingsAccount:
    """
    Class that represents a savings account for a named customer.
    """
    name: str
    balance: float

    def __init__(self, name: str):
        self.name = name
        self.balance = 0

    def _printBalance(self) -> None:
        print('Balance: ${:,.2f}'.format(self.balance))

    def makeDeposit(self, amount: float) -> None:
        """
        Make a deposit into this account.

        Args:
            amount (float): The amount to deposit.
        """
        self.balance += amount
        self._printBalance()

    def makeWithdrawal(self, amount: float) -> None:
        """
        Make a withdrawal from this account.

        Args:
            amount (float): The amount to withdraw.
        """
        if amount > self.balance:
            print('Insufficient funds, transaction denied.')
            self._printBalance()
            return
        self.balance -= amount
        self._printBalance()

# Handle the main program, starting with the person's name. Create an account for them after its provided.
input_name = input('Enter person\'s name: ')
account = SavingsAccount(input_name)

# Loop until the user quits.
while True:
    input_action = input('D = Deposit, W = Withdrawal, Q = Quit\nEnter D, W, or Q: ')

    if input_action == 'D':
        input_amount = float(input('Enter amount to deposit: '))
        account.makeDeposit(input_amount)
    elif input_action == 'W':
        input_amount = float(input('Enter amount to withdraw: '))
        account.makeWithdrawal(input_amount)
    elif input_action == 'Q':
        print('End of transactions. Have a good day {}.'.format(account.name))
        break
