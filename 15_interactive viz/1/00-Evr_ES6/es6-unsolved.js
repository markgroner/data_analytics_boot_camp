var arr = [1, 2, 3, 4, 5];

var theStagesOfJS = ["denial", "anger", "bargaining", "depression", "acceptance"];

var bestActors = [
  {name: "Nic Cage", age: 54, knownFor: "Con Air"},
  {name: "Keanu Reeves", age: 53, knownFor: "The Matrix"},
  {name: "Betty White", age: 96, knownFor: "Lake Placid"},
  {name: "Patrick Warburton", age: 53, knownFor: "The Tick"}
];

var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];


// @TODO: Complete the following:

// log the name of each princess, follow by a colon, followed by their age
princesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`)
})

// create an array of just the names from the princesses array
var princessNames = princesses.map(function(princess) {
  return princess.name
})


// using the `names` array, get only those names that start with an 'M'
var princessNamesM = princesses.map(function(princess) {
  if (princess.name.substring(0,1) === "M") {
    return princess.name
  }
})


var princessNamesM = princesses.filter(function(princess){
    return princess.name.substring(0,1) === "M";
});
