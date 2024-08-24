import React from "react";
import Navbar from "./components/navbar";
import ChatsList from "./components/chatsList";

const App = () => {
  return (
    <div className="bg-[#EFF6FC] justify-start items-center pl-4 h-screen w-screen flex flex-row">
      <Navbar />
      <ChatsList />
    </div>
  );
};

export default App;
