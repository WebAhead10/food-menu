const search = document.getElementById("search");
const input = document.getElementById("input");

input.addEventListener("input", () => {
  fetch("autocomplete")
    .then((response) => response.json())
    .then(console.log);
});
