import React from "react";
import RegisterMainScreen from "../TapScreen/RegisterMainScreen";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 w-1/2 h-full hidden md:flex md:items-center md:justify-center">
        <Link href="/">
          <img src="logo/FlirtFeverLogo.png" className="w-[600px]" />
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-full">
        <RegisterMainScreen />
      </div>
    </div>
  );
};

export default RegisterForm;
