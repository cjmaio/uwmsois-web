import os
import sys
from credittrack.core import main

# I wanted to be able to import my code as a "module" without installing it, as I was not sure
# what environment you would be running this in. This is not the more elegant way to do this,
# but it works. It also let me organize my code in a way that's closer to how I do it daily :)
# https://www.geeksforgeeks.org/python-import-module-from-different-directory/
current_directory = os.getcwd()
sys.path.insert(0, '{}/credittrack'.format(current_directory))

if __name__ == "__main__":
    main()
