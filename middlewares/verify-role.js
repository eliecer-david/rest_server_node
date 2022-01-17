const { response } = require("express")

const isAdmin = (req, res = response, next) => {
  const user = req.user;
  if (!user) {
    return res.status(403).json({ message: "Forbidden" });
  }

  if (user.role !== "ADMIN_ROLE") {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
}

module.exports = {
  isAdmin
}
