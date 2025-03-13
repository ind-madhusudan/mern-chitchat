import React from "react";
import ChatUser from "./ChatUser";
import ImportMsgs from "./ImportMsgs";
import InputMsg from "./InputMsg";

const Right = () => {
  return (
    <div className="w-[70%] border-l border-white text-white bg-slate-950 ">

      <ChatUser />
      <ImportMsgs />
      <InputMsg />
    </div>
  );
};

export default Right;
