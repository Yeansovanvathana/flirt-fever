import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { title } from "process";
import React from "react";

const ButtonProfile = (props: { title: string; icon: any }) => {
  return (
    <button className="flex items-center justify-between w-full px-4 py-2 rounded-full border-AuroMetalSaurus-50 border-2 text-AuroMetalSaurus-500">
      <div className="flex items-center space-x-5">
        {/* <Cog6ToothIcon className="icon" /> */}
        {props.icon}
        <span>{props.title}</span>
      </div>
      <ChevronRightIcon className="icon" />
    </button>
  );
};

export default ButtonProfile;
