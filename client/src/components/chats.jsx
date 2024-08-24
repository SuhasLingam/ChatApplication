import React from "react";

const chats = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h4 className="font-bold text-black">Suhas</h4>
          <p className="text-sm text-gray-500 max-w-[120px] overflow-hidden max-h-[20px]">
            April fool’s dayyyyyyyyyyyyyyyyyyyyyyyyyyyy
          </p>
        </div>
      </div>

      <div className="space-y-1 text-right">
        <p className="text-sm text-gray-500">Today, 9.52pm</p>
        <p>Tick</p>
      </div>
    </div>
  );
};

export default chats;
