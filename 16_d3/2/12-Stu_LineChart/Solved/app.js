// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// Configure a parseTime function which will return a new Date object from a string
var parseTime = d3.timeParse("%B");

// Load data from miles-walked-this-month.csv
d3.csv("miles-walked-this-month.csv", function (error, milesData) {

  // Throw an error if one occurs
  if (error) throw error;

  // Print the milesData
  console.log(milesData);

  // Format the date and cast the miles value to a number
  milesData.forEach(function (data) {
    data.date = parseTime(data.date);
    data.miles = +data.miles;
  });

  // Configure a time scale with a range between 0 and the chartWidth
  var xTimeScale = d3.scaleTime().range([0, chartWidth]);

  // Configure a linear scale with a range between the chartHeight and 0
  var yLinearScale = d3.scaleLinear().range([chartHeight, 0]);

  // Set the domain for the xTimeScale function
  // d3.extent returns the an array containing the min and max values for the property specified
  xTimeScale.domain(d3.extent(milesData, function (data) {
    return data.date;
  }));

  // Set the domain for the xLinearScale function
  yLinearScale.domain([0, d3.max(milesData, function (data) {
    return data.miles;
  })]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Configure a drawLine function which will use our scales to plot the line's points
  var drawLine = d3
    .line()
    .x(function (data) {
      return xTimeScale(data.date);
    })
    .y(function (data) {
      return yLinearScale(data.miles);
    });

  // Append an SVG path and plot its points using the line function
  chartGroup.append("path")
    // The drawLine function returns the instructions for creating the line for milesData
    .attr("d", drawLine(milesData))
    .attr("class", "line");

  // Append an SVG group element to the SVG area, create the left axis inside of it
  chartGroup.append("g")
    .attr("class", "axis")
    .call(leftAxis);

  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0, " + chartHeight + ")")
    .call(bottomAxis);
});
