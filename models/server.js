const express = require("express");
const cors = require("cors");

class Server {

  constructor(port) {
    this.app = express();
    this.port = port;

    this.usersPath = "/api/users";

    this.registerMiddleware();
    this.registerRoutes();
  }

  registerMiddleware() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  registerRoutes() {
    this.app.use(this.usersPath, require("../routes/users"));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${ this.port }`);
    });
  }
}

module.exports = Server;
