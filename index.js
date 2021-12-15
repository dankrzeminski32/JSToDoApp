//selectors
const submitButton = document.querySelector("#form-submit");
const deleteButton = document.querySelector("task-delete");
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
  completeButton.innerHTML = "<i class='fas fa-check-square'></i>";
  //create delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("task-delete");
  deleteButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
  //append all children to parent div taskContainer
  taskContainer.appendChild(completeButton);
  taskContainer.appendChild(deleteButton);
  taskContainer.prepend(taskText);
  taskList.prepend(taskContainer);
  task.value = "";
  deleteButton.addEventListener("click", removeItem);
}

function removeItem(e) {
  parentNode = e.target;
  console.log(e);
  if (e.target.classList[0] === "task-delete") {
    let removeItem = e.target.parentNode;
    removeItem.remove();
  } else if (e.target.classList[0] === "fas") {
    let removeItem = e.target.parentNode.parentNode;
    removeItem.remove();
  }
}
