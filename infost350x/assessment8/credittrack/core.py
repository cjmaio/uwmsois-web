from credittrack.manager import AccountManager

accountmanager = AccountManager()

COMMANDS = {
    'Add Account': accountmanager.add_account,
    'Remove Account': accountmanager.remove_account,
    'List Accounts': accountmanager.list_accounts,
    'Quit': exit,
}


def main():
    print('Welcome to the tracker!')

    while True:
        print('')
        print('Available Commands:')

        command_items = list(COMMANDS.items())
        for i in range(len(command_items)):
            print('\t {} = {}'.format(command_items[i][0], i + 1))

        command_input = int(input('\nEnter Command: '))

        if command_input < 1 or command_input > len(command_items):
            print('Invalid option selected: {}'.format(command_input))
            print('Try again')
            continue

        print('\n')

        command = command_items[command_input - 1][1]
        command()


if __name__ == "__main__":
    main()
