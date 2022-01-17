const { response } = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const verifyJWT = async (req, res = response, next) => {
  const authorization = req.header("Authorization");
  const token = authorization.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorizated" });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(uid)
      .where(User.getActiveClause());

    if (!user) {
      return res.status(401).json({ message: "Unauthorizated" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorizated" });
  }
}

module.exports = {
  verifyJWT
}
