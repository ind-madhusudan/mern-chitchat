import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Logout = () => {
  return (
    <>
      <div className="w-[5%] border border-white text-white bg-slate-950 flex flex-col justify-end">
        <div>
          <button className="p-2 m-2 text-3xl hover:bg-gray-600 rounded-full  ">
            <RiLogoutBoxRLine className="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Logout;
