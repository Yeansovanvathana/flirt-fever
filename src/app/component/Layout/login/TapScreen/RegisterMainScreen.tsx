"use client";

import React from "react";
import { activeTabState } from "../../../../../service/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import UserDetailForm from "../userInfo/UserDatailForm";
import VerifyOtp from "../userInfo/VerifyOtp";
import DateInfo from "../userInfo/DateInfo";
import GenderInfo from "../userInfo/GenderInfo";
import ProfileInfo from "../userInfo/ProfileInfo";
import RegisterTab from "./RegisterTab";

const RegisterMainScreen = () => {
  const activeTab = useRecoilValue(activeTabState);

  const renderContent = () => {
    switch (activeTab) {
      case "userDetailTab":
        return <UserDetailForm />;
      case "verifyOtpTab":
        return <VerifyOtp />;
      case "dateInfoTab":
        return <DateInfo />;
      case "genderInfoTab":
        return <GenderInfo />;
      case "profileInfoTab":
        return <ProfileInfo />;
      default:
        return null;
    }
  };
  return (
    <div>
      {renderContent()}
      <div className="basis-4/6 relative flex ">
        <RegisterTab />
      </div>
    </div>
  );
};

export default RegisterMainScreen;
