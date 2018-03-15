// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 640;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)
  // Append a group to the SVG area and shift ('translate') it to the right and to the bottom

var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("hours-of-tv-watched.csv", function(error, tvData) {

  // Throw an error if one exists
  if (error) return console.warn(error);

  // Print the tvData
  console.log(tvData);

  // Cast the hours value to a number for each piece of tvData
  tvData.forEach(function(data) {
    data.hours = +data.hours;
  });
  var barWidth = chartWidth / tvData.length;
  chartGroup.selectAll(".bar")
    .data(tvData)
    .enter()
    .append("rect")
    .classed("bar", true)

    // Set the `x` attribute of each rectangle using a callback function which is passed the data bound to the rectangle
    .attr("x", (d, i) => (barWidth * i))
    //
    .attr("y", d => chartHeight - (d.hours *10))
    .attr("width", barWidth)
    // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
    .attr("height",  d =>d.hours * 10)
    // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10

    ;
  // @TODO
  // Complete the code to build the bar chart using the tvData
});
