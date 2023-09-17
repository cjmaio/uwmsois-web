from account import CreditCard, LineOfCredit, CardType, AccountType
from input import InputType, ask_for_input, ask_for_confirm, InputExit
import pickle


class AccountManager:
    def __init__(self):
        self.accounts = []
        self.load()

    def load(self):
        try:
            with open('accounts.pickle', 'rb') as f:
                self.accounts = pickle.load(f)
        except FileNotFoundError:
            pass

    def save(self):
        with open('accounts.pickle', 'wb') as f:
            pickle.dump(self.accounts, f)

    def add_account(self):
        account_type = ask_for_input('Account Type', InputType.OPTION, {
            'Credit Card': AccountType.CREDIT_CARD,
            'Line of Credit': AccountType.LINE_OF_CREDIT,
        })

        name = ask_for_input('Account Name', InputType.STRING)

        company = ask_for_input('Company', InputType.STRING)

        date_opened = ask_for_input('Date Opened', InputType.DATE)

        credit_limit = ask_for_input('Credit Limit', InputType.INT)

        interest_rate = ask_for_input('Interest Rate', InputType.FLOAT)

        balance = ask_for_input('Balance', InputType.FLOAT)

        if account_type == AccountType.CREDIT_CARD:
            card_type = ask_for_input('Card Type', InputType.OPTION, {
                'Visa': CardType.VISA,
                'Mastercard': CardType.MASTERCARD,
                'American Express': CardType.AMERICAN_EXPRESS,
                'Discover': CardType.DISCOVER,
                'Store': CardType.STORE,
            })

            active_promotions = ask_for_input('Active Promotions', InputType.STRING)

            annual_fee = ask_for_input('Annual Fee', InputType.FLOAT)

            rewards = ask_for_input('Rewards', InputType.STRING)

            account = CreditCard(
                name=name,
                company=company,
                date_opened=date_opened,
                credit_limit=credit_limit,
                interest_rate=interest_rate,
                balance=balance,
                card_type=card_type,
                active_promotions=active_promotions,
                annual_fee=annual_fee,
                rewards=rewards,
            )
        elif account_type == AccountType.LINE_OF_CREDIT:
            account = LineOfCredit(
                account_type=account_type,
                name=name,
                company=company,
                date_opened=date_opened,
                credit_limit=credit_limit,
                interest_rate=interest_rate,
                balance=balance,
            )

        self.accounts.append(account)
        self.save()

    def list_accounts(self):
        for account in self.accounts:
            print(account)

    def remove_account(self):
        try:
            account = ask_for_input('Account', InputType.OPTION, {
                account.name: account for account in self.accounts
            })

            confirmed = ask_for_confirm('Are you sure you want to remove this account?')

            if confirmed:
                self.accounts.remove(account)
                self.save()
            else:
                raise InputExit()
        except InputExit:
            print('Cancelled, going back...')
