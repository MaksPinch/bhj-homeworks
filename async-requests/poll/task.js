const question = document.querySelector("#poll__title");
const answers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("readystatechange", function (event) {
  if (this.readyState === this.DONE && this.status === 200) {
    const response = this.response;
    const data = response.data;
    const title = data.title;
    const listOfAnswers = data.answers;

    question.insertAdjacentText("afterbegin", title);
    for (const buttonText of listOfAnswers) {
      answers.insertAdjacentHTML(
        "beforeend",
        `
                    <button class="poll__answer">
                        ${buttonText}
                    </button>
                `,
      );
    }

    const allButtons = Array.from(
      answers.getElementsByClassName("poll__answer"),
    );
    allButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        alert("Спасибо, ваш голос засчитан!");
      });
    });
  }
});
