def read_country_exchange_rates(file_name: str) -> dict:
    """
    Reads a file containing country exchange rates and returns a dict containing the data

    Args:
        file_name (str): The name of the file to read
    Returns:
        dict: A dict containing the country exchange rates
    """
    countries = {}
    with open('Exchrate.txt', 'r') as f:
        file_contents = f.read().split('\n')
        for i in range(0, len(file_contents)):
            if file_contents[i] != '':
                country, currency, rate = file_contents[i].split(',')
                countries[country] = {'currency': currency, 'per_usd': float(rate)}

    return countries


countries = read_country_exchange_rates('Exchrate.txt')


"""
(a) Write a program that requests the name of a country as input, then displays the name of its currency and its exchange rate.
"""
input_country = input('Enter the name of a country: ')
if input_country not in countries:
    print('Country not found')
    exit()
print('Currency: ' + countries[input_country]['currency'])
print('Exchange rate: ' + str(countries[input_country]['per_usd']))
print('')

"""
(b) Write a program that displays the names of the countries in ascending order, determined by # of units that can be purchased for 1 USD
"""

countries_by_exchange_rate = sorted(countries.items(), key=lambda x:x[1]['per_usd'], reverse=False)
print('Countries by exchange rate:')
for country in countries_by_exchange_rate:
    print(country[0])
print('')

"""
(c) Write a program that requests the name of two countries and an amount of money, and converts the amount from the first country's currency to the second country's currency. e.g.

Enter name of first country: America
Enter name of secound country: Chile
Amount of money to convert: 100
100 dollars from America equals 59,140.77 pesos from Chile
"""

# Get the source country, provide an error if its not found
source_country = input('Enter name of first country: ')
if source_country not in countries:
    print('Country not found')
    exit()

# Get the target country, provide an error if its not found
target_country = input('Enter name of second country: ')
if target_country not in countries:
    print('Country not found')
    exit()

# Get the amount of money to convert and convert it to the target currency
source_amount = float(input('Amount of money to convert: '))
source_amount_usd = source_amount / countries[source_country]['per_usd']
converted_amount = source_amount_usd * countries[target_country]['per_usd']

# Print the result
print('{source_amount:,} {source_currency}s from {source_country} equals {converted_amount:,} {target_currency}s from {target_country}'.format(
    source_amount=source_amount,
    source_currency=countries[source_country]['currency'],
    source_country=source_country,
    converted_amount=converted_amount,
    target_currency=countries[target_country]['currency'],
    target_country=target_country
))
