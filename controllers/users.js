const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const usersGet = (req, res = response) => {
  const { name, page = 1, limit = 10 } = req.query;

  res.json({
    message: "get users from controller",
    name, page, limit
  });
}

const usersPost = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, role });

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({
    message: "post users from controller",
    user
  });
}

const usersPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    message: "put users from controller",
    id
  });
}

const usersDelete = (req, res = response) => {
  const { id } = req.params;

  res.json({
    message: "delete users from controller",
    id
  });
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete
}
