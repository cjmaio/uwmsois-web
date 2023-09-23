from datetime import datetime

from tracker_constants import (
    SIMPLE_DATE_FORMAT_US,
    SIMPLE_DATE_FORMAT_EU,
    SIMPLE_DATE_FORMAT_ISO,
    SIMPLE_DATE_FORMAT_US_SLASHES,
    SIMPLE_DATE_FORMAT_EU_SLASHES,
    SIMPLE_DATE_FORMAT_ISO_SLASHES,
)
from tracker_exceptions import InputExit, InputBack
from tracker_types import InputType


def parse_date_multi_format(date_string: str) -> datetime:
    """
    Parses a date string into a datetime object, trying multiple formats.

    Args:
        date_string (str): The date string to parse.
    Returns:
        datetime: The parsed datetime object.
    Raises:
        ValueError: If the date string cannot be parsed.
    """
    attempts = [
        SIMPLE_DATE_FORMAT_ISO,
        SIMPLE_DATE_FORMAT_ISO_SLASHES,
        SIMPLE_DATE_FORMAT_US,
        SIMPLE_DATE_FORMAT_US_SLASHES,
        SIMPLE_DATE_FORMAT_EU,
        SIMPLE_DATE_FORMAT_EU_SLASHES,
    ]

    for attempt in attempts:
        try:
            return datetime.strptime(date_string, attempt)
        except ValueError:
            pass

    raise ValueError(
        "Invalid date format. Must be one of the following: {}".format(
            ", ".join(attempts)
        )
    )


def sanitize_numerical_input(input_value: str) -> str:
    """
    Sanitizes a numerical input value by removing all non-numerical characters.

    Args:
        input_value (str): The input value to sanitize.
    Returns:
        str: The sanitized input value.
    """

    return "".join(c for c in input_value if c.isdigit() or c == ".")


def ask_for_confirm(message: str) -> bool:
    """
    Utility function to ask the user for confirmation, and returns a boolean value.
    It will continue to ask for confirmation if given anything but a y or n.

    Args:
        message (str): The message to ask the user.
    Returns:
        bool: True if the user confirms, False if the user does not.
    """

    try:
        confirm_input = input("{} (y/n): ".format(message))

        if confirm_input == "y":
            return True
        elif confirm_input == "n":
            return False
        else:
            raise ValueError("Invalid confirmation input.")
    except ValueError:
        print("\n\t! Invalid confirmation input. Please try again.\n")
        return ask_for_confirm(message)


def ask_for_input(name: str, type: InputType, options: dict = None, allow_back: bool = True):
    """
    Asks the user for a type of input, and returns the selected input.

    Args:
        name (str): The name of the input to ask for.
        type (InputType): The type of input to ask for.
        options (dict): A dictionary of options to choose from (only used if type is OPTION).
        allow_back (bool): Whether or not to allow the user to type "back" to go back to the previous menu.
    Returns:
        The input from the user.
    Raises:
        InputBack: If the user types "back" while asking for input.
        InputExit: If the user types "exit" while asking for input.
    """

    alternatives = '(or "back", "exit")'
    if not allow_back:
        alternatives = '(or "exit")'

    try:
        if type == InputType.OPTION:
            print("Available {}s:".format(name))
            option_items = list(options.items())
            for i in range(len(option_items)):
                print("\t {} = {}".format(option_items[i][0], i + 1))

            input_value = input('\nChoose {} {}: '.format(name, alternatives))

            if input_value == "exit":
                raise InputExit()
            elif input_value == "back":
                raise InputBack()

            if int(input_value) < 1 or int(input_value) > len(option_items):
                raise ValueError()

            return option_items[int(input_value) - 1][1]
        else:
            input_value = input('Enter {} {}: '.format(name, alternatives))
            if input_value == "exit":
                raise InputExit()
            elif input_value == "back":
                raise InputBack()
            elif type == InputType.STRING:
                return input_value
            elif type == InputType.DATE:
                return parse_date_multi_format(input_value)
            elif type == InputType.FLOAT:
                return float(sanitize_numerical_input(input_value))
            elif type == InputType.INT:
                return int(sanitize_numerical_input(input_value))
    except ValueError:
        print("\n\t! Invalid input: {}\n".format(input_value))
        return ask_for_input(name, type, options)
