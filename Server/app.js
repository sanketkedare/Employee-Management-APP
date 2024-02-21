const express = require('express');
const employee = require('./Controller/EmployeeRoutes');
const app = express(); // Creating Server

app.get('/', (req,res)=>
{
    res.status(200).json({"Message:":"App is Working Fine.."})
})

app.get("/employee", employee)




module.exports = app;

