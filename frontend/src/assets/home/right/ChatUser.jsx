import React from "react";

const ChatUser = () => {
  return (
    <>
      <div className=" h-[12vh] bg-gray-900 m-3 rounded-md hover:bg-gray-800 duration-75">
        <div className="flex space-x-3 m-5 pl-4 p-3">
          <div className="avatar avatar-online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <div>
            <h1 className="text-xl font-semibold">Madhusudan</h1>
            <span className="text-xs -mt-0.5 block">Online</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatUser;
