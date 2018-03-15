# Adding Todos

In this activity, you will enable your todo list app to add new tasks from an input box.

## Instructions

### Part one

* Open [index.html](Unsolved/index.html) and notice how we now have an input field and a button. They don't do anything for now, but you will give them the ability to add new tasks to the todo list.

* First add some styling with bootstrap and CSS to make your page look more presentable. Make sure your webpage has at least two bootstrap components.

### Part Two

* Now open [index.js](Unsolved/index.js) and add code to add a "click" event listener to the `$addTodoBtn`.

* When the `$addTodoBtn` is clicked, save a reference to the current `value` of the `$todoInput`. 

* Using the `push` method on the `todos` array, add a new object to the end of the `todos` array. This new object should have 2 properties:

  * A `text` property set to the `value` of the `$todoInput` element.

  * A `complete` property set to `false`.

* If the user has more than 5 task to get done, alert them that they may not have enough time to get all this done.

* After pushing the new object to the `todos` array, call `renderTodos` to re-render the list.

## Hints

* See [MDN Docs For Input Element Properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

* See [MDN Docs For Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

* Check out [MDN Docs for EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## Bonus

* Try clearing the input field after adding a new todo!
