const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const autocomplete = require("./handlers/autocomplete");

function router(request, response) {
  const url = request.url;
  console.log(url);
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/autocomplete") {
    autocomplete(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
