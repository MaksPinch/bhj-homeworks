let dropDownValue = document.querySelector(".dropdown__value");
dropDownValue.addEventListener("click", function () {
  let dropDownList = document.querySelector(".dropdown__list");
  dropDownList.classList.toggle("dropdown__list_active");
});

function deny(event) {
  event.preventDefault();
}

function close(link) {
  let dropDownList = link.closest(".dropdown__list");
  dropDownList.classList.remove("dropdown__list_active");
}

function changeTheValue(link) {
  let divValue = document.querySelector(".dropdown__value");
  divValue.textContent = link.textContent;
}

let allLinks = document.getElementsByClassName("dropdown__link");
let allLinksArr = Array.from(allLinks);
for (let i = 0; i < allLinksArr.length; i++) {
  allLinksArr[i].addEventListener("click", deny);
  allLinksArr[i].addEventListener("click", function (event) {
    changeTheValue(this);
  });
  allLinksArr[i].addEventListener("click", function (event) {
    close(this);
  });
}
