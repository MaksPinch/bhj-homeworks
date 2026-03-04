const form = document.getElementById("tasks__form");
const input = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let newTask = input.value.trim();

  if (!newTask) {
    input.value = "";
    return;
  }

  let task = document.createElement("div");
  let taskTitle = document.createElement("div");
  let link = document.createElement("a");

  task.classList.add("task");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = newTask;
  link.setAttribute("href", "#");
  link.classList.add("task__remove");
  link.innerHTML = "&times;";

  task.append(taskTitle, link);

  link.addEventListener("click", function (event) {
    event.preventDefault();

    task.remove();
  });

  taskList.append(task);

  form.reset();
});
