const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("connected to db"))
    .catch((error) => {
      console.log("error in connection to db")
      console.error(error.message)
      process.exit(1)
    });
};

module.exports = dbConnect