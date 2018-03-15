// @TODO: Complete the code according to the instructions in README.md.

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



function renderTodos() {
  var todoList = document.querySelector("#todo-list");
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    todoListItem = document.createElement('li');
    todoListItem.innerHTML = todo.text;
    todoList.appendChild(todoListItem);
  }
}

// running the renderTodos function once the page loads
renderTodos();
