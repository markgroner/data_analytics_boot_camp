# Dependencies
import requests as req
import json

# URL for GET requests to retrieve Star Wars character data
url = "https://swapi.co/api/people/"

# Storing the JSON response within a variable
response = req.get(url + '4').json()

# Collecting the name of the character collected


# Counting how many films the character was in


# Figure out what their first starship was


# Print character name and how many films they were in

# Print what their first ship was
