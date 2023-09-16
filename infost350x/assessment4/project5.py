def isTripleConsecutive(word: str) -> bool:
    """
    Determine if a word has three consecutive letters that are also consecutive letters in the alphabet.

    Args:
        word (str): the word to check
    Returns:
        bool: True if the word has three consecutive letters that are consecutive letters in the alphabet, False otherwise
    """

    # `ord` returns the ordinal value of a character
    # We can then easily check if letters are consecutive by seeing if those numbers are themselves sequential,
    # which is an easy task to do in Python

    # Note, in this for loop, we are using `range(len(word) - 2)` because we are looking at 3 indexes at once
    # and we need to avoid a RangeError.
    for i in range(len(word) - 2):
        if (ord(word[i + 1]) - ord(word[i]) == 1) and (ord(word[i + 2]) - ord(word[i + 1]) == 1):
            return True

    return False

input_word = input('Enter a word: ')

if isTripleConsecutive(input_word):
    print(input_word.upper(), 'contains three successive letters in consecutive alphabetical order.')
else:
    print(input_word.upper(), 'does not contain three successive letters in consecutive alphabetical order.')
