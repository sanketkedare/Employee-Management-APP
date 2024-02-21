const express = require('express');
const employeeRoute = require('./Controller/EmployeeRoutes');

const app = express(); // Creating Server

//Parsing Recieved Request in JSON
app.use(express.json());


app.use("/api/employee", employeeRoute)

module.exports = app;

