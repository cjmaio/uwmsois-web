# Define some useful constants
CAFFEINE_PER_CUP_MG = 130.0
CAFFEINE_HALF_LIFE_MG = (CAFFEINE_PER_CUP_MG / 2)

# Define a function that will do the work of calculating the caffeine values
def process_caffeine(caffeine_mg: float) -> float:
    '''
    Returns the amount of caffeine in the body after one hour from the starting amount in mg.
    Args:
        caffeine_mg (float): The amount of caffeine in mg.
    Returns:
        float: The amount of caffeine in the body after one hour.
    '''
    return caffeine_mg - (caffeine_mg * 0.13)

# Assume a person drinks an 8-oz cup of coffee and that the caffeine is absorbed immediately into the body

print('CAFFEINE VALUES')

# (a) Number of hours until less than one-half the original amount remains in the body
current_caffeine_mg = CAFFEINE_PER_CUP_MG
hours_elapsed = 0
while current_caffeine_mg > CAFFEINE_HALF_LIFE_MG:
    current_caffeine_mg = process_caffeine(current_caffeine_mg)
    hours_elapsed = hours_elapsed + 1
print('One cup: less than {} mg. will remain after {} hours.'.format(CAFFEINE_HALF_LIFE_MG, hours_elapsed))

# (b) Amount of caffeine in the body 24 hours after the person drinks the coffee
while hours_elapsed < 24:
    current_caffeine_mg = process_caffeine(current_caffeine_mg)
    hours_elapsed = hours_elapsed + 1
print('One cup: {} mg. will remain after 24 hours.'.format(round(current_caffeine_mg, 2)))

# (c) Person drinks a cup of coffee at 7 am and then drinks a cup of coffee at the end of each hour until 7 am the next day.
# How much caffeine is in the body at the end of 24 hours?
# NOTE: Assumption made here is that we're starting from zero, we're not going from the previous 2 questions
current_caffeine_mg = 0
hours_elapsed = 0
current_caffeine_mg = CAFFEINE_PER_CUP_MG # Initial cup of coffee at 7 am
while hours_elapsed < 24:
    current_caffeine_mg = process_caffeine(current_caffeine_mg)
    current_caffeine_mg = current_caffeine_mg + CAFFEINE_PER_CUP_MG
    hours_elapsed = hours_elapsed + 1

print('Hourly cups: {} mg. will remain after 24 hours.'.format(round(current_caffeine_mg, 2)))
