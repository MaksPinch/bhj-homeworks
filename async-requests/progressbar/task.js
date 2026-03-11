console.log("task.js started");
const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submission was started")

  progress.value = 0;

  const newForm = new FormData(event.currentTarget);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  });

  xhr.upload.addEventListener("load", function (event) {
    console.log("file in its entirety");
  });

  xhr.addEventListener("load", function (event) {
    console.log("process completed.");
  });

  xhr.send(newForm);
});
