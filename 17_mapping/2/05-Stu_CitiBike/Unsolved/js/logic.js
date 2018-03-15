// Creating our initial map object
var accessToken = "pk.eyJ1IjoibWFya2dyb25lciIsImEiOiJjamRoazFtN3AwdzRyMndwZ2dxN3hhaWt0In0.Z1mh0XHT_bO7FNgy2ndWLQ";
var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;
var mapID = "comic";



// Creating map object
var myMap = L.map("map-id", {
  center: newYorkCoords,
  zoom: mapZoomLevel
});
// Adding a tile layer (the background map image) to our map
L.tileLayer(
  `https://api.mapbox.com/v4/mapbox.${mapID}/{z}/{x}/{y}.png?access_token=${accessToken}`
).addTo(myMap);

var bikeStationUlr = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

d3.json(bikeStationUlr, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  var stationData = data.data.stations;

  stationData.forEach(function(data) {
    var coordinates = [stationData.lat, stationData.lon];
    var marker = L.marker(coordinates
    ).addTo(myMap);
  });
});
