const express = require('express');
const employeeRoute = require('./Controller/EmployeeRoutes');
const cors = require('cors');

const app = express(); // Creating Server

//Parsing Recieved Request in JSON
app.use(express.json());
app.use(cors());

app.use("/api/employee", employeeRoute)

module.exports = app;

