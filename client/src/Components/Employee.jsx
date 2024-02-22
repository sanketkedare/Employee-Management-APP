import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const Employee = () => {
  const [data, setData] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);

  const getEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/employee");
      const employeJson = response.data;
      employeJson.sort((a,b)=> b.salary - a.salary );
      console.log(employeJson)
      await calculateSalary();
      setData(employeJson);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  const calculateSalary = async () => {
    let salary = 0;
    data.forEach((emp) => (salary += emp.salary));
    setTotalSalary(salary);
  };

  const deleteHandeler = async (id, name) => {
    await axios.delete(`http://localhost:3001/api/employee/${id}`);
    alert(`'${name}' Deleted Successfully ...`);
    getEmployee();
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div>
      <div className="w-[90%] h-[80vh] shadow-xl rounded-xl bg-gray-400 m-auto mt-6">
        {!data ? (
          <h1>Data is not available</h1>
        ) : (
          <div className="p-4 flex flex-wrap justify-center items-center lg:h-full h-[80vh] overflow-y-auto">
            {data.map((item) => (
              <div
                key={item._id}
                className="w-[250px] text-center bg-red-500 p-3 m-5 rounded-2xl"
              >
                <div className="flex justify-between">
                  <Link to={`/edit/${item._id}`}>
                    <MdEdit className="border border-black rounded-2xl p-1 w-[20px] h-[20px]" />{" "}
                  </Link>

                  <MdDeleteForever
                    className="border border-black rounded-2xl"
                    onClick={() => deleteHandeler(item._id, item.name)}
                  />
                </div>
                <CgProfile className="m-auto my-2" />
                <h1 className="font-bold text-lg">{item.name}</h1>
                <h1>{item.post}</h1>
                <h1>{item.salary} $ </h1>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center my-3">Total Salary : {totalSalary} $</div>
    </div>
  );
};

export default Employee;
