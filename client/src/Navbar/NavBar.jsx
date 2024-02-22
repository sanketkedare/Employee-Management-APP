import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-[70px] w-[100vw] bg-yellow-500 flex justify-between items-center">
      <h1 className="font-bold lg:text-xl  p-4">Employee Management App</h1>

      {/* Navigation Buttons */}
      <div className="flex justify-around px-2">
       

        <Link to={"/"}>
          <button className="lg:w-[100px] bg-red-500 rounded-xl p-3 font-bold shadow-xl">
            Home
          </button>
        </Link>

        <Link to={"/create"}>
          <button className="lg:w-[100px] bg-red-500 rounded-xl p-3 font-bold shadow-xl mx-2">
            Create
          </button>
        </Link>


      </div>
    </div>
  );
};

export default NavBar;
