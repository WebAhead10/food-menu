var search = document.getElementById("search");
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
        option.value = element.title;
        
        datalist.appendChild(option);
      });
      initListener(matches)
    }
    )
    .catch(console.log)
});


function initListener(data) {
  var new_element = search.cloneNode(true);
  search.parentNode.replaceChild(new_element, search);
  new_element.addEventListener("click", (event) => {
    console.log("data: " , data);
    var img = data[0].image;
    console.log(img)
    
  })
  search = new_element
}
