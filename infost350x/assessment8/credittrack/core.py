from credittrack.manager import AccountManager
from credittrack.utils.input import ask_for_input
from credittrack.utils.types import InputType
from credittrack.utils.exceptions import InputExit


accountmanager = AccountManager()

COMMANDS = {
    'Add Account': accountmanager.add_account,
    'Update Account': accountmanager.update_account,
    'Remove Account': accountmanager.remove_account,
    'List Accounts': accountmanager.list_accounts,
}


def main():
    print('CreditTrack v1.0.0\n')

    try:
        while True:
            command = ask_for_input('Command', InputType.OPTION, COMMANDS)
            command()
    except InputExit:
        print('\nGoodbye!\n')
        exit(0)


if __name__ == "__main__":
    main()
