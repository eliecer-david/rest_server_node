const jwt = require("jsonwebtoken");

const jwtGenerator = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "4h"
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject("jwt error");
      } else {
        resolve(token);
      }
    });
  });
}

module.exports = {
  jwtGenerator
}
