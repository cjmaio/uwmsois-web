YEARLY_DEPOSIT_AMOUNT_USD = 5000
INTEREST_RATE_PERCENT = 0.04

# Earl starts right away, deposits for 15 years, and then lets the money grow
EARL_IRA_YEAR_START = 2015 # Earl starts right away
EARL_IRA_YEAR_END = EARL_IRA_YEAR_START + 15

# Larry waits fifteen years to start, but then continues to deposit until retirement
LARRY_IRA_YEAR_START = 2030
LARRY_IRA_YEAR_END = 2063

# Let's keep track of the balances for each
earl_ira_deposited_balance = 0
earl_ira_balance = 0
larry_ira_deposited_balance = 0
larry_ira_balance = 0

# Let's work for 48 years and see what happens
current_year = 2015
while current_year <= 2063:
    # Compound the interest
    earl_ira_balance = earl_ira_balance + (earl_ira_balance * INTEREST_RATE_PERCENT)
    larry_ira_balance = larry_ira_balance + (larry_ira_balance * INTEREST_RATE_PERCENT)

    # Deposit the money if it's the right year for each person
    if current_year > EARL_IRA_YEAR_START and current_year <= EARL_IRA_YEAR_END:
        earl_ira_deposited_balance = earl_ira_deposited_balance + YEARLY_DEPOSIT_AMOUNT_USD
        earl_ira_balance = earl_ira_balance + YEARLY_DEPOSIT_AMOUNT_USD

    if current_year > LARRY_IRA_YEAR_START and current_year <= LARRY_IRA_YEAR_END:
        larry_ira_deposited_balance = larry_ira_deposited_balance + YEARLY_DEPOSIT_AMOUNT_USD
        larry_ira_balance = larry_ira_balance + YEARLY_DEPOSIT_AMOUNT_USD

    current_year = current_year + 1

# Print the results
print('               AMOUNTS DEPOSITED               ')
print('Earl:  ${:,.2f}            Larry:  ${:,.2f}'.format(earl_ira_deposited_balance, larry_ira_deposited_balance))
print('         AMOUNTS IN IRA UPON RETIREMENT        ')
print('Earl:  ${:,.2f}           Larry:  ${:,.2f}'.format(earl_ira_balance, larry_ira_balance))
