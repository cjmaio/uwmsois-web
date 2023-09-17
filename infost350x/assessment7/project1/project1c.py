"""
Write a program that request the name of a continent as input, and then displays the names (in desc order) of the five most densely
populated UN member countries in that continent. Use the pickeld binary file nationsDict.dat and the file nation.py created in part (a)
"""

import pickle

def load_nation_dict(file_name: str) -> dict:
    """
    Load the nation dictionary from a pickled binary file.

    Args:
        file_name (str): The name of the file to load from.
    Returns:
        dict: A dictionary of Nation objects.
    """
    with open(file_name, 'rb') as f:
        nation_dict = pickle.load(f)

    return nation_dict

def execute() -> None:
    """
    Execute the program.
    """
    nations = load_nation_dict('nationsDict.dat')
    continent = input('Enter a continent: ')

    # Find all countries in the provided continent
    countries = []
    for nation in nations.values():
        if nation.continent == continent:
            countries.append(nation)

    # Sort the countries by population density in reverse
    countries.sort(key=lambda nation: nation.popDensity(), reverse=True)

    # Print out the top five countries
    for country in countries[:5]:
        print('\t {}'.format(country.name))
