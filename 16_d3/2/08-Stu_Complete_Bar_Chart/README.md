# Instructions

* Using the `chartGroup` variable defined earlier, select all of the elements inside with a class of `bar` and bind the `tvData` data to the selection.

* Still chaining to the code written in the previous step, run the `.enter` method and append a `rect` with a class of `bar`.

* Set the `x` attribute of each rectangle using a callback function which is passed the data bound to the rectangle. Run the `xBandScale` function and pass in the `name` property of the data bound to the rectangle.

* Set the `y` attribute of each rectangle using a callback function which is passed the data bound to the rectangle. Run the `xLinearScale` function and pass in the `hours` property of the data bound to the rectangle.

* Set the `width` property of each rectangle to `xBandScale.bandwidth()`.

* Set the `height` property of each rectangle using a callback function, which is passed the data bound to the rectangle. Run the `yLinearScale` function and pass in the `hours` property of the bound data. Subtract the returned value of this function from `chartHeight` and return the result.

## Hints

* For assistance understanding data joins with D3, see [this article](https://bost.ocks.org/mike/join/) written by Mike Bostock, the creator of D3.

* For assistance with axis creation with D3, see the [d3-axis documentation](https://github.com/d3/d3-axis)

* For help understanding D3's `selection.call` method, see [D3's selection documentation](https://github.com/d3/d3-selection/blob/master/README.md#selection_call)
