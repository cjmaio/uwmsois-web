#!/bin/bash

PATH="$PATH:$HOME/.local/bin"

# Ensure we have the `virtualenv` package installed
if ! command -v virtualenv &> /dev/null
then
    echo "virtualenv could not be found. Please install it with 'pip install virtualenv'"
    exit
fi

# Create a virtual environment for this project
virtualenv venv
source venv/bin/activate

# Install the necessary packages
pip install pymysql

echo "Setup complete. Run './tracker.sh' to start utilizing the application."
