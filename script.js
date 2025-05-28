// Get elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("please insert the task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle task complete
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.className = "deleteBtn";
  delBtn.addEventListener("click", function (e) {
    e.stopPropagation(); 
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";        
  input.focus();       
}

// Add button click event
addBtn.addEventListener("click", addTask);

// Enter key press event
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Focus input box on page load
window.onload = function () {
  input.focus();
};
