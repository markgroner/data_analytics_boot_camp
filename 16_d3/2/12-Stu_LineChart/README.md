# Line Chart

In this activity we will create a line chart to demonstrate the number of miles per month the user of a fitness application has walked since they started using the app.

## Instructions

1. Take a moment to study the new data set [miles-walked-this-month.csv](Unsolved/miles-walked-this-month.csv).

2. Start the server and navigate to the chart in the web browser. At this point, you should see an empty chart with no line or bottom axis.

3. Open [app.js](Unsolved/app.js) and after the SVG container is appended to the body, use the `d3.timeParse` method in order to create a new function to parse the month from the CSV data. You will need to pass the `%B` token as an argument into the `d3.timeParse` method in order to properly configure the new function to create a new `Date` object from a string month.

4. Run a `forEach` loop on the `milesData`. Cast the `miles` property of each element in the `milesData` array to a number. Use the time parser function created in the last step to convert the `month` for each element into a `Date` object.

5. Run the `d3.line` method to create and save a new line generator function. Configure this function to plot the x-axis using `xTimeScale` function, passing in the `date` property for each element in the dataset. Then configure this function to plot the y-axis using the `yLinearScale` function, passing in the `miles` property for each element in the dataset.

6. Append an SVG `path` to the SVG container. Set the `d` attribute of the new SVG `path` using the line generator function created in the last step. Pass `milesData` into the line generator as an argument.

7. Finally, give the SVG `path` a class of `line`.

## Hints

* See D3 documentation for [local.parse](https://github.com/d3/d3-time-format/blob/master/README.md#locale_parse) to better understand the `d3.timeParse` method.

* See D3 documentation for [local.format](https://github.com/d3/d3-time-format/blob/master/README.md#locale_format) to better understand the tokens used with the `d3.timeParse` method.

* See D3 documentation for [d3.line](https://github.com/d3/d3-shape#line) to better understand the steps for creating a line generator function. 

* Check out a [basic line chart example](https://bl.ocks.org/mbostock/3883245) made by D3 creator, Mike Bostock.

* Check the browser often, print any values you're unsure about to the console.
