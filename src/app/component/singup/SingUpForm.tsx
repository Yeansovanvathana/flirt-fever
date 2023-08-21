import {
  UserCircleIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

const SingUpForm = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 w-[50%] hidden md:flex md:items-center md:justify-center">
        <img src="/FlirtFeverLogo.png" className="w-[600px]" />
      </div>
      <div className="w-full md:w-[50%]">
        <div className="flex justify-center items-center px-5">
          <div className="flex flex-col justify-evenly h-screen py-12">
            <div className="space-y-6">
              <h1 className="text-center font-semibold text-lg md:text-xl">
                Sign Up
              </h1>
              <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-start">
                Get started on your journey to meaningful connections by
                creating your Flirt Fever account.
              </p>

              <div className="space-y-5 pt-10">
                <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
                  <UserCircleIcon className="icon" />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="outline-none w-full bg-transparent text-sm"
                  />
                  <QuestionMarkCircleIcon className="icon" />
                </div>
                <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
                  <EnvelopeIcon className="icon" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="outline-none w-full bg-transparent text-sm"
                  />
                  <QuestionMarkCircleIcon className="icon" />
                </div>
                <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
                  <LockClosedIcon className="icon" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="outline-none w-full bg-transparent text-sm"
                  />
                  <QuestionMarkCircleIcon className="icon" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-5 h-5 bg-BrinkPink-500 rounded-full">
                      <CheckIcon className="p-[2px] text-white" />
                    </div>
                    <p className="text-BrinkPink-500">
                      Must be a least 8 characters
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-5 h-5 bg-AuroMetalSaurus-100 rounded-full">
                      <CheckIcon className="p-[2px] text-white" />
                    </div>
                    <p className="text-AuroMetalSaurus-500">
                      Must contain one special character
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center p-3 text-white w-full bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 rounded-full font-semibold">
                <button>Continue</button>
              </div>
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
      </div>
    </div>
  );
};

export default SingUpForm;
