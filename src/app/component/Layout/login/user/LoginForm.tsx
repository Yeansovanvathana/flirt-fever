import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRecoilState } from "recoil";
import { activeFormState } from "@/service/recoil";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginApi } from "@/service/axios/api";
import { userCredentialParam } from "@/utils/type";

const LoginForm = () => {
  const [_, setFormState] = useRecoilState(activeFormState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userCredentialParam>();

  console.log(errors);

  const handleChange = () => {
    setFormState("register");
  };

  const submitForm = async (data: userCredentialParam) => {
    console.log(data);
    try {
      await loginApi(data);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(formState);
  return (
    <div className="flex h-screen">
      <div className="bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 w-1/2 h-full hidden md:flex md:items-center md:justify-center">
        <Link href="/">
          <img src="logo/FlirtFeverLogo.png" className="w-[600px]" />
        </Link>
      </div>
      <form
        className="w-full md:w-1/2 h-full"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex justify-center items-center px-5">
          <div className="flex flex-col justify-evenly h-screen py-12">
            <div className="space-y-6">
              <h1 className="text-center font-semibold text-lg md:text-xl">
                Sign in
              </h1>
              <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-start">
                Get started on your journey to meaningful connections by
                creating your Flirt Fever account.
              </p>

              <div className="space-y-5 pt-10">
                <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
                  <EnvelopeIcon className="icon" />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="outline-none w-full bg-transparent text-sm"
                    {...register("email", { required: "email is required" })}
                  />
                </div>
                <div className="p-3 border-2 border-AuroMetalSaurus-100 rounded-full flex items-center space-x-3 text-AuroMetalSaurus-400">
                  <LockClosedIcon className="icon" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="outline-none w-full bg-transparent text-sm"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="flex justify-center p-3 text-white w-full bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 rounded-full font-semibold"
              >
                Log in
              </button>
              <p className="text-center text-sm text-AuroMetalSaurus-500 tracking-wider">
                Don't you have an account?{" "}
                <span
                  onClick={handleChange}
                  className="text-BrinkPink-500 cursor-pointer font-medium"
                >
                  Sign Up
                </span>
              </p>
              <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-center">
                By providing your data, you agree to our{" "}
                <button className="text-AuroMetalSaurus-800 cursor-pointer">
                  Terms of Service
                </button>{" "}
                and{" "}
                <span className="text-AuroMetalSaurus-800 cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
