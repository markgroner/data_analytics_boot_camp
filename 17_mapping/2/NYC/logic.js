// Creating map object
var map = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?" +
  "access_token=pk.eyJ1Ijoicm9iaW5oY2hvaSIsImEiOiJjamRmZWpkY3MwNmxhMnhwZzlhaXl6NW84In0.XxvGIqNauJkXKsyLqc7eWQ"
).addTo(map);

var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
"35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";


function chooseColor(borough) {
  switch(borough) {
    
  }
}

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data, {
    style: function(fearure) {
      mapStyle = {
        color: "white",
        fillColor: chooseColor(feature.properties.borough),
        fillOpacity: .5,
        weigh 1.5
      }
      return mapStyle
    },
    onEachFeature: funciton (feature, layer) {
      layer.bindPopup(`<h1> ${feature.properties.neighborhood} </h1> <hr> <h2> ${feature.properties.borough} </h2>`)
      layer.on({
        mouseover: function() {
          layer.setStyle({
            fillOpacity: .9
          })
        },
        mouseout: function() {
          layer.setStyle({
            fillOpacity: .5
          })
        },
        click:
      })
    }
  }).addTo(map);
});
