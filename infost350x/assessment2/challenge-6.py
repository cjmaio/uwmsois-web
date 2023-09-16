from enum import Enum

class Measurement(Enum):
    Miles = 'miles'
    Yards = 'yards'
    Feet = 'feet'
    Inches = 'inches'

measurements = {}

for m in Measurement:
    measurement_input = input('Enter number of {}: '.format(m.value))
    try:
        measurements[m.value] = float(measurement_input)
    except ValueError:
        print('Value provided not a valid float: {}'.format(measurement_input))

inches = (
    (measurements[Measurement.Miles.value] * 63360.0) +
    (measurements[Measurement.Yards.value] * 36.0) +
    (measurements[Measurement.Feet.value] * 12.0) +
    measurements[Measurement.Inches.value]
)

meters = inches / 39.37

final_km = int(meters / 1000)
final_m = meters - (final_km * 1000)
final_cm = (final_m - int(final_m)) * 100

print('Metric length:')
print('  {} kilometers'.format(final_km))
print('  {} meters'.format(int(final_m)))
print('  {} centimeters'.format(round(final_cm, 1)))
