import React from "react";
import Chats from "./chats";
import Searchbox from "./searchbox";

const ChatsList = () => {
  return (
    <>
      <div className=" rounded-3xl overflow-scroll overflow-x-hidden scrollbar-hide  max-w-[420px] min-w-[420px] p-7 flex  flex-col h-screen border-2">
        <Searchbox />
        <h1 className="text-[#303030] font-bold text-2xl">People</h1>
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
        <Chats />
      </div>
    </>
  );
};

export default ChatsList;
