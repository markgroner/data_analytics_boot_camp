// Creating our initial map object
var accessToken = "pk.eyJ1IjoibWFya2dyb25lciIsImEiOiJjamRoazFtN3AwdzRyMndwZ2dxN3hhaWt0In0.Z1mh0XHT_bO7FNgy2ndWLQ";
var mapID = "comic";
var graphCenter = [45.52, -122.67];



// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: graphCenter,
  zoom: 13
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer(
  `https://api.mapbox.com/v4/mapbox.${mapID}/{z}/{x}/{y}.png?access_token=${accessToken}`
).addTo(myMap);

var marker = L.marker(graphCenter,
  {
    draggable: true,
    title: "My First Marker",
  }
).addTo(myMap)


marker.bindPopup("<strong>Hello!</strong>");
