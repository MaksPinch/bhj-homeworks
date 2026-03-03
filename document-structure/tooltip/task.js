const links = Array.from(document.getElementsByClassName("has-tooltip"));

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const activeToolTip = document.querySelector(".tooltip_active");

    if (activeToolTip) {
      const isSame = activeToolTip.textContent === this.title;
      activeToolTip.remove();

      if (isSame) {
        return;
      }
    }

    let divTip = document.createElement("div");
    divTip.textContent = this.title;
    divTip.classList.add("tooltip", "tooltip_active");
``
    const { left, bottom } = this.getBoundingClientRect();
    divTip.style.left = left + "px";
    divTip.style.top = bottom + "px";

    this.insertAdjacentElement("afterEnd", divTip);
  });
});
