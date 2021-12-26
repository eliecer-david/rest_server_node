const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "get api"
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "post api"
  });
});

router.put("/", (req, res) => {
  res.json({
    message: "put api"
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "delete api"
  });
});

module.exports = router;
