# Assessment 8 - Final Project

## Prompt:

Create a software application based on a real world problem of your choosing. Create an original program using code in class and submit content + working and tested code.

## Introduction to Credit Tracker

The name of my project is Credit Tracker.

Right now personally, I track all of my lines of credit and various statistics about them in a spreadsheet. This works fine, but it would be nice to automate it. I've tried to use several solutions like Rocket Money, Tiller, YNAB, etc... but they're always far too heavyweight when I just want to have an "at a glance" view of my debts. To get the exact kind of tracking that I want, it would be ideal to write my own bit of software to track this information since I both have the ability, and will be able to customize the software to do exactly what I want it to do for the way I budget.

## Goals

The goals of this project are:

- Provide tracking for both revolving Lines of Credit and Credit Cards
- Tracking needs to include annual fees, interest rates, credit limits, balances
- The project should also involve being able to query and sort my credit lines by data like:
  - Highest balance
  - Highest interest
  - Highest utilization
  - etc.

## Scope

The end result of this project will be a command line utility (CLI) written in Python that will allow me to add, delete, and update accounts. It will also allow me to list accounts with various methods of sorting to help introspect my current financial standing.

Specifically out of scope would be any types of credit outside of revolving credit (e.g. loans) or tracking of income.

## Program Design

The programs inputs / outputs will all be done via the command line, using an "interactive" prompt. The program will use menus to allow the user to add / remove / manage accounts, or go backwards through the prompts.

The specific things we need to be able to track per line of credit:

- Company Name
- Account Name
- Card Type (for Credit Cards)
- Date Opened
- Annual Fee
- Interest Rate
- Credit Limit
- Current Balance
- Last Updated At
- Rewards (for Credit Cards, e.g. 2% cash back)
- Active Promotions (for Credit Cards, e.g. 0% interest for 12 months)

The Python code will use classes and enums to categorize the types of accounts and store them internally. There will be two storage methods for data:

1) Data can be stored in a "pickled" format, using a local file for storage.
2) Data can also be stored via a MySQL database, with a `schema.sql` provided for setting up that database.

Configuration of these options will be possible via a `config.ini` file alongside the code.

The only external package used by this program is `pymysql` which can be installed using the provided `setup.sh` script, or by running:

```python
pip install pymysql
```

## Boostrapping

To get started, check out all files for this program into a folder on your local machine. This includes:

- `config.ini`
- `setup.sh` (optional, if using macOS or Linux)
- `tracker_constants.py`
- `tracker_entities.py`
- `tracker_exceptions.py`
- `tracker_input.py`
- `tracker_manager.py`
- `tracker_types.py`
- `tracker.py` (the entrypoint)
- `tracker.sh` (optional, if using macOS or Linux)

Once that's done, using the command line, go into that directory. Based on your OS, you can bootstrap the application using the following steps.

### macOS / Linux

Assuming you have `python`, `pip`, and `virtualenv` utilities installed on your machine, you can simply run:

```bash
./setup.sh
```

### Windows

Assuming you have `python` and `pip` utilities installed on your machine, run the following commands to download the pre-requisites:

```bash
pip install pymysql
```

## Documentation

Once you have the application's pre-requsites installed, you can now start the application. I provided a helper `tracker.sh` script that will work if you use macOS or Linux:

```bash
./tracker.sh
```

Otherwise, if you're on Windows, you can run:

```bash
python tracker.py
```

This will start the Credit Tracker program. From here, you will be presented with the following top level options (and, of course, typing "exit" to exit the program).

### Add Account (1)

Typing `1` and pressing `enter` will put the user in an add account flow. The application will ask you for information about the account and will validate the information as you provide it.

You are able to exit this flow at any time (discarding any inputs) by typing `back` and pressing `enter`.

The program will indicate whether it successfully added the account or not.

### Update Account (2)

Typing `2` and pressing `enter` will put the user into a modify account flow.

The application will first ask what account you'd like to modify: select an account by number, and press `enter`.

The application will then ask what about the account you'd like to update: select a property by number, and press `enter`.

Finally, the application will ask you what the new value should be for that property. Enter a new value, and press `enter`.

This will update that value for your account, and automatically persist it to the database (whether local or MySQL-based). It will drop you back into the menu for editing the account. You can choose another property to change, or you can type "back" to get back to the main menu.

### Remove Account (3)

Typing `3` and pressing `enter` will put the user into a remove account flow.

The application will first ask what account you'd like to remove: select an account by number, and press `enter`.

The application will then ask you to confirm that you'd like to remove this account. Respond with either `y` (confirming yes, you would like to remove the account) or `n` (you would like to keep the account), and press `enter`.

If chosen, this will remove your account, and automatically remove this account from the database (whether local or MySQL-based). It will then return you to the main menu.

### List Accounts (4)

Typing `4` and pressing `enter` will put the user into a list account flow. This is the flow that will let you get statistics about the accounts you have added.

Once in this flow, the application will ask you how you would like to view your accounts. It provides a variety of ways to sort your accounts, including:

- Name (asc/desc)
- Balance (asc/desc)
- Date Opened (asc/desc)
- Interest Rate (asc/desc)
- Credit Limit (asc/desc)
- Utilization % (asc/desc)
- Available Credit (asc/desc)
- Last Updated At (asc/desc)

Enter the number representing method you'd like to use to sort and view your accounts, and press `enter`. The application will then list out your account information, sorted by your selection - and then ask again what you'd like to sort by. At this point you can type `back` to go back to the main menu, or `exit` to exit the application.
