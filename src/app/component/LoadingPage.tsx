import React from "react";

const LoadingPage = () => {
  return (
    <div className="bg-gradient-to-r from-Gradient1-50 to-Gradient1-100 flex justify-center items-center fixed inset-0 z-50">
      <img
        src="/FlirtFeverLogo.png"
        className="w-[600px] hidden md:flex animate-pulse"
      />
      <img src="/FlirtFeverIcon.png" className="md:hidden animate-pulse" />
    </div>
  );
};

export default LoadingPage;
