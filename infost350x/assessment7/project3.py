from typing import List

ALLOWED_CLASSIFICATIONS = ['Salaried', 'Hourly']

class Employee:
    """
    Generic class representing an employee.
    """

    def __init__(self, name: str, pay_rate: float, hours_worked: float):
        self.name = name
        self.pay_rate = pay_rate
        self.hours_worked = hours_worked

class SalariedEmployee(Employee):
    """
    Class representing a salaried employee.
    """

    def calculatePay(self):
        """
        Calculate the pay for this employee.

        Returns:
            float: The pay for this employee.
        """
        return self.pay_rate

class HourlyEmployee(Employee):
    """
    Class representing an hourly employee.
    """

    def calculatePay(self):
        """
        Calculate the pay for this employee.

        Returns:
            float: The pay for this employee.
        """
        return self.pay_rate * self.hours_worked

# Now, let's take in input
employees: List[dict] = []
while True:
    employee_name = input('Enter employee\'s name: ')
    if employee_name == '':
        break

    employee_classification = input('Enter employee\'s classification (Salaried or Hourly): ').lower().capitalize()
    if employee_classification not in ALLOWED_CLASSIFICATIONS:
        print('Invalid classification, please try again.')
        continue

    hours_worked = float(input('Enter the number of hours worked: '))
    weekly_salary = float(input('Enter weekly salary: '))

    employees.append({
        'name': employee_name,
        'classification': employee_classification,
        'hours_worked': hours_worked,
        'weekly_salary': weekly_salary
    })

    # See if we want to continue or not
    continue_input = input('Do you want to continue (Y/N)? ')
    if continue_input.lower() == 'n':
        break

# Now, let's calculate the pay for each employee
total_payroll = 0
for employee in employees:
    if employee['classification'] == 'Salaried':
        employee['pay'] = employee['weekly_salary']
    else:
        employee['pay'] = employee['hours_worked'] * employee['weekly_salary']

    total_payroll += employee['pay']

# Now, let's print out the results
for employee in employees:
    print('{name}: ${pay:.2f}'.format(name=employee['name'], pay=round(employee['pay'], 2)))

print('Number of employees: {}'.format(len(employees)))
print('Number of salaried employees: {}'.format(len(list(filter(lambda employee: employee['classification'] == 'Salaried', employees)))))
print('Total payroll: ${:,.2f}'.format(total_payroll))
print('Average number of hours worked per employee: {:.2f}'.format(sum(map(lambda employee: employee['hours_worked'], employees)) / len(employees)))
