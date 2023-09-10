import { Cog6ToothIcon, KeyIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { title } from "process";
import React from "react";

const ButtonProfile = (props: { title: string }) => {
  return (
    <button className="flex items-center justify-between w-full px-4 py-2 rounded-full border-AuroMetalSaurus-50 border-2">
      <div className="flex items-center space-x-5">
        <Cog6ToothIcon className="icon" />
        <span>{props.title}</span>
      </div>
      <ChevronRightIcon className="icon" />
    </button>
  );
};

export default ButtonProfile;
