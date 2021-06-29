function autocomplete(request, response) {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify("Adan"));
}

module.exports = autocomplete;
