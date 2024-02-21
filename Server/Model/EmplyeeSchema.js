const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    "name":{
        type : "string",
        required : true
    },
    "post":{
        type : "string",
        required : true
    },
    "sallary":{
        type : "number",
        required : true
    }

})


const EmployeeModel = mongoose.model("Employee", EmployeeSchema, "Employee");

module.exports = EmployeeModel;