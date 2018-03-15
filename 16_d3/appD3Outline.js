// Step 0: Set up our chart parameters
//= ================================

// Step 1: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
//= ================================

// Step 2:
// Import data from the mojoData.csv file
//= ================================
d3.csv("mojoData.csv", function(error, mojoData) {
  if (error) throw error;

  // Step 3: Parse the data
  //= ================================

  // Create a function to parse date and time

  // Format the data and convert to numerical and date values

  // Step 4: Create the scales for the chart
  // for now, only define the range and not the domain
  //= ================================
  // Set the ranges with scaling functions

  // Step 5: Create the axes
  //= ================================
  // Functions to create axes

  // Step 6: Set up the x-axis and y-axis domains
  //= =============================================

  // @NEW! determine the max y value
  // Use the yMax value to set the yLinearScale domain


  // Step 7: Append the axes to the chartGroup
  //= =============================================
  // Add x-axis
  // Add y-axis

  // Step 8: Set up two line generators and append two SVG paths
  //= =============================================
  // Line generators for each line


  // Step 9: Append the line paths
  //= =============================================

  // Append a path for line1

  // Append a path for line2
});
