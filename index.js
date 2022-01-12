const http = require("http");
const app = require("./app");

const port = process.env.PORT || 9100;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on port ${port}`));
