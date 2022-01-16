const bcryptjs = require("bcryptjs");
const { response } = require("express");
const { jwtGenerator } = require("../helpers/jwt-generator");

const User = require("../models/user");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email })
    .where(User.getActiveClause());

  if (!user) {
    return res.status(400).json({ message: "credentials are incorrect" });
  }

  const isValid = bcryptjs.compareSync(password, user.password);
  if (!isValid) {
    return res.status(400).json({ message: "credentials are incorrect" });
  }

  const token = await jwtGenerator(user.id);

  res.json({
    message: "auth login from controller",
    user, token
  });
}

module.exports = {
  login
}
