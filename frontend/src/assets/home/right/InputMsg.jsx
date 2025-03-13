import React from "react";
import { IoIosSend } from "react-icons/io";

const InputMsg = () => {
  return (
    <>
      <div className="flex text-center mt-3">
        <div className="pl-4 w-[88%] ">
          <input
            type="text"
            placeholder="Type here"
            className="input bg-slate-900 focus:ring-0 focus:outline-none w-full"
          />
        </div>

        <div className="flex items-center justify-center">
          <button className="border ml-2 w-20 h-full rounded-md flex items-center justify-center bg-green-700 hover:bg-green-800 duration-75">
            <IoIosSend className="text-2xl " />
          </button>
        </div>
      </div>
    </>
  );
};

export default InputMsg;
