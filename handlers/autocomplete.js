const menu = require("../data.json");

function autocomplete(request, response) {

  let body = "";
  // callback runs every time the stream has the next bit of data
  request.on("data", (chunk) => {
    body += chunk;
  });
  // callback runs when request finishes and we have all the data
  request.on("end", () => {
    const data = JSON.parse(body);
    let matches = menu.results.filter(({title}) => {
      const regex = new RegExp(`^${data}`, 'gi');
      return title.match(regex)
  });

  console.log(matches);
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(matches));
  });

}

module.exports = autocomplete;
