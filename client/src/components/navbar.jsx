import React, { useState } from "react";
import { FaHome, FaBell, FaCog, FaComments, FaDoorOpen } from "react-icons/fa";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const navItems = [
    { id: "home", icon: <FaHome size={24} /> },
    { id: "chats", icon: <FaComments size={24} /> },
    { id: "notification", icon: <FaBell size={24} /> },
    { id: "settings", icon: <FaCog size={24} /> },
  ];

  return (
    <div className="h-screen w-[80px] bg-[#6E00FF] flex flex-col rounded-3xl items-center py-4">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="mb-[4rem] mt-2 rounded-full"
      />
      <ul className="flex flex-col items-center w-full space-y-4">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`w-full flex items-center justify-center h-[4rem] text-white transition-all duration-300 ${
              activeItem === item.id
                ? "border-r-4 rounded-sm border-yellow-400 bg-[#612DD1]"
                : ""
            } hover:bg-[#612DD1] hover:border-r-4 hover:border-yellow-400`}
          >
            {item.icon}
          </li>
        ))}
        <li className="bottom-10 absolute text-white">
          <FaDoorOpen size={24} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
