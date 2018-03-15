// Creating our initial map object
var accessToken = "pk.eyJ1IjoibWFya2dyb25lciIsImEiOiJjamRoazFtN3AwdzRyMndwZ2dxN3hhaWt0In0.Z1mh0XHT_bO7FNgy2ndWLQ";
var mapID = "comic";
var graphCenter = [40.7128, -74.0059];

// Creating map object
var myMap = L.map("map", {
  center: graphCenter,
  zoom: 8
});
// Adding a tile layer (the background map image) to our map
L.tileLayer(
  `https://api.mapbox.com/v4/mapbox.${mapID}/{z}/{x}/{y}.png?access_token=${accessToken}`
).addTo(myMap);


// Link to GeoJSON
var APILink = "http://data.beta.nyc//dataset/9572746e-5fec-4623-889a-eb6eb195101f/resource/0c322985-3c47-4a5f-a4ef-a27a8cf675b2/download/f28d740931ce480092d53307e6e37abageojsonmedianhouseholdincomecounty.geojson"


d3.json(APILink, function(data) {

  
//  var featuresData = data.features;
//  console.log(featuresData)
//  for (var i = 0; i < featuresData.length; i++) {//

//    var coordinatesData = featuresData[0].coordinates;
//    console.log(coordinatesData)//

//    for (var i = 0; i < coordinatesData.length; i++) {
//      var marker = L.marker(coordinates,
//      ).addTo(myMap);
//    }
//  }
});
