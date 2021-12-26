const express = require("express");

class Server {

  constructor(port) {
    this.app = express();
    this.port = port;

    this.registerMiddleware();
    this.registerRoutes();
  }

  registerMiddleware() {
    this.app.use(express.static("public"));
  }

  registerRoutes() {
    this.app.get("/api", (req, res) => {
      res.send("index api");
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${ this.port }`);
    });
  }
}

module.exports = Server;
