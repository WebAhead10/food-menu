const search = document.getElementById("search");
const input = document.getElementById("input");
const datalist = document.getElementById("menu-list");

input.addEventListener("input", (event) => {
  fetch("/autocomplete", {
    method :"POST",
    body: JSON.stringify(event.target.value)
  })
    .then((response) => response.json())
    .then(matches => {
      datalist.innerHTML = "";
      matches.forEach(element => {
        const option = document.createElement("option");
        option.value = element;
        datalist.appendChild(option);
      });



    }



    )


    .catch(console.log)
});
