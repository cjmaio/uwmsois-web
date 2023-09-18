class InputBack(Exception):
    """
    Exception that should be thrown when the user types "back" while asking for input.
    Can be handled in order to go back to the previous menu.
    """

    pass


class InputExit(Exception):
    """
    Exception that should be thrown when the user types "exit" while asking for input.
    Can be handled in order to exit the program gracefully.
    """

    pass
