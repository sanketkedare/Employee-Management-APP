const express = require("express");
const EmployeeModel = require("../Model/EmplyeeSchema");
const employeeRoute = express.Router("/");


// Getting All Employee Data
employeeRoute.get("/", async (req, res) => {
  try {
    const emp = await EmployeeModel.find({}, { __v: 0 });
    res.status(200).json(emp);
  } catch (err) 
  {
    res.status(500).json({ Massage: err.message });
  }
});


// Getting Employee Data by ID
employeeRoute.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const emp = await EmployeeModel.findById(id, { __v: 0 });
    res.status(200).json(emp);
  } catch (err) {
    res.status(500).json({ Massage: err.message });
  }
});


// Creating Employee or Employees
employeeRoute.post("/", async (req, res) => {
  const emp = req.body;
  try {
    const newEmpl = await EmployeeModel.create(emp);
    newEmpl
      ? res.status(200).json(newEmpl)
      : new Error("Employee creation failed");
  } catch (err) {
    res.status(400).json({ Massage: err.message });
  }
});



// Updating Existing Employee
employeeRoute.put("/:id", async (req, res) => {
  const employeeId = req.params.employeeId;
  const updatedData = req.body;

  try {
    const updatedEmployee = await EmployeeModel.findOneAndUpdate(
      { _id: employeeId },
      updatedData,
      { new: true }
    );

    updatedEmployee
      ? res.status(200).json(updatedEmployee)
      : new Error("Employee not found or update failed");
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
});


// Deleting Specific Employee by Id
employeeRoute.delete("/:employeeId", async (req, res) => {
  const employeeId = req.params.employeeId;

  try {
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(employeeId);
    deletedEmployee
      ? res
          .status(200)
          .json({ Message: "Employee deleted successfully", deletedEmployee })
      : new Error("Employee not found or delete failed");
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
});




module.exports = employeeRoute;
