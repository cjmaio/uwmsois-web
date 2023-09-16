item_price = 0
item_price_input = input('Enter price of item: ')
try:
    item_price = float(item_price_input)
except ValueError:
    print('Item price was not a float value')

item_weight_lbs = 0
item_weight_lbs_input = input('Enter pounds: ')
try:
    item_weight_lbs = float(item_weight_lbs_input)
except ValueError:
    print('Item weight (pounds) was not a float value')

item_weight_oz = 0
item_weight_oz_input = input('Enter ounces: ')
try:
    item_weight_oz = float(item_weight_oz_input)
except ValueError:
    print('Item weight (oz) was not a float value')

lbs_to_oz = item_weight_lbs * 16
lbs_plus_oz = lbs_to_oz + item_weight_oz
price_per_oz = item_price / lbs_plus_oz

print('Price per ounce: ${}'.format(price_per_oz))
