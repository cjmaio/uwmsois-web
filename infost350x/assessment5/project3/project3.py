# Define a dictionary to hold the win/loss data per team for the American League East
win_loss_per_team = {}

# Open the input data file and read the content into the above created dictionary
# Additionally, while we're here, convert the wins and losses to a percent value
with open('ale.txt', 'r') as f:
    file_contents = f.read().split('\n')
    for i in range(0, len(file_contents)):
        # Check to ignore blank lines, which my editor (and many) add by default
        if file_contents[i] != '':
            team, wins, losses = file_contents[i].split(',')
            percent = round(float(wins) / (float(wins) + float(losses)), 3)
            win_loss_per_team[team] = {
                'wins': wins,
                'losses': losses,
                'percent': percent
            }

# Sort our dictionary by the percent value in decending order (located in the dictionary which is the value of each of these keys)
sorted_win_loss_per_team = sorted(win_loss_per_team.items(), key=lambda x:x[1]['percent'], reverse=True)

# Write our results to a file
with open('final_ale.txt', 'w') as f:
    for team, stats in sorted_win_loss_per_team:
        f.write('{},{},{},{}\n'.format(team, stats['wins'], stats['losses'], stats['percent']))
