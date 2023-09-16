from math import floor

change_input = input('Enter amount of change: ')

try:
    print(change_input)
    change = int(change_input)
    quarters = floor(change / 25)
    dimes = floor((change - (quarters * 25)) / 10)
    nickels = floor((change - (quarters * 25) - (dimes * 10)) / 5)
    cents = floor(change - (quarters * 25) - (dimes * 10) - (nickels * 5))

    print('Quarters: {} Dimes: {} Nickels: {} Cents: {}'.format(quarters, dimes, nickels, cents))
except ValueError:
    print('Value input was not a valid integer')
