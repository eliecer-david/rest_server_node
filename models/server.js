const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {

  constructor(port) {
    this.app = express();
    this.port = port;

    this.usersPath = "/api/users";
    this.authPath = "/api/auth";

    this.loadDBConnection();

    this.registerMiddleware();
    this.registerRoutes();
  }

  async loadDBConnection() {
    await dbConnection();
  }

  registerMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  registerRoutes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usersPath, require("../routes/users"));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
