import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({ name: "", post: "", salary: " " });
  const [submitted, setSubmitted] = useState(false);

  const setEmployeeHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = () => {
    sendDataToServer();
    setEmployee({ name: "", post: "", salary: " " });
  };

  const sendDataToServer = async () => {
    try {
      const emp = await axios.post(
        "http://localhost:3001/api/employee",
        employee
      );
      emp ? setSubmitted("Data Added Successfully...") : new Error();
    } catch (error) {
      console.log(error.message);
      setSubmitted("Some went wrong....");
    }
  };

  return (
    <div className="w-[90%] h-[80vh] overflow-y-auto shadow-xl rounded-xl bg-gray-400 m-auto mt-6 p-4 text-center ">
      <h1 className="text-center text-xl font-bold my-5">Add New Employee</h1>

      <div className="flex justify-center bg-grey-100 shadow-2xl rounded-2xl py-10 border border-black w-[50%] m-auto">
        <div className="w-[80%] mt-10">
          <div className="mb-4 flex items-center justify-center">
            <label
              htmlFor="name"
              className="w-[100px] text-black text-sm text-left font-bold mb-2"
            >
              Name:
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={employee.name}
              onChange={setEmployeeHandler}
              className="w-[80%] px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex items-center justify-center">
            <label
              htmlFor="post"
              className="w-[100px] text-black text-sm text-left font-bold mb-2"
            >
              Post:
            </label>
            <input
              type="text"
              id="post"
              name="post"
              value={employee.post}
              onChange={setEmployeeHandler}
              className="w-[80%] px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4 flex items-center justify-center">
            <label
              htmlFor="salary"
              className="w-[100px] text-black text-sm text-left font-bold mb-2"
            >
              Salary:
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={employee.salary}
              onChange={setEmployeeHandler}
              className="w-[80%]  px-3 py-2 border rounded-md"
              required
            />
          </div>

          {/* Submit button */}
          <Link to={"/"}>
            <button
              type="submit"
              className="bg-sky-700 w-[100%] text-white my-6 px-4 py-2 rounded-md font-bold text-lg border border-black hover:bg-red-600"
              onClick={() => submitHandler()}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
      {submitted && <h1>{submitted}</h1>}
    </div>
  );
};

export default CreateEmployee;
