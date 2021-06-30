const search = document.getElementById("search");
const input = document.getElementById("input");

input.addEventListener("input", (event) => {
  fetch("/autocomplete", {
    method :"POST",
    body: JSON.stringify(event.target.value)
  })
    .then((response) => response.json())


    .catch(console.log)
});
