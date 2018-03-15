// https://d3js.org/

// .each
d3.select("ul").selectAll("li").nodes();

d3.select("ul").selectAll("li")
    .each(function(d, i) {
        console.log("element", this);
        console.log("data", d);
        console.log("index", i);
    });


// match the data to the number of elements
var arr = [50, 55, 53];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
        return d;
    });

// Modify the returned data
d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
        return d + 1000;
    });

// New data points are ignored here
var arr = [50, 55, 53, 56, 68];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
        return d;
    });

// append affects existing elements
// FAIL!
var arr = [50, 55, 53, 56, 68];
d3.select("ul").selectAll("li")
    .data(arr)
    .append("li")
    .text(function(d) {
        return d;
    });

// Use `enter` to create new elements
var arr = [50, 55, 53, 56, 68];
// First, update existing elements
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .text(function(d) {return d;});

// Second, update create new elements for extra data points
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .enter()
    .append("li")
    .text(function(d) {return d;});

// @NOTE: There's a better way (merge) that we will discuss soon

// Finally, what if we remove an item?
var arr = [50, 55]
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .exit()
    .remove();

// @NOTE: If you are only creating new elements from data,
// then you only have to use enter()
// However, we will cover the enter-update-exit pattern more later
