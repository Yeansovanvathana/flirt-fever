import React, { useState } from "react";

import { useRecoilState } from "recoil";
import { activeTabState } from "../../recoil/atom";
import OtpInput from "../OtpInput";

const VerifyOtp = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [submitted, setSubmitted] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleSubmit = () => {
    setActiveTab("dateInfoTab");
    setSubmitted(true);
  };

  const handleOtpSubmit = (otp: string) => {
    setEnteredOtp(otp);
    console.log(otp);
    // Here you can perform actions like sending the OTP to the server for verification
  };

  return (
    <div className="flex justify-center items-center px-5">
      <div className="flex flex-col justify-evenly h-screen py-12">
        <div className="space-y-6">
          <h1 className="text-center font-semibold text-lg md:text-xl">
            Verify OTP Code
          </h1>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-center">
            We already have sent the OTP code via email to{" "}
            <span className="text-AuroMetalSaurus-900">
              sovanvathanayean@gmail.com
            </span>
          </p>
          <OtpInput submit={submitted} onOtpSubmit={handleOtpSubmit} />
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

export default VerifyOtp;
