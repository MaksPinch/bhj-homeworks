const form = document.getElementById("tasks__form");
const input = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let title = input.value.trim();

  if (!title) {
    form.reset();
  }

  taskList.insertAdjacentHTML(
    "afterBegin",
    `
      <div class="task">
          <div class="task__title">${title}</div>
          <a href="#" class="task__remove">&times;</a>
      </div>
    `,
  );

  const link = document.querySelector(".task__remove");

  link.addEventListener("click", function(event) {
    event.preventDefault();

    this.closest(".task").remove();
  })

  form.reset();
});
