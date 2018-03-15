

// Building API query URL
var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
var complaint = "&complaint_type=Rodent";
var limit = "&$limit=100";

// Assembling API query URL
var ratsUrl = `${baseURL}${date}${complaint}${limit}`;


d3.json(ratsUrl, function(data) {

  // Creating our initial map object
  var accessToken = "pk.eyJ1IjoibWFya2dyb25lciIsImEiOiJjamRoazFtN3AwdzRyMndwZ2dxN3hhaWt0In0.Z1mh0XHT_bO7FNgy2ndWLQ";
  var mapID = "comic";
  var graphCenter = [40.7, -73.95];


  // Creating map object
  var myMap = L.map("map", {
    center: graphCenter,
    zoom: 11
  });



  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer(
    `https://api.mapbox.com/v4/mapbox.${mapID}/{z}/{x}/{y}.png?access_token=${accessToken}`
  ).addTo(myMap);

  data.forEach(function(data, index) {
    console.log(index)
    var marker = L.marker(data.location.coordinates,
    ).addTo(myMap);
  });


});


console.log(ratsUrl)
