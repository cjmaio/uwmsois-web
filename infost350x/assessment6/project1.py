import random

def check_guess(input: str, random_number: int) -> bool:
    """
    Checks if the user's guess is correct.

    Args:
        input (str) The user's guess
        random_number (int) The random number to check against
    Returns:
        bool: True if the guess is correct, False otherwise
    """
    try:
        guess = int(input)
    except ValueError:
        print('You did not enter a number.')
        return False

    if guess < 1 or guess > 100:
        print('Number must be from 1 through 100.')
        return False

    if guess < random_number:
        print('Too low')
        return False

    if guess > random_number:
        print('Too high')
        return False

    return True

# Generate a random number from 1 through 100
random_number = random.randint(1, 100)

# Use a boolean variable for whether or not you guessed the correct number
guessed = False

# Use an int variable to keep track of the number of guesses
guesses = 0

# Print the initial instructions
print('I\'ve thought of a number from 1 through 100.')

# Ask for an initial guess, if the user is lucky, they'll get it the first time
initial_guess = input('Guess the number: ')
guesses += 1
if check_guess(initial_guess, random_number):
    print('Correct. You took {} guess'.format(guesses))
    exit()

# Sadly, the user did not get it the first time, keep looping and asking for guesses until they get it
while not guessed:
    guess = input('Try again: ')
    guesses += 1
    guessed = check_guess(guess, random_number)

# Once we exit the loop, its because you chose a correct guess. Print the number of guesses it took
print('Correct. You took {} guesses'.format(guesses))
