const Role = require("../models/role");

const isRoleFromDB = async (role = "") => {
  const isValid = await Role.findOne({ role });

  if (!isValid) {
    throw new Error(`Role ${ role } is not in DB`);
  }
}

module.exports = {
  isRoleFromDB
}
