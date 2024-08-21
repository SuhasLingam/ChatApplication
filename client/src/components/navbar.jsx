import React from "react";
import { FaHome, FaBell, FaCog, FaComments } from "react-icons/fa";

const navbar = () => {
  return (
    <div className="h-screen w-[80px] bg-purple-600 flex flex-col items-center py-4">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="mb-8 rounded-full"
      />
      <ul className="flex flex-col space-y-6">
        <li className="text-white">
          <FaHome size={24} />
        </li>
        <li className="text-white">
          <FaComments size={24} />
        </li>
        <li className="text-white">
          <FaBell size={24} />
        </li>
        <li className="text-white">
          <FaCog size={24} />
        </li>
      </ul>
    </div>
  );
};

export default navbar;
