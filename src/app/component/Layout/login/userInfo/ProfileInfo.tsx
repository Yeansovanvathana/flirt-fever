import React from "react";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../../../../service/recoil";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const ProfileInfo = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const handleSubmit = () => {
    setActiveTab("userDetailTab");
  };
  return (
    <div className="flex justify-center items-center px-5 ">
      <div className="flex flex-col justify-evenly h-screen py-12 max-w-sm">
        <div className="space-y-6">
          <h1 className="text-center font-semibold text-lg md:text-xl">
            Set up your Profile
          </h1>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-center">
            Creating an appealing profile will help you stand out and connect
            with like-minded individuals.
          </p>
          <div className="pt-10">
            <div className="relative flex justify-center pb-10">
              <div className="w-28 h-28 rounded-full overflow-hidden border-[1px] border-primary-lowBlack bg-white">
                <Image
                  width={300}
                  height={300}
                  priority={false}
                  alt="profile"
                  src={"/profile.png"}
                  // src="/profile.png"
                  className="rounded-full w-28 h-28 object-cover"
                />
              </div>
              <div className="w-5 h-5 bg-BrinkPink-500 rounded-full absolute top-1 left-[56%] flex justify-center items-center">
                <label htmlFor="imageUpload" className="cursor-pointer ">
                  <PencilIcon className="w-3 h-3 text-white" />
                </label>
              </div>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                // onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="py-2.5 px-5 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center justify-between text-AuroMetalSaurus-400">
                <input
                  type="number"
                  placeholder="Your Height"
                  className="outline-none bg-transparent text-sm w-[80%]"
                />
                <QuestionMarkCircleIcon className="icon md:w-6" />
              </div>
              <div className="py-2.5 px-5 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center justify-between text-AuroMetalSaurus-400">
                <input
                  type="number"
                  placeholder="Your Weight"
                  className="outline-none bg-transparent text-sm w-[80%]"
                />
                <QuestionMarkCircleIcon className="icon md:w-6" />
              </div>
              <div className="col-span-2 p-3 border-2 border-AuroMetalSaurus-100 rounded-3xl flex text-AuroMetalSaurus-400">
                <textarea
                  placeholder="Enter your bio"
                  className="outline-none bg-transparent text-sm w-full h-20"
                ></textarea>
                <QuestionMarkCircleIcon className="icon md:w-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-10">
          <button
            className="flex justify-center p-3 text-white w-full bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 rounded-full font-semibold"
            onClick={handleSubmit}
          >
            Continue
          </button>

          <p className="text-sm text-AuroMetalSaurus-500 text-center">
            By setting your profile, you agree to our{" "}
            <span className="text-AuroMetalSaurus-900 cursor-pointer ">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-AuroMetalSaurus-900 cursor-pointer ">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
