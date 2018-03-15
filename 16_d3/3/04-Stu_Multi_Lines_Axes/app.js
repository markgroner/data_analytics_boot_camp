var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Import data from the mojoData.csv file
d3.csv("mojoData.csv", function(error, mojoData) {
  if (error) throw error;
  console.log(mojoData);
  console.log([mojoData]);
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b");

  // Format the mojoData
  mojoData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });

  // Set the ranges with scaling functions
  var xTimeScale = d3.scaleTime().range([0, width]);

  var yLinearScale = d3.scaleLinear().range([height, 0]);

  var yLinearScale2 = d3.scaleLinear().range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Scale the domain
  xTimeScale.domain(
    d3.extent(mojoData, function(data) {
      return data.date;
    })
  );

  yLinearScale.domain([
    0,
    d3.max(mojoData, function(data) {
      return data.morning;
    })
  ]);

  yLinearScale2.domain([
    0,
    d3.max(mojoData, function(data) {
      return data.evening;
    })
  ]);

  // Line generators for each line
  var line1 = d3
    .line()
    .x(function(data) {
      return xTimeScale(data.date);
    })
    .y(function(data) {
      return yLinearScale(data.morning);
    });

  var line2 = d3
    .line()
    .x(function(data) {
      return xTimeScale(data.date);
    })
    .y(function(data) {
      return yLinearScale2(data.evening);
    });

  // Append a path for line1
  chartGroup.append("path").data([mojoData]).attr("d", line1).attr("class", "line green");

  // Append a path for line2
  chartGroup.append("path").data([mojoData]).attr("d", line2).attr("class", "line orange");

  // Add bottomAxis
  chartGroup.append("g").attr("transform", "translate(0," + height + ")").call(bottomAxis);

  // Add leftAxis to the left side of the display
  chartGroup
    .append("g")
    // Define the color of the axis text
    .attr("stroke", "green")
    .call(leftAxis);

  // Add rightAxis to the right side of the display
  chartGroup
    .append("g")
    // Define the color of the axis text
    .attr("stroke", "orange")
    .attr("transform", "translate(" + width + ",0)")
    .call(rightAxis);

  chartGroup
    .append("text")
    // Position the text
    .attr(
      "transform",
      "translate(" + width / 2 + "," + (height + margin.top + 35) + ")"
    )
    // Center the text (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "orange")
    .text("Evening mojo level");

  chartGroup
    .append("text")
    .attr(
      "transform",
      "translate(" + width / 2 + "," + (height + margin.top + 20) + ")"
    )
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "green")
    .text("Morning mojo level");
});


chartGroupd.append("text")
  .attr("transform", )
