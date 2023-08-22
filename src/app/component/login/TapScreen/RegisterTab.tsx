import React from "react";
import { useRecoilValue } from "recoil";
import { activeTabState } from "../../../../service/recoil";

const RegisterTab = () => {
  const activeTab = useRecoilValue(activeTabState);
  console.log(activeTab);
  return (
    <div className="absolute bottom-8 hidden md:flex space-x-3 items-center left-1/2 transform -translate-x-1/2">
      <div
        className={`${
          activeTab === "userDetailTab" ? "w-16 " : "w-3"
        } h-3 bg-BrinkPink-500 rounded-full transition-width duration-700`}
      ></div>
      <div
        className={`${
          activeTab === "verifyOtpTab" ? "w-16" : "w-3"
        } h-3 bg-BrinkPink-500  rounded-full transition-width duration-700`}
      ></div>
      <div
        className={`${
          activeTab === "dateInfoTab" ? "w-16" : "w-3"
        } h-3 bg-BrinkPink-500 rounded-full transition-width duration-700`}
      ></div>
      <div
        className={`${
          activeTab === "genderInfoTab" ? "w-16" : "w-3"
        } h-3 bg-BrinkPink-500 rounded-full transition-width duration-700`}
      ></div>
      <div
        className={`${
          activeTab === "profileInfoTab" ? "w-16" : "w-3"
        } h-3 bg-BrinkPink-500 rounded-full transition-width duration-700`}
      ></div>
    </div>
  );
};

export default RegisterTab;
