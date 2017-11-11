# Create code to answer each of the following questions.
# Hint: You will need multiple target urls and multiple API requests.

# Dependencies
import requests
import json

# Google API Key
# ...
key = 'AIzaSyCenEgtdupptx5dsNMV8uUpzL0QrCrTAaA'
geo_cord_url = "https://maps.googleapis.com/maps/api/geocode/json"

# 1. What are the geocoordinates (latitude/longitude) of Seattle, Washington?

city = 'Seattle, Washington'
seattle_params = {'address': city, 'key': key}
seattle_response = requests.get(geo_cord_url, params=seattle_params)
seattle_data = seattle_response.json()
## print(json.dumps(seattle_data, indent=4, sort_keys=True))
seattle_lat = seattle_data["results"][0]["geometry"]["location"]["lat"]
seattle_lng = seattle_data["results"][0]["geometry"]["location"]["lng"]
print(f'{city}: latitude = {seattle_lat} --- longitude = {seattle_lng}')

# 2. What are the geocoordinates (latitude/longitude) of The White House?
white_house = 'The White House'
white_house_params = {'address': white_house, 'key': key}
white_house_response = requests.get(geo_cord_url, params=white_house_params)
white_house_data = white_house_response.json()
## print(json.dumps(white_house_data, indent=4, sort_keys=True))
white_house_lat = white_house_data["results"][0]["geometry"]["location"]["lat"]
white_house_lng = white_house_data["results"][0]["geometry"]["location"]["lng"]
print(f'{white_house}: latitude = {white_house_lat} --- longitude = {white_house_lng}')

# 3. Find the names and addresses of a bike store in Seattle, Washington.
#    Hint: See https://developers.google.com/places/web-service/supported_types
places_url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
seattle_location_cords = f'{seattle_lat},{seattle_lng}'
bike = 'bicycle_store'
seattle_bike_params = {'location': seattle_location_cords, 'key': key, 'types': bike, 'radius': 8000}
seattle_bike_response = requests.get(places_url, seattle_bike_params)
seattle_bike_data = seattle_bike_response.json()
print(json.dumps(seattle_bike_data, indent=4, sort_keys=True))

# 4. Find a balloon store near the White House.
# ...


# 5. Find the nearest dentist to your house.
#    Hint: Use Google Maps to find your latitude and Google Places to find the
#    dentist. You will also need the rankby property.
# ...


# 6. Bonus: Find the names and addresses of the top five places Google suggests
#    for the phrase: "Happy Place ".
#    Hint: Read about "Text Search Results"
# (https://developers.google.com/places/web-service/search#TextSearchRequests)
# ...
