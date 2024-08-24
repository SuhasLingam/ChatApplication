import React from "react";
import Navbar from "./components/navbar";
import ChatsList from "./components/chatsList";

const App = () => {
  return (
    <div className="bg-[#EFF6FC] flex flex-row">
      <Navbar />
      <ChatsList />
    </div>
  );
};

export default App;
