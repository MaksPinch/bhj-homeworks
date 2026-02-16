let divTab = document.getElementsByClassName("tab");
let tabsArr = Array.from(divTab);

let divContent = document.getElementsByClassName("tab__content");
let contentArr = Array.from(divContent);

function toggle(element, content) {
  element.classList.add("tab_active");
  content.classList.add("tab__content_active");
}

for (let i = 0; i < tabsArr.length; i++) {
  tabsArr[i].addEventListener("click", function (event) {
    const currentActiveTab = document.querySelector(".tab_active");
    const currentActiveContent = document.querySelector(".tab__content_active");

    if (currentActiveTab) {
      currentActiveTab.classList.remove("tab_active");
    }
    if (currentActiveContent) {
      currentActiveContent.classList.remove("tab__content_active");
    }

    let relatedContent = contentArr[i];
    toggle(this, relatedContent);
  });
}
