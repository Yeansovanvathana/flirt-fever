import React from "react";
import {
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../../../service/recoil";

const DateInfo = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const handleSubmit = () => {
    setActiveTab("genderInfoTab");
  };
  return (
    <div className="flex justify-center items-center px-5">
      <div className="flex flex-col justify-evenly h-screen py-12 max-w-md">
        <div className="space-y-6">
          <h1 className="text-center font-semibold text-lg md:text-xl">
            Sign Up
          </h1>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-start">
            Please share your date of birth to help us match you with compatible
            partners.
          </p>

          <div className="pt-10">
            <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
              <CalendarDaysIcon className="icon" />
              <input
                type="date"
                // placeholder="Select your date of birth"
                className="outline-none w-full bg-transparent text-sm"
              />
              <QuestionMarkCircleIcon className="icon" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            className="flex justify-center p-3 text-white w-full bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 rounded-full font-semibold"
            onClick={handleSubmit}
          >
            Continue
          </button>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-center">
            By providing your data, you agree to our{" "}
            <span className="text-AuroMetalSaurus-800 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-AuroMetalSaurus-800 cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateInfo;
