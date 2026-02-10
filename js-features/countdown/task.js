const timer = document.getElementById("timer");
let timerCount = Number(timer.textContent);

const intervalId = setInterval(() => {
    timerCount -= 1;

    timer.textContent = timerCount;

    if (timerCount <= 0) {
        clearInterval(intervalId); 
        alert("Вы победили в конкурсе!");
    }
}, 1000);
