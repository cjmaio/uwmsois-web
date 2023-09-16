from typing import List

def validate_credit_card(cc_number: str) -> bool:
    """
    Validate a credit card number using the algorithm outlined in the book

    Args:
        cc_number (str): the credit card number to validate
    Returns:
        bool: True if the number is valid, False otherwise
    """

    # Starting with the leftmost digit, double it, and then double every other digit after it.
    # We will also keep track of the digits we do not double
    doubled_digits: List[int] = []
    non_doubled_digits: List[int] = []
    for i, digit in enumerate(cc_number):
        if i % 2 == 0:
            doubled_value = int(digit) * 2
            # If any of the doubled digits is a two-digit number, subtract 9 from it
            if doubled_value > 9:
                doubled_value -= 9
            doubled_digits.append(doubled_value)
        else:
            non_doubled_digits.append(int(digit))

    # Sum the digits of the doubled numbers
    summed_doubled = 0
    for digit in doubled_digits:
        summed_doubled += digit

    # Sum the digits of the non-doubled numbers
    summed_non_doubled = 0
    for digit in non_doubled_digits:
        summed_non_doubled += digit

    # Add the two sums together
    summed = summed_doubled + summed_non_doubled

    # If the result is a multiple of 10, it is a valid number.
    return summed % 10 == 0


input_number = input('Enter a credit card number: ')

if len(input_number) > 0 and validate_credit_card(input_number):
    print('The number is valid.')
else:
    print('The number is invalid.')
