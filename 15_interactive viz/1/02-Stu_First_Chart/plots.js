var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
                "Brown", "Brown", "Brown", "Green", "Green",
                "Green", "Green", "Green", "Blue", "Blue",
                "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
                  25.7, 24.5, 26.4, 24.2, 28, 26.9,
                  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];


// @TODO: Complete the Following Steps

var plotColor = eyeColor.map(function(color) {
  if (color === "Brown") {
    return "rgb(139,69,19";
  } else if (color === "Green") {
    return "rgb(107,142,35)";
  } else if (color === "Blue") {
    return "rgb(100,149,237)";
  }
})


// Create the Trace
var trace1 = {
  x: eyeColor,
  y: eyeFlicker,
  type: "bar",
  marker: {
    color: plotColor //["rgb(139,69,19)", "rgb(107,142,35)", "rgb(100,149,237)"]  // brown green blue
  }
}

// Create the data array for our plot
var data = [trace1]

// Define our plot layout
var layout = {
  title: "Eye Color Flicker"
}

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);
