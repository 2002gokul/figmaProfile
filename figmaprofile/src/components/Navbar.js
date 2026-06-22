import React from "react";
import companylogo from "../assets/companylogo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-5 flex items-center justify-between w-[100]">
      <div className="flex items-center px-10">
        <img src={companylogo} alt="company logo" className="w-[116px] h-[50px] " />
      </div>
      <ul className="flex space-x-10 text-gray-700 font-medium px-2 ">
        <li className="hover:text-blue-500 transition duration-300  cursor-pointer">Orders</li>
        <li>|</li>
        <li className="hover:text-blue-500 cursor-pointer">Holdings</li>
        <li>|</li>
        <li className="hover:text-blue-500 cursor-pointer">Positions</li>
        <li className="hover:text-blue-500 cursor-pointer">
          First Name / Last Name
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;