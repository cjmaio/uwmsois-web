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
    country = input('Enter a country: ')
    print(nations[country])
