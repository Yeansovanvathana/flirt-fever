import React from "react";

const Navbar = () => {
  const user = "";
  return (
    <nav className="top-0 py-5 px-2 max-auto border-b-[1px] w-screen">
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl px-4">
        <div>
          <img src="logo/Primary Logo.svg" alt="" />
        </div>
        {user ? (
          <button className="px-4 py-1 bg-BrinkPink-500 text-white font-medium rounded-sm">
            Log in
          </button>
        ) : (
          <div className="flex space-x-5 md:space-x-8 items-center">
            <img
              src="/icons/fi-rr-paper-plane.png"
              alt=""
              className="iconMenu"
            />
            <img src="/icons/fi-rr-bell.png" alt="" className="iconMenu" />
            <button className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="/profile.png"
                alt=""
                className="object-cover rounded-full w-8 h-8"
              />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
