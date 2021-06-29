const http = require("http");
const router = require("./router");

const server = http.createServer(router);

server.listen(3002, () => console.log(`Listening at http://localhost:3002`));

