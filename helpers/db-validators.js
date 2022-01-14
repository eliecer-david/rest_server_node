const Role = require("../models/role");
const User = require("../models/user");

const isRoleFromDB = async (role = "") => {
  const isValid = await Role.findOne({ role });

  if (!isValid) {
    throw new Error(`role ${ role } is not in DB`);
  }
}

const uniqueEmail = async (email = "") => {
  const isUsed = await User.findOne({ email });

  if (isUsed) {
    throw new Error(`email ${ email } is already being used`);
  }
}

const isUserIdFromDB = async (id = "") => {
  const exists = await User.findById(id);

  if (!exists) {
    throw new Error(`user ${ id } does not exist`);
  }
}

module.exports = {
  isRoleFromDB,
  uniqueEmail,
  isUserIdFromDB
}
