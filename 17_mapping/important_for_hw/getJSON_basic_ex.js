// API endpoint for GeoJSON data
var queryUrl = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
  "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

d3.json(queryUrl, function(data) {
    
    var myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5
    });

    L.tileLayer("https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?" +
        "access_token=pk.eyJ1Ijoicm9iaW5oY2hvaSIsImEiOiJjamRmZWpkY3MwNmxhMnhwZzlhaXl6NW84In0.XxvGIqNauJkXKsyLqc7eWQ"
    ).addTo(myMap);

    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.place)
        }
    }).addTo(myMap);
})