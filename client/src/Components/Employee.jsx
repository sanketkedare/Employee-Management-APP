import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

const Employee = () => 
{
  const [data, setData] = useState([]);

  const getEmployee = async () => 
  {
    try 
    {
      const response = await axios.get("http://localhost:3001/api/employee");
      const employeJson = response.data;
      setData(employeJson);
    } 

    catch (error) 
    {
      console.error("Error fetching data:", error);
      setData([]); 
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div className="w-[90%] shadow-xl rounded-xl bg-gray-400 m-auto">
      {!data ? (
        <h1>Data is not available</h1>
      ) : (
        <div className="p-10 my-5 flex flex-wrap justify-center items-center h-full">
          {data.map((item) => (

            <div key={item._id} className="w-[250px] text-center bg-red-500 p-3 m-5 rounded-2xl">
                <CgProfile className="m-auto my-5"/>
                <h1 className="font-bold text-lg">{item.name}</h1>
                <h1>{item.post}</h1>
                <h1>{item.salary} $ </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Employee;
