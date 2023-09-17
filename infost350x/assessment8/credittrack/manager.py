from credittrack.entities.creditcard import CreditCard
from credittrack.entities.account import Account
from credittrack.entities.lineofcredit import LineOfCredit
from credittrack.utils.input import ask_for_input, ask_for_confirm
from credittrack.utils.types import CardType, AccountType, InputType, SortType
from credittrack.utils.exceptions import InputExit
import pickle


class AccountManager:
    def __init__(self):
        self.accounts = []
        self.load()

    def load(self):
        """
        Loads the user's accounts from the accounts.pickle file (if exists).
        """
        try:
            with open('accounts.pickle', 'rb') as f:
                self.accounts = pickle.load(f)
        except FileNotFoundError:
            pass

    def save(self):
        """
        Saves the user's accounts to the accounts.pickle file.
        """
        with open('accounts.pickle', 'wb') as f:
            pickle.dump(self.accounts, f)

    def add_account(self):
        """
        Walks the user through adding an account.
        """
        print('')
        try:
            account_type = ask_for_input('Account Type', InputType.OPTION, {
                'Credit Card': AccountType.CREDIT_CARD,
                'Line of Credit': AccountType.LINE_OF_CREDIT,
            })

            company = ask_for_input('Company', InputType.STRING)
            name = ask_for_input('Account Name', InputType.STRING)

            if account_type == AccountType.CREDIT_CARD:
                card_type = ask_for_input('Card Type', InputType.OPTION, {
                    'Visa': CardType.VISA,
                    'Mastercard': CardType.MASTERCARD,
                    'American Express': CardType.AMERICAN_EXPRESS,
                    'Discover': CardType.DISCOVER,
                    'Store': CardType.STORE,
                })

            date_opened = ask_for_input('Date Opened', InputType.DATE)
            interest_rate = ask_for_input('Interest Rate', InputType.FLOAT)
            credit_limit = ask_for_input('Credit Limit', InputType.INT)
            balance = ask_for_input('Balance', InputType.FLOAT)

            if account_type == AccountType.CREDIT_CARD:
                annual_fee = ask_for_input('Annual Fee', InputType.FLOAT)
                active_promotions = ask_for_input('Active Promotions', InputType.STRING)
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
            else:
                account = LineOfCredit(
                    name=name,
                    company=company,
                    date_opened=date_opened,
                    credit_limit=credit_limit,
                    interest_rate=interest_rate,
                    balance=balance,
                )

            self.accounts.append(account)
            self.save()
            print('\n\tAccount added.\n')
        except InputExit:
            print('\n\tCancelled, going back...\n')

    def list_accounts(self):
        """
        Lists all of the user's accounts.
        """
        print('')
        if len(self.accounts) == 0:
            print('\tNo accounts found.\n')
            return

        try:
            while True:
                try:
                    (sort_type, direction) = ask_for_input('Sort', InputType.OPTION, {
                        'Name (asc)': (SortType.NAME, False),
                        'Name (desc)': (SortType.NAME, True),
                        'Balance (asc)': (SortType.BALANCE, False),
                        'Balance (desc)': (SortType.BALANCE, True),
                        'Date Opened (asc)': (SortType.DATE_OPENED, False),
                        'Date Opened (desc)': (SortType.DATE_OPENED, True),
                        'Interest Rate (asc)': (SortType.INTEREST_RATE, False),
                        'Interest Rate (desc)': (SortType.INTEREST_RATE, True),
                        'Credit Limit (asc)': (SortType.CREDIT_LIMIT, False),
                        'Credit Limit (desc)': (SortType.CREDIT_LIMIT, True),
                        'Utilization (asc)': (SortType.UTILIZATION, False),
                        'Utilization (desc)': (SortType.UTILIZATION, True),
                        'Available Credit (asc)': (SortType.AVAILABLE_CREDIT, False),
                        'Available Credit (desc)': (SortType.AVAILABLE_CREDIT, True),
                        'Last Updated At (asc)': (SortType.LAST_UPDATED_AT, False),
                        'Last Updated At (desc)': (SortType.LAST_UPDATED_AT, True),
                    })
                    print('')

                    # Inline define our sort function to repeat less code
                    def sort_fn(account: Account):
                        if sort_type == SortType.UTILIZATION:
                            return account.get_utilization()
                        elif sort_type == SortType.AVAILABLE_CREDIT:
                            return account.get_available_credit()
                        elif sort_type == SortType.LAST_UPDATED_AT:
                            return account.balance_last_updated_at
                        elif sort_type == SortType.NAME:
                            return account.name
                        elif sort_type == SortType.BALANCE:
                            return account.balance
                        elif sort_type == SortType.DATE_OPENED:
                            return account.date_opened
                        elif sort_type == SortType.INTEREST_RATE:
                            return account.interest_rate
                        elif sort_type == SortType.CREDIT_LIMIT:
                            return account.credit_limit

                    sorted_accounts = sorted(self.accounts, key=sort_fn, reverse=direction)

                    ACCOUNT_LIST_FORMAT = '{:<20} {:<20} {:<15} {:<15} {:<15} {:<15} {:<20} {:<15} {:<20} {:<15}'

                    print('Accounts (sorted by {}):\n'.format(sort_type.name))
                    print(ACCOUNT_LIST_FORMAT.format(
                        'Company',
                        'Name',
                        'Date Opened',
                        'Interest Rate',
                        'Credit Limit',
                        'Balance',
                        'Available Credit',
                        'Utilization',
                        'Monthly Interest',
                        'Last Updated At'
                    ))
                    for account in sorted_accounts:
                        print(ACCOUNT_LIST_FORMAT.format(
                            account.company,
                            account.name,
                            account.date_opened.strftime('%m-%d-%Y'),
                            '{}%'.format(account.interest_rate),
                            '${:,.2f}'.format(account.credit_limit),
                            '${:,.2f}'.format(account.balance),
                            '${:,.2f}'.format(account.get_available_credit()),
                            '{:.2f}%'.format(account.get_utilization()),
                            '${:,.2f}'.format(account.get_monthly_interest()),
                            account.balance_last_updated_at.strftime('%m-%d-%Y %I:%M %p'),
                        ))
                    print('')
                except ValueError:
                    print('\n\tInvalid sort type, try again.\n')
                    continue
        except InputExit:
            print('\n\tCancelled, going back...\n')

    def update_account(self):
        """
        Walks the user through updating an account.
        """
        print('')

        if len(self.accounts) == 0:
            print('\tNo accounts found.\n')
            return
        try:
            account = ask_for_input('Account', InputType.OPTION, {
                account.name: account for account in self.accounts
            })

            while True:
                print('\nCurrent Account Information:\n')
                print(account)

                print('\nWhat would you like to update?\n')
                update_type = ask_for_input('Update Type', InputType.OPTION, {
                    'Balance': 'balance',
                    'Interest Rate': 'interest_rate',
                    'Credit Limit': 'credit_limit',
                    'Annual Fee': 'annual_fee',
                    'Active Promotions': 'active_promotions',
                    'Rewards': 'rewards',
                })

                if update_type == 'balance':
                    print('\nCurrent Balance: ${:,.2f}'.format(account.balance))
                    balance = ask_for_input('Balance', InputType.FLOAT)
                    account.update_balance(balance)
                elif update_type == 'interest_rate':
                    print('\nCurrent Interest Rate: {}%'.format(account.interest_rate))
                    interest_rate = ask_for_input('Interest Rate', InputType.FLOAT)
                    account.update_interest_rate(interest_rate)
                elif update_type == 'credit_limit':
                    print('\nCurrent Credit Limit: ${:,.2f}'.format(account.credit_limit))
                    credit_limit = ask_for_input('Credit Limit', InputType.INT)
                    account.update_credit_limit(credit_limit)
                elif update_type == 'annual_fee':
                    print('\nCurrent Annual Fee: ${:,.2f}'.format(account.annual_fee))
                    annual_fee = ask_for_input('Annual Fee', InputType.FLOAT)
                    account.update_annual_fee(annual_fee)
                elif update_type == 'active_promotions':
                    print('\nCurrent Active Promotions: {}'.format(account.active_promotions))
                    active_promotions = ask_for_input('Active Promotions', InputType.STRING)
                    account.update_active_promotions(active_promotions)
                elif update_type == 'rewards':
                    print('\nCurrent Rewards: {}'.format(account.rewards))
                    rewards = ask_for_input('Rewards', InputType.STRING)
                    account.update_rewards(rewards)

                self.save()
                print('\n\tAccount updated.\n')
        except InputExit:
            print('\n\tCancelled, going back...\n')

    def remove_account(self):
        """
        Walks the user through removing an account.
        """
        print('')

        if len(self.accounts) == 0:
            print('\tNo accounts found.\n')
            return

        try:
            account = ask_for_input('Account', InputType.OPTION, {
                account.name: account for account in self.accounts
            })

            confirmed = ask_for_confirm('Are you sure you want to remove this account?')

            if confirmed:
                self.accounts.remove(account)
                self.save()
                print('\n\tAccount removed.\n')
            else:
                raise InputExit()
        except InputExit:
            print('\n\tCancelled, going back...\n')
