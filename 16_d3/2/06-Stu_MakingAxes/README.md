# Making Axes

In this activity we will add x- and y-axes to an empty chart from a provided dataset.

## Instructions

1. After the `chartHeight` is set, write code to create and store a band scale function. The band scale's domain should be the `.lettersArray`. Its range should be between `0` and `chartWidth`. Configure the band scale's `padding` to be `0.1`.

2. After creating the band scale, write code to create and store a linear scale function. The linear scale's domain should be between `0` and `50`. The range should be between the `chartHeight` and `0`.

3. Once the linear scale is created, write code to create and store a bottom-axis function using the `d3.axisBottom` method and the band scale created in step 1.

4. Then write code to create and store a left-axis function using the `d3.axisLeft` method and the linear scale created earlier.

5. After the SVG container and SVG group are appended to the page, write code to append a new SVG group element inside of the `svg` selector variable already defined. Use the `transform` attribute to `translate` the SVG group down by the height of the chart. Inside of this new SVG group, call the bottom-axis function created in step 3 to create the bottom x-axis.

6. Finally, append another new SVG group element inside of the `chartGroup` selector variable already defined. Inside of this new SVG group element, call the left-axis function created in step 4 to create the left y-axis.

## Hints

* See this example of create [D3 Band Scales & Bottom Axes](https://bl.ocks.org/biovisualize/9c0d30d0539914ecdb15). Remember that the domain and range must both be arrays.

* See this article on [D3 Scales](https://www.dashingd3js.com/d3js-scales) to see an example of a linear scale and learn more about how scales work.

* Check out this D3 tutorial on [Creating Axes](https://www.dashingd3js.com/d3js-axes)

* See [MDN Documentation for CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)
