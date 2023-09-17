from nation import Nation
import pickle

def parse_nation_file(file_name: str) -> dict:
    """
    Parse the nation file and return a dictionary of Nation objects.

    Args:
        file_name (str): The name of the file to parse.
    Returns:
        dict: A dictionary of Nation objects.
    """
    nation_dict = {}
    with open('UN.txt', 'r') as f:
        nations = f.readlines()
        for nation in nations:
            nation = nation.split(',')
            nation = Nation(nation[0], nation[1], nation[2], nation[3])
            nation_dict[nation.name] = nation

    return nation_dict

def save_nation_dict(nation_dict: dict, file_name: str) -> None:
    """
    Save the nation dictionary to a pickled binary file.

    Args:
        nation_dict (dict): The dictionary to save.
        file_name (str): The name of the file to save to.
    """
    with open(file_name, 'wb') as f:
        pickle.dump(nation_dict, f)


def execute() -> None:
    """
    Execute the program.
    """
    nations = parse_nation_file('UN.txt')
    save_nation_dict(nations, 'nationsDict.dat')
