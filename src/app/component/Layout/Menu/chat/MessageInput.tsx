import NavigationSvg from "@/app/component/icon/NavigationSvg";
import React from "react";

const MessageInput = () => {
  return (
    <div className="flex items-center justify-center p-3 border-2 border-AuroMetalSaurus-100 rounded-full text-AuroMetalSaurus-400 cursor-pointer">
      <input
        type="text"
        placeholder="Message"
        className="outline-none bg-transparent text-sm pl-3 w-full"
      />
      <NavigationSvg />
    </div>
  );
};

export default MessageInput;
