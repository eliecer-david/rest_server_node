const { Router } = require("express");
const { check } = require("express-validator");

const { usersGet,
        usersPost,
        usersPut,
        usersDelete } = require("../controllers/users");
const { processValidations } = require("../middlewares/process-validations");
const Role = require("../models/role");

const router = Router();

router.get("/", usersGet);

router.post("/", [
  check("name", "name is required").not().isEmpty(),
  check("email", "email is invalid").isEmail(),
  check("password", "password must be more than 6 letters").isLength({ min: 6}),
  check("role").custom(async (role = "") => {
    const isValid = await Role.findOne({ role });

    if (!isValid) {
      throw new Error(`Role ${ role } is not in DB`);
    }
  }),
  processValidations
], usersPost);

router.put("/:id", usersPut);

router.delete("/:id", usersDelete);

module.exports = router;
