// const span = document.getElementsByClassName("rotator__case");
// const len = span.length;

// // console.log(span[0].textContent);

// let cnt = 0;

// let interval = setInterval(() => {
//   let oldIndex = cnt;
//   if(cnt < len - 1) {
//     cnt++
//   } else {
//     cnt=0;
//   }
//   span[oldIndex].classList.remove("rotator__case_active");
//   span[cnt].classList.add("rotator__case_active");
// }, 1000);

const span = document.getElementsByClassName("rotator__case");
const len = span.length;
let cnt = 0;

while(true) {
  let timeOut = setTimeout(() => {
    if(cnt < len - 1) {
      cnt++;
    } else {
      cnt = 0;
    }
    let oldIndex = cnt;
    let currentColor = span[cnt].dataset.color;

    span[oldIndex].classList.remove("rotator__case_active");
    span[cnt].classList.add("rotator__case_active");
    span[cnt].style.color = currentColor;




  }, span[cnt].dataset.speed)
}
