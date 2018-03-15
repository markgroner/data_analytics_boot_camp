var todos = [
  {
    complete: false,
    text: "Learn JavaScript"
  },
  {
    complete: false,
    text: "Learn JavaScript Charting"
  },
  {
    complete: false,
    text: "Make Awesome Front-End Projects"
  }
];

// renderTodos puts the todo list items on the page
function renderTodos() {
  var $todoList = document.querySelector("#todo-list");
  var todoHTML = "";
  for (var i = 0; i < todos.length; i++) {
    todoHTML += "<li>" + todos[i].text + "</li>";
  }
  $todoList.innerHTML = todoHTML;
}



renderTodos();

// Getting references to the button and input field
var $addTodoBtn = document.querySelector("#add-todo");
var $todoInput = document.querySelector("#todo-input");

// Write event listener here:
$addTodoBtn.addEventListener("click", function() {
  // pop is an Array method which removes the last element
  todos.pop();
  renderTodos();
});
