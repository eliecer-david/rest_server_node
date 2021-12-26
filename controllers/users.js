const { response } = require("express");

const usersGet = (req, res = response) => {
  res.json({
    message: "get users from controller"
  });
}

const usersPost = (req, res = response) => {
  const { name, age } = req.body;

  res.json({
    message: "post users from controller",
    name, age
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
