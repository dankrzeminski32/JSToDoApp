console.log("It is working....");

//document.getElementById("form-submit").addEventListener("submit", createTask);

function createTask() {
  let task = document.getElementById("task").value;
  let taskItem = document.createElement("li");
  let taskContainer = document.createElement("p");
  let taskItemText = document.createTextNode(task);
  taskItem.setAttribute("class", "task-item");
  taskContainer.appendChild(taskItemText);
  taskItem.appendChild(taskContainer);
  let xIconSpan = document.createElement("span");
  xIconSpan.innerHTML = "&#10006";
  xIconSpan.setAttribute("class", "delete-icon");
  xIconSpan.setAttribute("onclick", "removeItem(this)");
  taskItem.appendChild(xIconSpan);
  console.log(taskItem);
  addTask(taskItem);
  document.getElementById("task").value = "";
}

function addTask(task) {
  let taskList = document.getElementById("task-list");
  taskList.appendChild(task);
}

function removeItem(task) {
  console.log(task);
  parentNode = task.parentNode;
  console.log(parentNode);
  parentNode.remove();
}
