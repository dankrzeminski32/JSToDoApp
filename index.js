//selectors
const submitButton = document.querySelector("#form-submit");
const taskList = document.querySelector("#task-list");
const task = document.querySelector("#task");
//event listeners
submitButton.addEventListener("click", createTask);

//functions

/**
 * @description Creates the html elements and structure for a task item
 * @param {Event} e - the button click event from listener
 */
function createTask(e) {
  e.preventDefault();

  //div element to hold task and buttons
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  //li element to hold the text of task
  let taskText = document.createElement("li");
  taskText.classList.add("task-text");
  taskText.textContent = task.value;
  //create complete button
  let completeButton = document.createElement("button");
  completeButton.classList.add("task-complete");
  //create delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("task-delete");
  //append all children to parent div taskContainer
  taskContainer.appendChild(completeButton);
  taskContainer.appendChild(deleteButton);
  taskContainer.appendChild(taskText);
  taskList.appendChild(taskContainer);
  task.value = "";
}

function removeItem(task) {
  console.log(task);
  parentNode = task.parentNode;
  console.log(parentNode);
  parentNode.remove();
}
