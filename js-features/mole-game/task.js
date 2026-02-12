function getHole(index) {
  let holeIndex = `hole${index}`;
  let rightHole = document.getElementById(holeIndex);
  return rightHole;
}

let statusBarDead = document.getElementById("dead");
let statusBarLost = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
        statusBarDead.textContent = Number(statusBarDead.textContent) + 1;
        if(Number(statusBarDead.textContent) == 10) {
            statusBarDead.textContent = 0;
            statusBarLost.textContent = 0;
            alert("Победа!");
        }
    } else {
        statusBarLost.textContent = Number(statusBarLost.textContent) + 1;
        if(Number(statusBarLost.textContent) == 5) {
            statusBarDead.textContent = 0;
            statusBarLost.textContent = 0;
            alert("Поражение!");
        }
    }
  };
}
