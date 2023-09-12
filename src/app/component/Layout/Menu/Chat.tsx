import { getMatching } from "@/service/api/matching";
import React, { use, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
// import { io } from "socket.io-client";
// const socket = io("http://localhost:3001");
import { Conversation } from "@/utils/type";
import { useAuth } from "@/service/auth/auth";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { conversationsValue } from "@/service/recoil";

const Chat = () => {
  const { user } = useAuth();
  const token: string = getCookie("accessToken") as string;
  const [conversations, setConversations] = useRecoilState(conversationsValue);

  // console.log(user?.id);
  useEffect(() => {
    getMatching(token)
      .then(({ data }) => {
        setConversations(data);
        // console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const getDisplayUser = (conversation: Conversation) => {
    return conversation.toUser.id == user?.id
      ? conversation.fromUser
      : conversation.toUser;
  };

  return (
    <div className="px-2 max-auto w-screen">
      <div className="mx-auto max-w-screen-sm px-4 ">
        {conversations.map((conversation, idx) => (
          <Link
            href={`/chat/${conversation.id}`}
            className="flex w-full justify-between cursor-pointer hover:bg-AuroMetalSaurus-100 p-2"
            key={idx}
          >
            <div className="flex items-center space-x-5">
              <button className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={
                    getDisplayUser(conversation).profile_url ?? "/profile.png"
                  }
                  alt=""
                  className="object-cover rounded-full w-12 h-12"
                />
              </button>
              <div className="text-base text-AuroMetalSaurus-800">
                <h1 className="font-medium">
                  {getDisplayUser(conversation).username}
                </h1>
                <p className="text-sm">simple text</p>
              </div>
            </div>

            <span className="text-xs text-AuroMetalSaurus-800 flex items-end">
              17:02
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Chat;
