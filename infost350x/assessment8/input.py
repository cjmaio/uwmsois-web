from enum import Enum
from datetime import datetime


class InputType(Enum):
    """
    Represents the type of input.
    """
    STRING = 1
    FLOAT = 2
    INT = 3
    DATE = 4
    OPTION = 5


class InputExit(Exception):
    pass


def ask_for_confirm(message: str) -> bool:
    """
    Asks for confirmation, and returns the boolean value of the confirmation.
    """

    try:
        confirm_input = input('{} (y/n): '.format(message))

        if confirm_input == 'y':
            return True
        elif confirm_input == 'n':
            return False
        else:
            raise ValueError('Invalid confirmation input.')
    except ValueError:
        print('Invalid confirmation input.')
        print('Try again.')
        print('')
        return ask_for_confirm(message)


def ask_for_input(thing_name: str, type: InputType, options: dict = None):
    """
    Asks for a thing, and returns the value of the thing.
    """

    try:
        if type == InputType.OPTION:
            print('Available {}s:'.format(thing_name))
            option_items = list(options.items())
            for i in range(len(option_items)):
                print('\t {} = {}'.format(option_items[i][0], i + 1))

            thing_input = input('Choose an {} (or type "exit" to go back): '.format(thing_name))

            if thing_input == 'exit':
                raise InputExit()

            if int(thing_input) < 1 or int(thing_input) > len(option_items):
                raise ValueError('Index out of range for options.')

            return option_items[int(thing_input) - 1][1]
        else:
            thing_input = input('Enter {} (or type "exit" to go back): '.format(thing_name))
            if thing_input == 'exit':
                raise InputExit()
            elif type == InputType.STRING:
                return thing_input
            elif type == InputType.DATE:
                return datetime.strptime(thing_input, '%Y-%m-%d')
            elif type == InputType.FLOAT:
                return float(thing_input)
            elif type == InputType.INT:
                return int(thing_input)
    except ValueError:
        print('Invalid {}.'.format(thing_name))
        print('Try again.')
        print('')
        return ask_for_input(thing_name, type, options)
