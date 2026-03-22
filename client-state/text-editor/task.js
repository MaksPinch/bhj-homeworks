const textarea = document.getElementById("editor");

if (localStorage.getItem("savedText")) {
  textarea.value = localStorage.getItem("savedText");
}

textarea.addEventListener("input", function (event) {
  const currentValue = this.value;
  localStorage.setItem("savedText", currentValue);
});
