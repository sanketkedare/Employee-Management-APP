const express = require("express");
const employeeRoute = express.Router();


employeeRoute.get("/",(req, res) => 
{
    res.status(200).json({"Massage":"Employee API working Fine...."})
})


module.exports = employeeRoute;