def validate_isbn(input: str) -> bool:
    """
    Validate an ISBN number.

    Args:
        input (str): the ISBN number to validate
    Returns:
        bool: True if the ISBN number is valid, False otherwise
    """

    # Sanitize the input, removing hyphens. They are not needed for validation.
    input = input.replace('-', '')

    # Check that the input is a total of 10 characters
    if len(input) != 10:
        return False

    # Check that the first 9 characters are digits
    for i in range(9):
        if not input[i].isdigit():
            return False

    # Check that the last character is a digit or X
    if not input[9].isdigit() and input[9] != 'X':
        return False

    # Calculate the sum
    sum = 0
    for i in range(10):
        if input[i] == 'X':
            sum += (10 - i) * 10
        else:
            sum += (10 - i) * int(input[i])

    # Return if the sum is divisible by 11
    return sum % 11 == 0


input_value = input('Enter an ISBN: ')

if validate_isbn(input_value):
    print('The number is valid.')
else:
    print('The number is invalid.')
