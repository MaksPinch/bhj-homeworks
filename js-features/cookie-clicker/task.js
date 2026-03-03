const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed");
const time = new Date();
let timeBeforeClick = time.getSeconds();

cookieImg.onclick = function () {
  if (Number(clickerCounter.textContent) % 2 == 0) {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    let timeAfterClick = time.getSeconds();
    clickerSpeed.textContent = 1 / (timeBeforeClick - timeAfterClick);
    timeBeforeClick = timeAfterClick;
    cookieImg.width = 250;
  } else {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    let timeAfterClick = time.getSeconds();
    clickerSpeed.textContent = 1 / (timeBeforeClick - timeAfterClick);
    timeBeforeClick = timeAfterClick;
    cookieImg.width = 200;
  }
};
