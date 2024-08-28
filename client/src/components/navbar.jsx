import React, { useState } from "react";
import { FaHome, FaBell, FaCog, FaComments, FaDoorOpen } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ setLoggedIn }) => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false); // Update the state to reflect that the user has logged out
      localStorage.removeItem("loggedIn"); // Clear the logged-in status from localStorage
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const navItems = [
    { id: "home", icon: <FaHome size={24} /> },
    { id: "chats", icon: <FaComments size={24} /> },
    { id: "notification", icon: <FaBell size={24} /> },
    { id: "settings", icon: <FaCog size={24} /> },
  ];

  return (
    <div className="relative w-[60px] h-[38rem] mr-7 bg-[#6E00FF] flex flex-col rounded-3xl shadow-md shadow-[#79C5EF] items-center py-4">
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
        <li
          onClick={handleLogout}
          className="bottom-[80px] absolute text-white cursor-pointer"
        >
          <FaDoorOpen size={24} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
