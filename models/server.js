const express = require("express");

class Server {

  constructor(port) {
    this.app = express();
    this.port = port;

    this.registerRoutes();
  }

  registerRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Hello world");
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${ this.port }`);
    });
  }
}

module.exports = Server;
