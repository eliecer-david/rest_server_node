const { Router } = require("express");
const { check } = require("express-validator");

const { login } = require("../controllers/auth");
const { processValidations } = require("../middlewares/process-validations");

const router = Router();

router.post("/login", [
  check("email", "email is required").notEmpty(),
  check("password", "password is required").notEmpty(),
  processValidations
], login);

module.exports = router;
