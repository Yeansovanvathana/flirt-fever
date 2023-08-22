import React from "react";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../recoil/atom";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const ProfileInfo = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const handleSubmit = () => {
    setActiveTab("genderInfoTab");
  };
  return (
    <div className="flex justify-center items-center px-5 ">
      <div className="flex flex-col justify-evenly h-screen py-12 max-w-md">
        <div className="space-y-6">
          <h1 className="text-center font-semibold text-lg md:text-xl">
            Set up your Profile
          </h1>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-center">
            Creating an appealing profile will help you stand out and connect
            with like-minded individuals.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center justify-between text-AuroMetalSaurus-400">
              <input
                type="text"
                placeholder="Your Height"
                className="outline-none bg-transparent text-sm"
              />
              <QuestionMarkCircleIcon className="icon" />
            </div>
            <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center text-AuroMetalSaurus-400">
              <input
                type="text"
                placeholder="Your Weight"
                className="outline-none bg-transparent text-sm"
              />
              <QuestionMarkCircleIcon className="icon" />
            </div>
            <div className="col-span-2 p-3 border-2 border-AuroMetalSaurus-100 rounded-3xl flex text-AuroMetalSaurus-400">
              <textarea
                placeholder="Enter your bio"
                className="outline-none bg-transparent text-sm w-full h-20"
              ></textarea>
              <QuestionMarkCircleIcon className="icon" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center p-3 text-white w-full bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 rounded-full font-semibold">
            <button onClick={handleSubmit}>Verify email</button>
          </div>
          <p className="text-sm text-AuroMetalSaurus-500 text-center">
            Didn't receive the email? <br />
            <span className="text-AuroMetalSaurus-900 cursor-pointer ">
              Click to resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
