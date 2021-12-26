const express = require("express");
const cors = require("cors");

class Server {

  constructor(port) {
    this.app = express();
    this.port = port;

    this.registerMiddleware();
    this.registerRoutes();
  }

  registerMiddleware() {
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  registerRoutes() {
    this.app.get("/api", (req, res) => {
      res.json({
        message: "get api"
      });
    });

    this.app.post("/api", (req, res) => {
      res.json({
        message: "post api"
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        message: "put api"
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        message: "delete api"
      });
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${ this.port }`);
    });
  }
}

module.exports = Server;
