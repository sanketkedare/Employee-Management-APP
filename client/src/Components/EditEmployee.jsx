import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditEmployee = () => 
{
  const [data, setData] = useState({ name: "", post: "", salary: "" });
  const [submitted, setSubmitted] = useState(false);

  const { id } = useParams();

  const getEmployee = async () => 
  {
    const {data} = await axios.get(`http://localhost:3001/api/employee/${id}`);
    setData(data);
  };

  const setEmployeeHandler = (e) => 
  {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendDataToServer = async () => 
  {
    try 
    {
      await axios.delete(`http://localhost:3001/api/employee/${id}`);

      const emp = await axios.post(`http://localhost:3001/api/employee`, data);

      emp ? setSubmitted("Data Added Successfully...") : new Error();
    } 
    catch (error) 
    {
      console.log(error.message);
      setSubmitted("Something went wrong....");
    }
  };

  useEffect(() => {
    getEmployee();
  }, [id]);

  return (
    <div className="w-[90%] h-[80vh] overflow-y-auto shadow-xl rounded-xl bg-gray-400 m-auto mt-6 p-4 text-center ">
      <h1 className="text-center text-xl font-bold my-5">
        Edit Existing Employee
      </h1>

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
              value={data.name}
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
              value={data.post}
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
              value={data.salary}
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
            onClick={() => sendDataToServer()}
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

export default EditEmployee;
