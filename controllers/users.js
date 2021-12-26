const { response } = require("express");

const usersGet = (req, res = response) => {
  res.json({
    message: "get users from controller"
  });
}

const usersPost = (req, res = response) => {
  const body = req.body;

  res.json({
    message: "post users from controller",
    body
  });
}

const usersPut = (req, res = response) => {
  res.json({
    message: "put users from controller"
  });
}

const usersDelete = (req, res = response) => {
  res.json({
    message: "delete users from controller"
  });
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete
}
