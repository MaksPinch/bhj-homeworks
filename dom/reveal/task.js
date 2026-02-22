let divReveal = document.getElementsByClassName("reveal");
let revealArr = Array.from(divReveal);

function isBlockIsVisible(element) {
  let positionTop = element.getBoundingClientRect().top;
  let positionBottom = element.getBoundingClientRect().bottom;
  let innerHeight = window.innerHeight;
  if (positionTop < innerHeight && positionBottom > 0) {
    return true;
  } else {
    return false;
  }
}

function checkReveal() {
    revealArr.forEach(el => {
        if(isBlockIsVisible(el)) {
            el.classList.add("reveal_active");
        }
    })
}

window.addEventListener("scroll", checkReveal);


