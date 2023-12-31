"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { activeTabMenu } from "@/service/recoil";

const Navbar = () => {
  const activeMenu = useRecoilValue(activeTabMenu);
  console.log(activeMenu);

  if (activeMenu !== "homePage") {
    return (
      <nav className="top-0 py-5 px-2 max-auto w-screen">
        <div className="flex items-center justify-center mx-auto max-w-screen-sm px-4">
          <div>
            <img src="logo/Primary Logo.svg" alt="" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="top-0 py-5 px-2 max-auto w-screen">
      <div className="flex items-center justify-between mx-auto max-w-screen-sm px-4">
        <div>
          <img src="logo/Primary Logo.svg" alt="" />
        </div>

        <button>
          <svg
            id="Layer_1"
            height="512"
            viewBox="0 0 24 24"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            className="iconMenu"
          >
            <path d="m14 24a1 1 0 0 1 -.6-.2l-4-3a1 1 0 0 1 -.4-.8v-5.62l-7.016-7.893a3.9 3.9 0 0 1 2.916-6.487h14.2a3.9 3.9 0 0 1 2.913 6.488l-7.013 7.892v8.62a1 1 0 0 1 -1 1zm-3-4.5 2 1.5v-7a1 1 0 0 1 .253-.664l7.268-8.177a1.9 1.9 0 0 0 -1.421-3.159h-14.2a1.9 1.9 0 0 0 -1.421 3.158l7.269 8.178a1 1 0 0 1 .252.664z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
