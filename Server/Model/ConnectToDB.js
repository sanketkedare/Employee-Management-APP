const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/React-Node-APP";

const connectToDB = async() => 
{
  await mongoose
    .connect(DB_URL)
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