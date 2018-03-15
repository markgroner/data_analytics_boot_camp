// @TODO: Complete the code according to the instructions in README.md.

// Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

// YOUR CODE HERE
console.log('Your team this week:');
console.log('--------------');
var cutPlayers = 0
for (var i=0; i < roster.length; i++) {
  var player = roster[i];
  if (player.madeTeam) {
    console.log(player.position + ': ' + player.name);
  }
  else {
    cutPlayers++;
  }
}
console.log('--------------');
console.log(cutPlayers + ' players got cut.');
