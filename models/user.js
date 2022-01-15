const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [ true, "name is required" ]
  },
  email: {
    type: String,
    required: [ true, "email is required" ],
    unique: true
  },
  password: {
    type: String,
    required: [ true, "password is required" ]
  },
  img: {
    type: String
  },
  role: {
    type: String,
    required: true,
    enum: [ "ADMIN_ROLE", "USER_ROLE" ]
  },
  status: {
    type: Boolean,
    default: true
  },
  fromGoogle: {
    type: Boolean,
    default: false
  }
});

UserSchema.static("getActiveClause", function () {
  return { status: true };
});

module.exports = model("User", UserSchema);
