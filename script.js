const form = document.querySelector("form");
const main = document.querySelector("main");
const checkbox = document.getElementById("checkbox");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = document.getElementById("task").value;
  const isChecked = checkbox.checked;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const template = document.getElementById("task-template");
  const fragment = document.createDocumentFragment();
  const newTask = template.content.cloneNode(true); // Clone the template content

  // Set task details
  newTask.querySelector("h2").textContent = task;
  newTask.querySelector("h3").textContent = isChecked ? "Important" : "Not Important";
  newTask.querySelector("p").textContent = `Date: ${date}, Time: ${time}`;

  // Add event listener to delete button
  const deleteButton = newTask.querySelector("button");
  deleteButton.addEventListener("click", function () {
    const taskDiv = deleteButton.closest('.task'); // Get the closest task container
    taskDiv.remove(); // Remove the task div from the DOM

    // Remove from localStorage
    removeTaskFromLocalStorage(task);
  });

  fragment.appendChild(newTask);
  main.prepend(fragment); // Add the task to the DOM

  // Save task to localStorage
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.push({ task, isChecked, date, time });
  localStorage.setItem("tasks", JSON.stringify(storedTasks));

  // Clear form
  document.getElementById("task").value = "";
  document.getElementById("categories").selectedIndex = 0;
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  checkbox.checked = false;
});

// Load saved tasks from localStorage and display them on page load
document.addEventListener("DOMContentLoaded", function () {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  storedTasks.forEach(({ task, isChecked, date, time }) => {
    const template = document.getElementById("task-template");
    const fragment = document.createDocumentFragment();
    const newTask = template.content.cloneNode(true);

    // Set task details
    newTask.querySelector("h2").textContent = task;
    newTask.querySelector("h3").textContent = isChecked ? "Important" : "Not Important";
    newTask.querySelector("p").textContent = `Date: ${date}, Time: ${time}`;

    // Add event listener to delete button
    const deleteButton = newTask.querySelector("button");
    deleteButton.addEventListener("click", function () {
      const taskDiv = deleteButton.closest('.task'); // Get the closest task container
      taskDiv.remove(); // Remove the task div from the DOM

      // Remove from localStorage
      removeTaskFromLocalStorage(task);
    });

    fragment.appendChild(newTask);
    main.appendChild(fragment); // Add the task to the DOM
  });
});

// Function to remove task from localStorage
function removeTaskFromLocalStorage(task) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const updatedTasks = storedTasks.filter(storedTask => storedTask.task !== task); // Filter out the task
  localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update localStorage
}
