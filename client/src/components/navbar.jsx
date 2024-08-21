import React, { useState } from "react";
import { FaHome, FaBell, FaCog, FaComments, FaDoorOpen } from "react-icons/fa";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(""); // State to keep track of the active icon

  // Function to update the active icon
  const updateColorOnClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="h-screen w-[80px] bg-[#6E00FF] flex flex-col rounded-3xl items-center py-4">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="mb-[4rem] mt-2 rounded-full"
      />
      <ul className=" flex flex-col items-center w-full space-y-4 overflow-hidden">
        <li
          onClick={() => updateColorOnClick("home")}
          className={`w-full flex items-center justify-center h-[4rem] text-white transition-all duration-300 ${
            activeItem === "home"
              ? "border-r-4 rounded-sm border-yellow-400 bg-[#612DD1]"
              : ""
          } hover:bg-[#612DD1] hover:border-r-4 hover:border-yellow-400`}
        >
          <FaHome size={24} />
        </li>
        <li
          onClick={() => updateColorOnClick("comments")}
          className={`w-full flex items-center justify-center h-[4rem] text-white transition-all duration-300 ${
            activeItem === "comments"
              ? "border-r-4 rounded-sm border-yellow-400 bg-[#612DD1]"
              : ""
          } hover:bg-[#612DD1] hover:border-r-4 hover:border-yellow-400`}
        >
          <FaComments size={24} />
        </li>
        <li
          onClick={() => updateColorOnClick("bell")}
          className={`w-full flex items-center justify-center h-[4rem] text-white transition-all duration-300 ${
            activeItem === "bell"
              ? "border-r-4 rounded-sm border-yellow-400 bg-[#612DD1]"
              : ""
          } hover:bg-[#612DD1] hover:border-r-4 hover:border-yellow-400`}
        >
          <FaBell size={24} />
        </li>
        <li
          onClick={() => updateColorOnClick("cog")}
          className={`w-full flex items-center justify-center h-[4rem] text-white transition-all duration-300 ${
            activeItem === "cog"
              ? "border-r-4 rounded-sm border-yellow-400 bg-[#612DD1]"
              : ""
          } hover:bg-[#612DD1] hover:border-r-4 hover:border-yellow-400`}
        >
          <FaCog size={24} />
        </li>
        <li className="bottom-10 absolute text-white">
          <FaDoorOpen size={24} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
