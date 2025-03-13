import React from "react";

const User = () => {
  return (
    <div className="flex p-4 hover:bg-gray-900 duration-75 rounded-lg">
      <div className="avatar avatar-online">
        <div className="w-12 h-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="pl-5">
          <h1 className="font-bold">Madhusudan Mahato</h1>
          <span>xyz@gmail.com</span>
        </div>
    </div>
  );
};

export default User;
