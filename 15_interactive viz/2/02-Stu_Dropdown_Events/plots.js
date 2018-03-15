function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotify", "Soundcloud", "Pandora", "iTunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newValues) {
  var LINE = document.getElementById("pie");

  // Note the extra brackets around 'newx' and 'newy'
  Plotly.restyle(LINE, "values", [newValues]);
}

function getData(dataset) {

  // Initialize empty arrays to contain our axes
  var x = [];

  // Fill the x and y arrays as a function of the selected dataset
  switch (dataset) {
      case "dataset1":
          values = [19, 22, 39, 84];
          break;
      case "dataset2":
          values = [10, 20, 30, 40];
          break;
      case "dataset3":
          values = [23, 90, 22, 53];
          break;
      }

  updatePlotly(values);
}

init();
