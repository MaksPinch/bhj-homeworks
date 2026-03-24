const form = document.forms[0];
const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const span = document.getElementById("user_id");

const saved = localStorage.savedId;
if (saved) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  span.innerText = localStorage.savedId;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let newForm = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";

  xhr.addEventListener("load", function (event) {
    if (this.status >= 200 && this.status < 300) {
      const data = this.response;

      if (data.success) {
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        // welcome.innerText = `Добро пожаловать, пользователь ${data.user_id}`;
        span.innerText = data.user_id;
        localStorage.setItem("savedId", data.user_id);
      } else {
        alert("Неверный логин/пароль");
      }
    } else {
      alert("Ошибка:" + this.status);
    }
  });

  xhr.send(newForm);
});
