const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const usersGet = async (req, res = response) => {
  let { page = 1, limit = 5 } = req.query;

  page = Number(page);
  limit = Number(limit);
  const nroSkippedUsers = (page - 1) * limit;
  const query = { status: true };

  const users = await User.find(query)
    .skip(nroSkippedUsers)
    .limit(limit);

  const total = await User.countDocuments(query);

  res.json({
    message: "get users from controller",
    total,
    users,
    page, limit
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

const usersPut = async (req, res = response) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  const body = { name, email, role }
  if (password) {
    const salt = bcryptjs.genSaltSync();
    body.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, body);

  res.json({
    message: "put users from controller",
    user
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
