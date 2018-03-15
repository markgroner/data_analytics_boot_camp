// Getting references to the input fields, button, and lists
var $nameInput = document.querySelector("#name");
var $itemInput = document.querySelector("#item");
var $perishableInput = document.querySelector("#perishable");
var $submitBtn = document.querySelector("#submit");
var $priority = document.querySelector("#priority");
var $nonPriority = document.querySelector("#non-priority");

// When the submit button is clicked, call the handleSubmitClick function
$submitBtn.addEventListener("click", handleSubmitClick);

function handleSubmitClick(event) {
  // The default behavior of a button clicked inside of a form is to try to submit the form somewhere (which we don't want)
  event.preventDefault();

  // Create a new movie patron object that will hold the data used to populate the page
  var newOrder = {
    name: $nameInput.value.trim(),
    item: $itemInput.value.trim(),
    perishable: $perishableInput.value.trim()
  };

  // Clearing the input fields
  $nameInput.value = "";
  $itemInput.value = "";
  $perishableInput.value = "";

  if (newOrder.perishable.toLowerCase() === "yes") {
    var $li = document.createElement("li");
    $li.className = "priority";
    $li.innerText = newOrder.name + ", " newOrder.item;
    $priority.appendChild($li);
  }
  else {
    $li = document.createElement("li");
    $li.className = "non-priority";
    $li.innerText = newOrder.name + ", " newOrder.item;
    $nonPriority.appendChild($li);
  }
}
