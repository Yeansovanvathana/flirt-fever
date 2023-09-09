import { getMatching } from "@/service/api/matching";
import { useAuth } from "@/service/auth/auth";
import { get } from "http";
import React, { use, useEffect } from "react";
import { getCookie } from "cookies-next";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3001");

const Chat = () => {
  const token: string = getCookie("accessToken") as string;

  useEffect(() => {
    const getMatchingData = async () => {
      try {
        const res = await getMatching(token);
        const data = await res.data;
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getMatchingData();
  }, []);

  return (
    <div className="px-2 max-auto w-screen">
      <div className="mx-auto max-w-screen-sm px-4 ">
        <div className="flex w-full justify-between cursor-pointer hover:bg-AuroMetalSaurus-100 p-2">
          <div className="flex items-center space-x-5">
            <button className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/profile.png"
                alt=""
                className="object-cover rounded-full w-12 h-12"
              />
            </button>
            <div className="text-base text-AuroMetalSaurus-800">
              <h1 className="font-medium">Vathana</h1>
              <p>How are you?</p>
            </div>
          </div>

          <span className="text-xs text-AuroMetalSaurus-800 flex items-end">
            17:02
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
function GetData() {
  throw new Error("Function not implemented.");
}
