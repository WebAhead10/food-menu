var search = document.getElementById("search");
const input = document.getElementById("input");
const datalist = document.getElementById("menu-list");
const output = document.querySelector("output");

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
        option.value = element.title;
        datalist.appendChild(option);
      });
      initListener(matches)
      
    }
    )
    .catch(error => {
      console.error(error);
      if (error.message === "404") {
          output.textContent = `⚠️ Couldn't find "${countryName}"`;
        } else {
          output.textContent = "⚠️ Something went wrong";
        }
    });
     
});


function initListener(data) {
  var new_element = search.cloneNode(true);
  search.parentNode.replaceChild(new_element, search);
  new_element.addEventListener("click", (event) => {
    console.log("data: " , data);
    var img = data[0].image;
    console.log(img)
    const imgs = document.getElementById("img");
    imgs.src = img;
    
  })
  search = new_element
}
