function autocomplete(request, response) {

  let body = "";
  // callback runs every time the stream has the next bit of data
  request.on("data", chunk => {
    body += chunk;
  });
  // callback runs when request finishes and we have all the data
  request.on("end", () => {
    const data = JSON.parse(body)
    console.log(data)


    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Thank you for submitting</h1>");
  });

}

module.exports = autocomplete;
