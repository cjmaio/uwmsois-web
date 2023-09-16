def is_palindrome(word: str) -> bool:
    """
    Determine if a word is a palindrome

    Args:
        word (str): the word to check
    Returns:
        bool: True if the word is a palindrome, False otherwise
    """

    # A palindrome is a word or phrase that reads the same forwards and backwards, character for character
    # disregarding punctuation, case, and spaces.

    # We can remove punctuation, case, and spaces by converting the word to lowercase and removing all
    # non-alphabetic characters
    word = word.lower()
    word = ''.join([letter for letter in word if letter.isalpha()])

    # We can now check the word against its reverse, now that we've removed non-alphabetical characters
    # and normalized the word case
    return word == word[::-1]

# Test the function using input to the program
input_word = input('Enter a word or phrase: ')

if is_palindrome(input_word):
    print(input_word.upper(), 'is a palindrome.')
else:
    print(input_word.upper(), 'is not a palindrome.')
