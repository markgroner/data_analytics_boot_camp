# Complete Bar Chart

In this activity, we will utilize the data retrieved from `hours-of-tv-watched.csv` in order to create a bar chart.

## Instructions

* First, take a few minutes to review the code and discuss what you need to do with a buddy.

* Open the [Unsolved](Unsolved) folder and start the server. All code which you will write will be inside of the callback method passed into `d3.csv`.

* Using `chartGroup`, select all of the elements inside with a class of `bar` and bind the `tvData` data to the selection.

* Still chaining to the code written in the previous step, run the `.enter` method and append a `rect` with a class of `bar`.

* Set the `x` attribute of each rectangle using a callback function which is passed the data bound to the rectangle.

* Set the `y` attribute of each rectangle using a callback function which is passed the data bound to the rectangle.

* Set the `width` property of each rectangle to `(chartWidth / tvData.length) - chartMargin.right`.

* Set the `height` property of each rectangle using a callback function, which is passed the data bound to the rectangle. Remember to invert your y values using the chartHeight.

## Hints

* For assistance understanding data joins with D3, see [this article](https://bost.ocks.org/mike/join/) written by Mike Bostock, the creator of D3.

* For help understanding D3's `selection.call` method, see [D3's selection documentation](https://github.com/d3/d3-selection/blob/master/README.md#selection_call)
