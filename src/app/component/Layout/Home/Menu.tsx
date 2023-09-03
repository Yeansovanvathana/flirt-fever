"use client";

import React from "react";
import { activeTabMenu } from "@/service/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import HomeSvg from "../../icon/HomeSvg";
import PostSvg from "../../icon/PostSvg";
import ChatSvg from "../../icon/ChatSvg";
import NotificationSvg from "../../icon/NotificationSvg";
import ProfileSvg from "../../icon/ProfileSvg";
const Menu = () => {
  const [__, setActiveTab] = useRecoilState(activeTabMenu);
  const activeTab = useRecoilValue(activeTabMenu);

  const handleHomePage = () => {
    setActiveTab("homePage");
  };

  const handlePostPage = () => {
    setActiveTab("postPage");
  };

  const handleChatPage = () => {
    setActiveTab("chatPage");
  };

  const handleNotificationPage = () => {
    setActiveTab("notificationPage");
  };

  const handleProfilePage = () => {
    setActiveTab("profilePage");
  };

  return (
    <nav className="fixed z-40 bottom-0 py-5 px-2 max-auto w-screen ">
      <div className="flex items-center justify-around mx-auto max-w-screen-sm px-4">
        <button
          className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={handleHomePage}
        >
          <HomeSvg />
        </button>
        <button
          className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={handlePostPage}
        >
          <PostSvg />
        </button>
        <button
          className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={handleChatPage}
        >
          <div className="bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 w-14 h-14 rounded-full flex justify-center items-center">
            <ChatSvg />
          </div>
        </button>
        <button
          className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={handleNotificationPage}
        >
          <NotificationSvg />
        </button>
        <button
          className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={handleProfilePage}
        >
          <ProfileSvg />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
