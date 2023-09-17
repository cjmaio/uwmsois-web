# Create a dict to store the initial data from the file
miles_per_car_model = {}
with open('Mileage.txt', 'r') as f:
    file_contents = f.read().split('\n')
    for i in range(0, len(file_contents)):
        # Check to ignore blank lines, which my editor (and many) add by default
        if file_contents[i] != '':
            model, gallons = file_contents[i].split(',')
            if model not in miles_per_car_model:
                miles_per_car_model[model] = [0, 0]
            miles_per_car_model[model][0] += 1
            miles_per_car_model[model][1] += float(gallons)

# Now that we have the dict, we need to calculate the average miles per gallon for each model
mpg_per_car_model = {}
for model in miles_per_car_model:
    mpg_per_car_model[model] = round(100 / (miles_per_car_model[model][1] / miles_per_car_model[model][0]), 2)

# Now that we have the dict, we need to sort it by mpg
sorted_mpg_per_car_model = sorted(mpg_per_car_model.items(), key=lambda x:x[1], reverse=True)

# Print the results out to the console
print('Model\t MPG')
for model in sorted_mpg_per_car_model:
    print(model[0] + '\t' + str(model[1]))
