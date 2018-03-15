// Creating our initial map object
var accessToken = "pk.eyJ1IjoibWFya2dyb25lciIsImEiOiJjamRoazFtN3AwdzRyMndwZ2dxN3hhaWt0In0.Z1mh0XHT_bO7FNgy2ndWLQ";
var mapID = "comic";
var graphCenter = [45.52, -122.67];
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView(graphCenter, 13);


L.tileLayer(
  `https://api.mapbox.com/v4/mapbox.${mapID}/{z}/{x}/{y}.png?access_token=${accessToken}`
).addTo(myMap);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer(
  "https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?" +
    "access_token=" + // insert your access token here
).addTo(myMap);

// Write code here to create a circle using the following coordinates: (45.52, -122.69)

// Write code here to create a polygon with the following coordinates:
// (45.54, -122.68), (45.55, -122.68), (45.55, -122.66)

// Write code here to create a polyline with the following coordinates:
// (45.51, -122.68), (45.50, -122.60), (45.48, -122.70), (45.54, -122.75)

// Write code here to create a rectangle with the following coordinates:
// (45.55, -122.64) and (45.54, -122.61)
