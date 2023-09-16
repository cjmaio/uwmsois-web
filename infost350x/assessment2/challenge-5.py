import locale

locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')

funds = ['SPY', 'QQQ', 'EEM', 'VXX']
invested_funds = {}

for fund in funds:
    fund_input = input('Enter amount invested in {}: '.format(fund))
    try:
        invested_funds[fund] = float(fund_input)
    except ValueError:
        print('Value provided not a valid float: {}'.format(fund_input))

print('')
print('ETF PERCENTAGE')
print('------------------')

total_invested = 0
for k, v in invested_funds.items():
    total_invested += v

for fund, amount in invested_funds.items():
    percentage = round((amount / total_invested) * 100, 2)
    print('{} {}%'.format(fund, percentage))

print('')
print('TOTAL AMOUNT INVESTED: {}'.format(locale.currency(total_invested, grouping=True)))
