const express = require('express');
const app = express(); // Creating Server

app.get('/', (req,res)=>{
    res.status(200).json({"Message:":"App is Working Fine.."})
})




module.exports = app;

