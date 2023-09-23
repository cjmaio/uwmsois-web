#!/bin/bash

if [ ! -d "venv" ]; then
    echo "Please run setup.sh first"
    exit 1
fi

source venv/bin/activate
python tracker.py
deactivate
