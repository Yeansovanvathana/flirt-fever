import React from "react";
import {
  UserCircleIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { activeFormState, activeTabState } from "../../../../../service/recoil";
import { useForm } from "react-hook-form";

const UserDetailForm = () => {
  const [_, setActiveTab] = useRecoilState(activeTabState);
  const [__, setFormState] = useRecoilState(activeFormState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = () => {
    setFormState("login");
  };
  console.log(errors);
  const onSubmit = (data: any) => {
    console.log(data);
    setActiveTab("verifyOtpTab");
  };

  return (
    <div className="flex justify-center items-center px-5">
      <form
        className="flex flex-col justify-evenly h-screen py-12 max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-6">
          <h1 className="text-center font-semibold text-lg md:text-xl">
            Sign Up
          </h1>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-start">
            Get started on your journey to meaningful connections by creating
            your Flirt Fever account.
          </p>

          <div className="space-y-5 pt-10">
            <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
              <UserCircleIcon className="icon" />
              <input
                type="text"
                placeholder="Enter your username"
                className="outline-none w-full bg-transparent text-sm"
                {...register("username", { required: "username is required" })}
              />
              <QuestionMarkCircleIcon className="icon" />
            </div>
            <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
              <EnvelopeIcon className="icon" />
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none w-full bg-transparent text-sm"
                {...register("email", { required: "email is required" })}
              />
              <QuestionMarkCircleIcon className="icon" />
            </div>
            <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
              <LockClosedIcon className="icon" />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none w-full bg-transparent text-sm"
                {...register("password", { required: "password is required" })}
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

        <div className="space-y-4 pt-10">
          <button
            className="flex justify-center p-3 text-white w-full bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 rounded-full font-semibold"
            onClick={onSubmit}
          >
            Continue
          </button>
          <p className="text-center text-sm text-AuroMetalSaurus-500 tracking-wider">
            Already have an account?{" "}
            <span
              onClick={handleChange}
              className="text-BrinkPink-500 cursor-pointer font-medium"
            >
              Login
            </span>
          </p>
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
      </form>
    </div>
  );
};

export default UserDetailForm;
