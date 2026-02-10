const clickerCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

cookieImg.onclick = function () {
  if (Number(clickerCounter.textContent) % 2 == 0) {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    cookieImg.width = 250;
  } else {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    cookieImg.width = 200;
  }
};
