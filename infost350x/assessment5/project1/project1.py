# Define a dictionary to hold our unit conversion values
units = {}

# Open the units file and read the content into the above created dictionary
with open("Units.txt", 'r') as f:
    file_contents = f.read().split()
    for i in range(0, len(file_contents)):
        unit, value_in_ft = file_contents[i].split(',')
        units[unit] = float(value_in_ft)


def print_units_of_length():
    """
    Print the units of length in a 3 column format
    """
    print('UNITS OF LENGTH')
    unit_names = list(units.keys())
    for i in range(0, len(unit_names), 3):
        if i+2 < len(unit_names):
            print('{:<12}{:<12}{:<12}'.format(unit_names[i], unit_names[i+1], unit_names[i+2]))
    print('')


def get_and_validate_unit(direction: str):
    """
    Get and validate the unit provided by the user

    Args:
        direction (str): The direction of the conversion
    """
    unit = input('Units to convert {}: '.format(direction))
    if unit not in units:
        print('Invalid unit provided: {}'.format(unit))
        exit()
    return unit


def get_and_convert_length(source_unit: str, dest_unit: str):
    """
    Get the length of the source unit from the user and convert it to the desired unit

    Args:
        source_unit (str): The source unit
        dest_unit (str): The destination unit
    """
    length = float(input('Enter length in {}: '.format(source_unit)))
    length_in_to_unit = length * units[source_unit] / units[dest_unit]
    print('Length in {}: {}'.format(dest_unit, length_in_to_unit))


# Now, actually execute the functions defined above
print_units_of_length()
source_unit = get_and_validate_unit('from')
dest_unit = get_and_validate_unit('to')
get_and_convert_length(source_unit, dest_unit)
