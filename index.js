console.log("It is working....");

//document.getElementById("form-submit").addEventListener("submit", createTask);

function createTask() {
  let task = document.getElementById("task").value;
  let taskItem = document.createElement("li");
  let taskItemText = document.createTextNode(task);
  taskItem.appendChild(taskItemText);
  console.log(taskItem);
  addTask(taskItem);
  document.getElementById("task").value = "";
}

function addTask(task) {
  let taskList = document.getElementById("task-list");
  taskList.appendChild(task);
}
