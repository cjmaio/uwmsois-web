def add_senators_from_file(file: str, senators: dict) -> dict:
    """
    Adds senators to the provided dictionary from a given file.

    Args:
        file (str) The file to read senators from
        senators (dict) The dictionary to add senators to
    Returns:
        dict: The dictionary with senators added
    """
    with open(file, 'r') as f:
        file_contents = f.read().split('\n')
        for i in range(0, len(file_contents)):
            # Check to ignore blank lines, which my editor (and many) add by default
            if file_contents[i] != '':
                name, state, party = file_contents[i].split(',')
                # Also check to ensure we don't have duplicates, as some input files do contain duplicates
                if name not in senators:
                    senators[name] = {
                        'state': state,
                        'party': party
                    }

    return senators


def remove_senators_from_file(file: str, senators: dict) -> dict:
    """
    Removes senators from the provided dictionary from a given file.

    Args:
        file (str) The file to read senators from
        senators (dict) The dictionary to remove senators from
    Returns:
        dict: The dictionary with senators removed
    """
    with open(file, 'r') as f:
        file_contents = f.read().split('\n')
        for i in range(0, len(file_contents)):
            # Check to ignore blank lines, which my editor (and many) add by default
            if file_contents[i] != '':
                name, state, party = file_contents[i].split(',')
                # Also check to ensure we don't have duplicates, as some input files do contain duplicates
                if name in senators:
                    del senators[name]

    return senators


def write_senators_to_file_by_state(senators: dict, file_name: str):
    """
    Writes the provided dictionary of senators to a file, sorted by state.

    Args:
        senators (dict) The dictionary of senators to write
        file_name (str) The name of the file to write to
    """
    sorted_senators_by_state = sorted(senators.items(), key=lambda x:x[1]['state'])
    with open(file_name, 'w') as f:
        for senator in sorted_senators_by_state:
            f.write(senator[0] + ',' + senator[1]['state'] + ',' + senator[1]['party'] + '\n')


def output_senators_by_party(senators: dict):
    """
    Outputs the number of senators of each party affiliation.

    Args:
        senators (dict) The dictionary of senators to count
    """
    party_affiliation = {'R': 0, 'D': 0, 'I': 0}
    for senator in senators:
        party_affiliation[senators[senator]['party']] += 1

    print('Party affiliations:')
    print('  Republicans: ' + str(party_affiliation['R']))
    print('  Democrats: ' + str(party_affiliation['D']))
    print('  Independents: ' + str(party_affiliation['I']))
    print('')


def output_same_party_senate_states(senators: dict):
    """
    Outputs the number of states with two senators of the same party affiliation.

    Args:
        senators (dict) The dictionary of senators to count
    """
    states_with_same_party_affiliation = 0
    senators_list = list(senators.items())
    for i in range(0, len(senators_list), 2):
        # Ensure we do not encounter an IndexError by checking if we are at the end of the list
        if i + 1 >= len(senators_list):
            break

        senator_1 = senators_list[i][1]
        senator_2 = senators_list[i + 1][1]

        if senator_1['party'] == senator_2['party']:
            states_with_same_party_affiliation += 1

    print('States with same party senators: {}'.format(states_with_same_party_affiliation))
    print('')


# Part A: Create a dictionary of senators, write them to file sorted by state
senators = add_senators_from_file('Senate113.txt', {})
senators = remove_senators_from_file('RetiredSen.txt', senators)
senators = add_senators_from_file('NewSen.txt', senators)
write_senators_to_file_by_state(senators, 'Senate114.txt')

# Part B: Output the number of senators of each party affiliation
output_senators_by_party(senators)

# Part C: Output the number of states with two senators of the same party affiliation
output_same_party_senate_states(senators)

# Part D: Ask the user to input a state, and then display the two senators from that state
input_state = input('Enter the name of a state: ')
for senator in senators:
    if senators[senator]['state'] == input_state:
        print(senator)
