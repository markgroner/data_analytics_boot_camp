// Data which we will be using to build our chart
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
// YOUR CODE HERE

// Append a rectange and set its height in relation to the booksReadThisYear value
// YOUR CODE HERE


var svg = d3.select("#svg-area").append("svg")
  .attr("height": "600")
  .attr("width": "400");

svg.data(booksReadThisYear);

svg.append("rect")
    .attr("x", 20)
    .attr("y", 20)
    .attr("rx", 0)
    .attr("ry", 0)
    .attr("width", function(d) {
        return d*200;
    })
    .attr("height", function(d) {
        return d*200;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "transparent");
