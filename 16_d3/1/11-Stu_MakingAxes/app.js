// Define the dataset
var booksIReadThisYear = [12, 8, 7, 16, 2, 4, 11];

var namesArray = [
  "Abbott",
  "Barney",
  "Costello",
  "Daisy",
  "Edward",
  "Fred",
  "Georgia"
];

// Store the dimensions of the SVG container
var svgWidth = 800;
var svgHeight = 600;

// Create an object to represent the chart's margins within the SVG container
var margin = { top: 50, right: 50, bottom: 50, left: 50 };

var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Create a bandScale which will be used to position the charts bars along the x-axis and set their width and distance between other bars
// @TODO: YOUR CODE HERE

// Create a linearScale which will be used to position the charts bars along the y-axis and set their height in relation to the data
// @TODO: YOUR CODE HERE


// bottomAxis and leftAxis are functions which will create the chart's axes using the passed in scales
// @TODO: YOUR CODE HERE

// Create and size the SVG container. Then append, size, and position an SVG group inside within margins defined earlier
// @TODO: YOUR CODE HERE

// Append a new SVG group to the bottom of the chart, call the bottomAxis function on the new SVG group to insert an axis
// @TODO: YOUR CODE HERE


// Append a new SVG group to the left (default) of the SVG group, call the leftAxis function inside to create the left-axis
// @TODO: YOUR CODE HERE

