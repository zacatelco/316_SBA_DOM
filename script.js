const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = document.getElementById("task");
  console.log(task.value);

  const categories = document.getElementById("categories");
  console.log(categories.value);

  const date = document.getElementById("date");
  console.log(date.value);

  const time = document.getElementById("time");
  console.log(time.value);

  const isChecked = checkbox.checked;
  console.log(isChecked ? "Checkbox is checked" : "Checkbox is unchecked");

  let newH2 = document.createElement("h2");
  newH2.innerHTML = task.value;

  let newH3 = document.createElement("h3");
  newH3.innerHTML = isChecked ? "Important" : "Not Important";

  let newP = document.createElement("p");
  newP.innerHTML = `Date: ${date.value}, Time: ${time.value}`;

  let button = document.createElement("button");
  button.id = "button";
  button.innerHTML = "Delete Task";
  button.addEventListener("click", () => newDiv.remove());

  let newDiv = document.createElement("div");
  newDiv.id = "newDiv";
  newDiv.append(newH2);
  newDiv.append(newH3);
  newDiv.append(newP);
  newDiv.append(button);
  main.prepend(newDiv);
  task.value = "";
  categories.value = "";
  date.value = "";
  time.value = "";
  checkbox.checked = false;
});
