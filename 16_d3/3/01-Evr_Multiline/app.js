// Step 0: Set up our chart parameters
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {top: 20, right: 20, bottom: 20, left: 20 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 1: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
//= ================================
var svg = d3.select("body").append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
// Step 2:
// Import data from the mojoData.csv file
//= ================================
d3.csv("mojoData.csv", function(error, mojoData) {
  if (error) throw error;

  // Step 3: Parse the data
  //= ================================
  var parseTime = d3.timeParse("%d-%b");
  // Create a function to parse date and time
  mojoData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });
  // Format the data and convert to numerical and date values

  // Step 4: Create the scales for the chart
  // for now, only define the range and not the domain
  //= ================================
  // Set the ranges with scaling functions
  var xTimeScale = d3.scaleTime().range([0, width]);
  var yLinearScale = d3.scaleLinear().range([height, 0]);
  // Step 5: Create the axes
  //= ================================
  // Functions to create axes
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Step 6: Set up the x-axis and y-axis domains
  //= =============================================
  var morningMax = d3.max(mojoData, d => d.morning);
  var eveningMax = d3.max(mojoData, d => d.evening);
  var yMax = morningMax > eveningMax ? morningMax : eveningMax;
 yLinearScale.domain([0, yMax]);

  xTimeScale.domain(
    d3.extent(mojoData, d => d.date)
  );
  // @NEW! determine the max y value
  // Use the yMax value to set the yLinearScale domain


  // Step 7: Append the axes to the chartGroup
  //= =============================================
  // Add x-axis
  // Add y-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g")
    .call(leftAxis);

  // Step 8: Set up two line generators and append two SVG paths
  //= =============================================
  // Line generators for each line
  var line1 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.morning));

  var line2 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.evening));

  // Step 9: Append the line paths
  //= =============================================

  // Append a path for line1
  chartGroup.append("path")
    .attr("d", line1(mojoData))
    .attr("class", "line green");

  // Append a path for line2
  chartGroup.append("path")
    .data([mojoData])
    .attr("d", line2)
    .attr("class", "line orange");
});
