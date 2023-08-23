import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { activeTabState } from "../../../../../service/recoil";

const GenderInfo = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  const [activeButton, setActiveButton] = useState("Male");
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
    if (submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  };

  const handleSubmit = () => {
    setActiveTab("profileInfoTab");
    console.log("Active button:", activeButton);
  };
  return (
    <div className="flex justify-center items-center px-5">
      <div className="flex flex-col justify-evenly h-screen py-12 max-w-sm">
        <div className="space-y-6">
          <h1 className="text-center font-semibold text-lg md:text-xl">
            Set up your information
          </h1>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-center">
            Help us tailor your matches and experiences by selecting your
            preferred gender.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-10">
            <button
              type="button"
              autoFocus
              className={`button ${activeButton === "Male" ? "active" : ""}`}
              onClick={() => handleButtonClick("Male")}
            >
              Male
            </button>
            <button
              type="button"
              className={`button ${activeButton === "Female" ? "active" : ""}`}
              onClick={() => handleButtonClick("Female")}
            >
              Female
            </button>
            <button
              type="button"
              className={`col-span-2 button ${
                activeButton === "PreferNotToSay" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("PreferNotToSay")}
            >
              I'm prefer not to say
            </button>
          </div>
        </div>

        <div className="space-y-4 pt-10">
          <div>
            <button
              className="flex justify-center p-3 text-white w-full bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 rounded-full font-semibold"
              type="button"
              ref={submitButtonRef}
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
          <p className="text-sm max-w-sm text-AuroMetalSaurus-500 text-center">
            Begin your adventure with{" "}
            <span className="text-AuroMetalSaurus-900 cursor-pointer">
              FLIRTFEVER
            </span>{" "}
            by selecting your preferred gender.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenderInfo;
