import NavigationSvg from "@/app/component/icon/NavigationSvg";
import React from "react";

const MessageInput = () => {
  return (
    <div className="fixed bottom-5 flex p-3 border-2 border-AuroMetalSaurus-100 rounded-full items-center justify-center text-AuroMetalSaurus-400 cursor-pointer">
      <input
        type="text"
        placeholder="Message"
        className="outline-none bg-transparent text-sm pl-3"
      />
      <NavigationSvg />
    </div>
  );
};

export default MessageInput;
