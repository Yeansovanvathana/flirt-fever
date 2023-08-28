import {
  BellIcon,
  HomeIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Menu = () => {
  const user = "";
  return (
    <nav className="fixed z-40 bottom-0 py-5 px-2 max-auto border-t-[1px] w-screen">
      <div className="flex items-center justify-around mx-auto max-w-screen-2xl px-4">
        <HomeIcon className="iconMenu" />
        <PaperAirplaneIcon className="iconMenu" />
        <div className="bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 w-14 h-14 rounded-full flex justify-center items-center">
          <img src="/icons/fi-rr-flame.png" alt="" className="" />
        </div>
        <BellIcon className="iconMenu" />
        <UserIcon className="iconMenu" />
      </div>
    </nav>
  );
};

export default Menu;
