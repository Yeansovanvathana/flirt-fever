import ButtonProfile from "@/app/component/ButtonProfile";
import React from "react";
import {
  BellIcon,
  Cog6ToothIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  return (
    <div className="px-2 max-auto w-screen">
      <div className="mx-auto max-w-screen-sm px-4 ">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src="/profile.png"
              alt=""
              className="object-cover rounded-full w-20 h-20"
            />
          </div>
          <p className="text-base font-medium text-center text-AuroMetalSaurus-800">
            Vathana
          </p>
          <button className="px-2 py-1 rounded-full text-sm border-AuroMetalSaurus-50 border-2 text-AuroMetalSaurus-500">
            Edit profile
          </button>
        </div>
        <div className="mt-14 space-y-2 md:px-20">
          <ButtonProfile
            title="Account setting"
            icon={<Cog6ToothIcon className="icon" />}
          />
          <ButtonProfile
            title="Notification"
            icon={<BellIcon className="icon" />}
          />
          <ButtonProfile
            title="Privacy"
            icon={<ExclamationCircleIcon className="icon" />}
          />
          <ButtonProfile
            title="Help & Support"
            icon={<QuestionMarkCircleIcon className="icon" />}
          />
          <ButtonProfile
            title="Logout"
            icon={<ArrowRightOnRectangleIcon className="icon" />}
          />
        </div>
        <div className="flex justify-center flex-col items-center mt-20 space-y-3">
          <img src="/logo/FlirtFeverIconPri.png" alt="" className="w-10" />
          <p className="text-sm text-AuroMetalSaurus-500">Version 1.0.1</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
