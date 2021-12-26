const { response } = require("express");

const usersGet = (req, res = response) => {
  const { name, page = 1, limit = 10 } = req.query;

  res.json({
    message: "get users from controller",
    name, page, limit
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
