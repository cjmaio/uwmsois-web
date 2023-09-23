import configparser
import pickle
import pymysql
import uuid

from tracker_entities import Account, CreditCard, LineOfCredit
from tracker_exceptions import InputExit, InputBack
from tracker_input import ask_for_input, ask_for_confirm
from tracker_types import CardType, AccountType, InputType, SortType


class AccountManager:
    account_type_id_map: dict = {}
    card_type_id_map: dict = {}
    config: configparser.ConfigParser
    use_mysql: bool

    def __init__(self):
        # Read our configuration from our config file
        self.config = configparser.ConfigParser()
        self.config.read("config.ini")

        # Set a common config boolean that we will use throughout this class
        self.use_mysql = self.config.getboolean("core", "use_mysql")

        # If we are using a MySQL database, setup a connection to use
        if self.use_mysql:
            self.connection = pymysql.connect(
                host=self.config.get("database", "host"),
                port=self.config.getint("database", "port"),
                user=self.config.get("database", "user"),
                password=self.config.get("database", "password"),
                database=self.config.get("database", "dbname"),
                cursorclass=pymysql.cursors.DictCursor,
            )

        # Setup an empty accounts list and load data from the database or pickle file
        self.accounts = []
        self.load()

    def load(self):
        """
        Loads the user's accounts from the accounts.pickle file (if exists).
        """
        if self.use_mysql:
            cursor = self.connection.cursor()

            # Load card type mapping
            cursor.execute("SELECT card_type_id, card_type_name FROM card_type")
            results = cursor.fetchall()
            for row in results:
                self.card_type_id_map[row["card_type_name"]] = row["card_type_id"]

            # Load account type mapping
            cursor.execute("SELECT account_type_id, account_type_name FROM account_type")
            results = cursor.fetchall()
            for row in results:
                self.account_type_id_map[row["account_type_name"]] = row["account_type_id"]

            # Load accounts
            cursor.execute("""
               SELECT
                    account_id,
                    ct.card_type_name,
                    at.account_type_name,
                    account_name,
                    company,
                    opened_at,
                    balance_last_updated_at,
                    balance,
                    credit_limit,
                    interest_rate,
                    active_promotions,
                    annual_fee,
                    rewards
                FROM account AS a
                INNER JOIN account_type AS at
                    ON a.account_type_id = at.account_type_id
                INNER JOIN card_type AS ct
                    ON a.card_type_id = ct.card_type_id
                ORDER BY account_id ASC
            """)

            results = cursor.fetchall()

            for row in results:
                if row["account_type_name"] == AccountType.CREDIT_CARD.name:
                    account = CreditCard(
                        active_promotions=row["active_promotions"],
                        annual_fee=row["annual_fee"],
                        balance_last_updated_at=row["balance_last_updated_at"],
                        balance=row["balance"],
                        card_type=CardType[row["card_type_name"]],
                        company=row["company"],
                        credit_limit=row["credit_limit"],
                        date_opened=row["opened_at"],
                        id=row["account_id"],
                        interest_rate=row["interest_rate"],
                        name=row["account_name"],
                        rewards=row["rewards"],
                    )
                else:
                    account = LineOfCredit(
                        balance_last_updated_at=row["balance_last_updated_at"],
                        balance=row["balance"],
                        company=row["company"],
                        credit_limit=row["credit_limit"],
                        date_opened=row["opened_at"],
                        id=row["account_id"],
                        interest_rate=row["interest_rate"],
                        name=row["account_name"],
                    )
                self.accounts.append(account)
        else:
            try:
                with open("accounts.pickle", "rb") as f:
                    self.accounts = pickle.load(f)
            except FileNotFoundError:
                pass

    def _insert(self, account: Account) -> bool:
        """
        Helper function to insert a new account into our local accounts list, as well as a MySQL database if configured.

        Args:
            account (Account): The account to insert.
        Returns:
            bool: True if the account was inserted, False if not.
        Raises:
            ValueError: If the account type is invalid.
        """
        self.accounts.append(account)

        if self.use_mysql:
            cursor = self.connection.cursor()

            account_type = None
            if isinstance(account, CreditCard):
                account_type = AccountType.CREDIT_CARD.name
            elif isinstance(account, LineOfCredit):
                account_type = AccountType.LINE_OF_CREDIT.name
            else:
                raise ValueError("Invalid account type.")

            sql = """
                INSERT INTO account (
                    account_id,
                    account_type_id,
                    card_type_id,
                    account_name,
                    company,
                    created_at,
                    last_updated_at,
                    opened_at,
                    balance_last_updated_at,
                    balance,
                    credit_limit,
                    interest_rate,
                    active_promotions,
                    annual_fee,
                    rewards
                ) VALUES (%s, %s, %s, %s, %s, NOW(), NOW(), %s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(sql, (
                account.id,
                self.account_type_id_map[account_type],
                self.card_type_id_map.get(account.card_type.name),
                account.name,
                account.company,
                account.date_opened,
                account.balance_last_updated_at,
                account.balance,
                account.credit_limit,
                account.interest_rate,
                account.active_promotions,
                account.annual_fee,
                account.rewards,
            ))
            self.connection.commit()
            return cursor.rowcount == 1
        else:
            self.save()

    def _update(self, account: Account) -> bool:
        """
        Helper function to update an account in our local accounts list, as well as a MySQL database if configured.

        Args:
            account (Account): The account to update.
        Returns:
            bool: True if the account was updated, False if not.
        """
        if self.use_mysql:
            cursor = self.connection.cursor()
            sql = """
                UPDATE account
                SET
                    balance = %s,
                    interest_rate = %s,
                    credit_limit = %s,
                    annual_fee = %s,
                    active_promotions = %s,
                    rewards = %s,
                    last_updated_at = NOW()
                WHERE account_id = %s
            """
            cursor.execute(sql, (
                account.balance,
                account.interest_rate,
                account.credit_limit,
                account.annual_fee,
                account.active_promotions,
                account.rewards,
                account.id,
            ))
            self.connection.commit()
            return cursor.rowcount == 1
        else:
            self.save()

    def _delete(self, account: Account) -> bool:
        """
        Helper function to delete an account from our local accounts list, as well as a MySQL database if configured.

        Args:
            account (Account): The account to delete.
        Returns:
            bool: True if the account was deleted, False if not.
        """
        self.accounts.remove(account)

        if self.use_mysql:
            cursor = self.connection.cursor()
            cursor.execute("DELETE FROM account WHERE account_id = %s", (account.id,))
            self.connection.commit()
            return cursor.rowcount == 1
        else:
            self.save()

    def save(self):
        """
        Saves the user's accounts to the accounts.pickle file if we're not using a MySQL backend.
        """
        if not self.use_mysql:
            with open("accounts.pickle", "wb") as f:
                pickle.dump(self.accounts, f)

    def add_account(self):
        """
        Walks the user through adding an account.
        """
        print("")
        try:
            account_type = ask_for_input(
                "Account Type",
                InputType.OPTION,
                {
                    "Credit Card": AccountType.CREDIT_CARD,
                    "Line of Credit": AccountType.LINE_OF_CREDIT,
                },
            )

            company = ask_for_input("Company", InputType.STRING)
            name = ask_for_input("Account Name", InputType.STRING)

            if account_type == AccountType.CREDIT_CARD:
                card_type = ask_for_input(
                    "Card Type",
                    InputType.OPTION,
                    {
                        "Visa": CardType.VISA,
                        "Mastercard": CardType.MASTERCARD,
                        "American Express": CardType.AMERICAN_EXPRESS,
                        "Discover": CardType.DISCOVER,
                        "Store": CardType.STORE,
                    },
                )

            date_opened = ask_for_input("Date Opened", InputType.DATE)
            interest_rate = ask_for_input("Interest Rate", InputType.FLOAT)
            credit_limit = ask_for_input("Credit Limit", InputType.INT)
            balance = ask_for_input("Balance", InputType.FLOAT)
            id = uuid.uuid4()

            if account_type == AccountType.CREDIT_CARD:
                annual_fee = ask_for_input("Annual Fee", InputType.FLOAT)
                active_promotions = ask_for_input("Active Promotions", InputType.STRING)
                rewards = ask_for_input("Rewards", InputType.STRING)

                account = CreditCard(
                    id=id,
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
                    id=id,
                    name=name,
                    company=company,
                    date_opened=date_opened,
                    credit_limit=credit_limit,
                    interest_rate=interest_rate,
                    balance=balance,
                )

            self._insert(account)

            print("\n\tAccount added.\n")
        except InputBack:
             print("\n\tGoing back...\n")
        except InputExit:
            print("\nGoodbye!\n")
            exit(0)

    def list_accounts(self):
        """
        Lists all of the user's accounts.
        """
        print("")
        if len(self.accounts) == 0:
            print("\tNo accounts found.\n")
            return

        try:
            while True:
                try:
                    (sort_type, direction) = ask_for_input(
                        "Sort",
                        InputType.OPTION,
                        {
                            "Name (asc)": (SortType.NAME, False),
                            "Name (desc)": (SortType.NAME, True),
                            "Balance (asc)": (SortType.BALANCE, False),
                            "Balance (desc)": (SortType.BALANCE, True),
                            "Date Opened (asc)": (SortType.DATE_OPENED, False),
                            "Date Opened (desc)": (SortType.DATE_OPENED, True),
                            "Interest Rate (asc)": (SortType.INTEREST_RATE, False),
                            "Interest Rate (desc)": (SortType.INTEREST_RATE, True),
                            "Credit Limit (asc)": (SortType.CREDIT_LIMIT, False),
                            "Credit Limit (desc)": (SortType.CREDIT_LIMIT, True),
                            "Utilization (asc)": (SortType.UTILIZATION, False),
                            "Utilization (desc)": (SortType.UTILIZATION, True),
                            "Available Credit (asc)": (
                                SortType.AVAILABLE_CREDIT,
                                False,
                            ),
                            "Available Credit (desc)": (
                                SortType.AVAILABLE_CREDIT,
                                True,
                            ),
                            "Last Updated At (asc)": (SortType.LAST_UPDATED_AT, False),
                            "Last Updated At (desc)": (SortType.LAST_UPDATED_AT, True),
                        },
                    )
                    print("")

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

                    sorted_accounts = sorted(
                        self.accounts, key=sort_fn, reverse=direction
                    )

                    ACCOUNT_LIST_FORMAT = "{:<20} {:<20} {:<15} {:<15} {:<15} {:<15} {:<20} {:<15} {:<20} {:<15}"

                    print("Accounts (sorted by {}):\n".format(sort_type.name))
                    print(
                        ACCOUNT_LIST_FORMAT.format(
                            "Company",
                            "Name",
                            "Date Opened",
                            "Interest Rate",
                            "Credit Limit",
                            "Balance",
                            "Available Credit",
                            "Utilization",
                            "Monthly Interest",
                            "Last Updated At",
                        )
                    )
                    for account in sorted_accounts:
                        print(
                            ACCOUNT_LIST_FORMAT.format(
                                account.company,
                                account.name,
                                account.date_opened.strftime("%m-%d-%Y"),
                                "{}%".format(account.interest_rate),
                                "${:,.2f}".format(account.credit_limit),
                                "${:,.2f}".format(account.balance),
                                "${:,.2f}".format(account.get_available_credit()),
                                "{:.2f}%".format(account.get_utilization()),
                                "${:,.2f}".format(account.get_monthly_interest()),
                                account.balance_last_updated_at.strftime(
                                    "%m-%d-%Y %I:%M %p"
                                ),
                            )
                        )
                    print("")
                except ValueError:
                    print("\n\tInvalid sort type, try again.\n")
                    continue
        except InputBack:
             print("\n\tGoing back...\n")
        except InputExit:
            print("\nGoodbye!\n")
            exit(0)

    def update_account(self):
        """
        Walks the user through updating an account.
        """
        print("")

        if len(self.accounts) == 0:
            print("\tNo accounts found.\n")
            return
        try:
            account = ask_for_input(
                "Account",
                InputType.OPTION,
                {account.name: account for account in self.accounts},
            )

            while True:
                print("\nCurrent Account Information:\n")
                print(account)

                print("\nWhat would you like to update?\n")
                update_type = ask_for_input(
                    "Update Type",
                    InputType.OPTION,
                    {
                        "Balance": "balance",
                        "Interest Rate": "interest_rate",
                        "Credit Limit": "credit_limit",
                        "Annual Fee": "annual_fee",
                        "Active Promotions": "active_promotions",
                        "Rewards": "rewards",
                    },
                )

                if update_type == "balance":
                    print("\nCurrent Balance: ${:,.2f}".format(account.balance))
                    balance = ask_for_input("Balance", InputType.FLOAT)
                    account.update_balance(balance)
                elif update_type == "interest_rate":
                    print("\nCurrent Interest Rate: {}%".format(account.interest_rate))
                    interest_rate = ask_for_input("Interest Rate", InputType.FLOAT)
                    account.update_interest_rate(interest_rate)
                elif update_type == "credit_limit":
                    print(
                        "\nCurrent Credit Limit: ${:,.2f}".format(account.credit_limit)
                    )
                    credit_limit = ask_for_input("Credit Limit", InputType.INT)
                    account.update_credit_limit(credit_limit)
                elif update_type == "annual_fee":
                    print("\nCurrent Annual Fee: ${:,.2f}".format(account.annual_fee))
                    annual_fee = ask_for_input("Annual Fee", InputType.FLOAT)
                    account.update_annual_fee(annual_fee)
                elif update_type == "active_promotions":
                    print(
                        "\nCurrent Active Promotions: {}".format(
                            account.active_promotions
                        )
                    )
                    active_promotions = ask_for_input(
                        "Active Promotions", InputType.STRING
                    )
                    account.update_active_promotions(active_promotions)
                elif update_type == "rewards":
                    print("\nCurrent Rewards: {}".format(account.rewards))
                    rewards = ask_for_input("Rewards", InputType.STRING)
                    account.update_rewards(rewards)

                self._update(account)
                print("\n\tAccount updated.\n")
        except InputBack:
             print("\n\tGoing back...\n")
        except InputExit:
            print("\nGoodbye!\n")
            exit(0)

    def remove_account(self):
        """
        Walks the user through removing an account.
        """
        print("")

        if len(self.accounts) == 0:
            print("\tNo accounts found.\n")
            return

        try:
            account = ask_for_input(
                "Account",
                InputType.OPTION,
                {account.name: account for account in self.accounts},
            )

            confirmed = ask_for_confirm("Are you sure you want to remove this account?")

            if confirmed:
                self._delete(account)
                print("\n\tAccount removed.\n")
            else:
                raise InputBack()
        except InputBack:
             print("\n\tGoing back...\n")
        except InputExit:
            print("\nGoodbye!\n")
            exit(0)
