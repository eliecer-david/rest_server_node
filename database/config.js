const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB connection loaded successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Error loading DB connection");
  }
}

module.exports = {
  dbConnection
}
