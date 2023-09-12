import { useAuth } from "@/service/auth/auth";
import { messageValue } from "@/service/recoil";
import React from "react";
import { useRecoilValue } from "recoil";

const MessageContainer = () => {
  const message = useRecoilValue(messageValue);
  const { user } = useAuth();

  return (
    <div className="h-[75%] my-5 border-[1px] border-BrinkPink-500 p-4 flex flex-col-reverse overflow-y-scroll">
      {message.map((message, idx) => (
        <div
          className={`${
            user?.id === message.author.id ? "flex justify-end" : ""
          }`}
          key={idx}
        >
          <div className="flex items-center space-x-3 p-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={message.author.profile_url ?? "/profile.png"}
                alt=""
                className={`object-cover rounded-full w-8 h-8 ${
                  user?.id === message.author.id ? "hidden" : ""
                }`}
              />
            </div>
            <div
              className={`text-xs text-AuroMetalSaurus-800 p-2 px-3 rounded-full ${
                user?.id === message.author.id
                  ? "bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 flex items-end"
                  : "bg-AuroMetalSaurus-50"
              }`}
            >
              <h1
                className={`${
                  user?.id === message.author.id
                    ? "text-white"
                    : "text-AuroMetalSaurus-900"
                }`}
              >
                {message.content}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageContainer;
