const popup = document.getElementById("subscribe-modal");

if (!document.cookie.includes("subscribed")) {
  popup.classList.add("modal_active");

  const closeButton = document.getElementsByClassName("modal__close")[0];

  closeButton.addEventListener("click", function (event) {
    popup.classList.remove("modal_active");
    document.cookie = "subscribed=true; Expires=Sat, 28 Mar 2026 12:00:00 GMT;";
  });
}

