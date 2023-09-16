from math import floor
from typing import List

LARGE_NUMBER_UNITS = {
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion',
    1000000000000000000000: 'sextillion',
    1000000000000000000000000: 'septillion',
}

def verbalizeNumber(number: int) -> str:
    """
    Verbalize a number using units of thousand, million, billion, etc.

    Args:
        number (int): the number to verbalize
    Returns:
        str: the verbalized number
    """

    output_lines: List[str] = []

    # We can verbalize a number by breaking it into units of thousand, million, billion, etc.
    for i in sorted(LARGE_NUMBER_UNITS.keys(), reverse=True):
        if number >= i:
            count = floor(number / i)
            output_lines.append('{} {}'.format(count, LARGE_NUMBER_UNITS[i]))
            number -= (count * i)
        else:
            output_lines.append('0 {}'.format(LARGE_NUMBER_UNITS[i]))

    # At the end, if we have a value > 0, print it
    if number > 0:
        output_lines.append('{}'.format(number))

    return '\n'.join(output_lines)

print(verbalizeNumber(123000004056777888999012345))
