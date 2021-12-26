require("dotenv").config();

const Server = require("./models/server");

const PORT = process.env.PORT || 3000;
const server = new Server(PORT);

server.start();
