import React from "react";
import { FaSearch } from "react-icons/fa";

const searchbox = () => {
  return (
    <div className="flex items-center w-full max-w-[350px] min-w-[340px] mb-7  p-2 bg-white rounded-full shadow-md">
      <FaSearch className="ml-3 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="focus:outline-none flex-grow pl-3 text-gray-700 bg-transparent rounded-full"
      />
    </div>
  );
};

export default searchbox;
