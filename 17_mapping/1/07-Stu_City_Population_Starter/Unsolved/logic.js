// Creating our initial map object
var accessToken = "pk.eyJ1IjoibWFya2dyb25lciIsImEiOiJjamRoazFtN3AwdzRyMndwZ2dxN3hhaWt0In0.Z1mh0XHT_bO7FNgy2ndWLQ";
var mapID = "comic";
var graphCenter = [37.09, -95.71];

// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: graphCenter,
  zoom: 5
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer(
  `https://api.mapbox.com/v4/mapbox.${mapID}/{z}/{x}/{y}.png?access_token=${accessToken}`
).addTo(myMap);


// City markers
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546"
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "2,296,224"
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
}
];
// Format the mojoData




cities.forEach(function(data) {
  data.population = data.population.split(",").join("");
  data.population = +data.population;

  var circle = L.circle(data.location, {
    radius: data.population / 40,
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75
  }).addTo(myMap)

  circle.bindPopup(`<h1> ${data.name} </h1> <hr> <h3> Population: ${data.population} <\h3>`);
});
