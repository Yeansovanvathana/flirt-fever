"use client";

import React from "react";
import { activeTabMenu } from "@/service/recoil";
import { useRecoilValue } from "recoil";
import FlirtCard from "../FlirtCard";
import Post from "../Post";
import Chat from "../Chat/Chat";
import Notification from "../Notification";
import Profile from "../Profile";

const MenuMain = () => {
  const activeTab = useRecoilValue(activeTabMenu);

  const renderContent = () => {
    switch (activeTab) {
      case "homePage":
        return <FlirtCard />;
      case "postPage":
        return <Post />;
      case "chatPage":
        return <Chat />;
      case "notificationPage":
        return <Notification />;
      case "profilePage":
        return <Profile />;
      default:
        return null;
    }
  };
  return <div>{renderContent()}</div>;
};

export default MenuMain;
