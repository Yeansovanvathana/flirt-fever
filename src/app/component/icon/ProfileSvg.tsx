import React from "react";
import { activeTabMenu } from "@/service/recoil";
import { useRecoilValue } from "recoil";

const ProfileSvg = () => {
  const activeTab = useRecoilValue(activeTabMenu);
  return (
    <div>
      {activeTab === "profilePage" ? (
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="512"
          height="512"
          className="iconMenu text-BrinkPink-500"
        >
          <g>
            <circle cx="256" cy="128" r="128" />
            <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
          className="iconMenu"
        >
          <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
          <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
        </svg>
      )}
    </div>
  );
};

export default ProfileSvg;
