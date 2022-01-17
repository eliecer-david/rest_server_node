const { Router } = require("express");
const { check } = require("express-validator");

const { usersGet,
        usersPost,
        usersPut,
        usersDelete } = require("../controllers/users");
const { isRoleFromDB, uniqueEmail, isUserIdFromDB } = require("../helpers/db-validators");
const { processValidations } = require("../middlewares/process-validations");
const { verifyJWT } = require("../middlewares/verify-jwt");
const { isAdmin } = require("../middlewares/verify-role");

const router = Router();

router.get("/", [
  verifyJWT,
  check("page", "page should be an integer").isInt(),
  check("limit", "limit should be an integer").isInt(),
  processValidations
], usersGet);

router.post("/", [
  verifyJWT,
  isAdmin,
  check("name", "name is required").not().isEmpty(),
  check("email", "email is invalid").isEmail(),
  check("email").custom(value => uniqueEmail(value)),
  check("password", "password must be more than 6 letters").isLength({ min: 6}),
  check("role").custom(isRoleFromDB),
  processValidations
], usersPost);

router.put("/:id", [
  verifyJWT,
  isAdmin,
  check("id", "id is not valid").isMongoId(),
  check("id").custom(isUserIdFromDB),
  check("name", "name is required").not().isEmpty(),
  check("email", "email is invalid").isEmail(),
  check("email").custom((email, { req }) => uniqueEmail(email, req.params.id)),
  check("role").custom(isRoleFromDB),
  processValidations
], usersPut);

router.delete("/:id", [
  verifyJWT,
  isAdmin,
  check("id", "id is not valid").isMongoId(),
  check("id").custom(isUserIdFromDB),
  processValidations
], usersDelete);

module.exports = router;
