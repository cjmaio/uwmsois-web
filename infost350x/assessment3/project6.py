def soundex(word: str) -> str:
    """
    Convert a word to a Soundex code

    Args:
        word (str) the word to convert
    Returns:
        str: the Soundex code
    """

    code = ''

    # Retain the first letter
    code += word[0]
    word = word[1:]

    # Delete all occurrences of a, e, i, o, u, y, h, w
    LETTERS_TO_DELETE = ['a', 'e', 'i', 'o', 'u', 'y', 'h', 'w']
    for letter in LETTERS_TO_DELETE:
        word = word.replace(letter, '')

    # Replace all remaining letters with digits as follows:
    LETTERS_TO_DIGITS = {
        'bfpv': '1',
        'cgjkqsxz': '2',
        'dt': '3',
        'l': '4',
        'mn': '5',
        'r': '6'
    }
    for letter in word:
        for letters, digit in LETTERS_TO_DIGITS.items():
            if letter in letters and code[-1] != digit:
                code += digit

    # If the code is less than 4 characters, pad with zeros
    while len(code) < 4:
        code += '0'

    # Retain only the first four characters
    code = code[:4]

    return code

# Test the function using input to the program
code_input = input('Enter a word to code: ')

try:
    code = soundex(code_input)
    print('The coded word is {}.'.format(code))
except IndexError:
    print('The word you entered was too short.')
