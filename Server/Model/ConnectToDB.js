const mongoose = require("mongoose");
require('dotenv').config();


const connectToDB = async() => 
{
  const DB_URL = "mongodb://localhost:27017/React-Node-APP"

  await mongoose
    .connect(DB_URL || process.env.DB_URL)
    .then(() => 
    {
      console.log("Connected to DB");
    })
    .catch((err) => 
    {
      console.log("Error connecting to Database", err.message);
    });
};

module.exports = connectToDB;