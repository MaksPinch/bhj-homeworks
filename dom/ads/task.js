const p = document.querySelector(".card").firstElementChild;
const pContent = p.childNodes[0];

const span = document.getElementsByClassName("rotator__case");
const len = span.length;

// console.log(span[0].textContent);

let cnt = 0;

let interval = setInterval(() => {
  let oldIndex = cnt;
  if(cnt < len - 1) {
    cnt++
  } else {
    cnt=0;
  }
  span[oldIndex].classList.remove("rotator__case_active");
  span[cnt].classList.add("rotator__case_active");
}, 1000);


