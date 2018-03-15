var arr = [1, 2, 3, 4, 5];

// call a function on each item in the array
arr.forEach(printOne);


// forEach with index
function printWithIndex(number, index) {
  console.log(index, number);
}

arr.forEach(printWithIndex);

/**
 * map - functional programming
 */

var theStagesOfJS = ["denial", "anger", "bargaining", "depression", "acceptance"];

// map
theStagesOfJS.map(function(item){
  return item;
});

theStagesOfJS.map(function(item, index) {
  return `Stage ${index + 1}: ${item}`;
});

// Note: The original array is unchanged
console.log(theStagesOfJS);

// map vs forEach
theStagesOfJS.forEach(function(each, index) {
  // the return of forEach is ignored
  return `Stage ${index + 1}: ${each}`;
});

theStagesOfJS.forEach(function(each, index) {
  // you have to mutate the orignal array with forEach
  theStagesOfJS[index] = `Stage ${index + 1}: ${each}`;
});


var bestActors = [
  {name: "Nic Cage", age: 54, knownFor: "Con Air"},
  {name: "Keanu Reeves", age: 53, knownFor: "The Matrix"},
  {name: "Betty White", age: 96, knownFor: "Lake Placid"},
  {name: "Patrick Warburton", age: 53, knownFor: "The Tick"}
];

bestActors.map(function(actor) {
  return actor.knownFor;
})

/**
 * Arrow Functions
 */

// Function Expression
var multiply1 = function (a, b) {
  return a * b;
}

// Arrow Function Expression
var multiply2 = (a, b) => {
  return a * b;
}

multiply2(2, 3); // 6 - called the same way as usual

// Arrow Function Expression - concise
var multiply3 = (a, b) => a * b;
// without curly brackets, the return statement is implied

// can omit the parenthesis if there's only a single parameter
var square = x => x * x;


// Note: there's no arrow-function equivalent of function declarations
function multiply4 (a, b) {
  return a * b;
}

// ¯\_(ツ)_/¯
