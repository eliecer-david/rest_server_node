const { response } = require("express");

const login = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    message: "auth login from controller",
    email, password
  });
}

module.exports = {
  login
}
