console.log(data);
// YOUR CODE HERE

var greekSearchData = data.map(function(god) {
  return god.greekSearchResults
})

var romanSearchData = data.map(function(god) {
  return god.romanSearchResults
})

var greekNameData = data.map(function(god) {
  return god.greekName
})

var romanNameData = data.map(function(god) {
  return god.romanName
})

var godPairData = data.map(function(god) {
  return god.pair
})


// Create the Trace
var greekTrace = {
  x: godPairData,
  y: greekSearchData,
  type: "bar",
  text: greekNameData
}

var romanTrace = {
  x: godPairData,
  y: romanSearchData,
  type: "bar",
  text: romanNameData
}



// Create the data array for our plot
var data = [greekTrace, romanTrace]

// Define our plot layout
var layout = {
  title: "Greek vs Roman God"
}

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("plot", data, layout);
