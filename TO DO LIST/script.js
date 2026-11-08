// Select elements using DOM methods
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");

// Function to add a task
function addTask() {
  const text = taskInput.value.trim();

  // Prevent empty tasks
  if (text === "") {
    error.textContent = "Please enter a task!";
    return;
  }
  error.textContent = "";

  // Create list item
  const li = document.createElement("li");

  // Task text: click to mark completed
  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

// Click the Add Task button
addBtn.addEventListener("click", addTask);

// Pressing Enter also adds the task
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});