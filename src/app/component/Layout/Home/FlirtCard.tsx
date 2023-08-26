"use client";
import React, { useEffect, useState } from "react";
import { People } from "@/utils/People";
import dynamic from "next/dynamic";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

const DynamicTinderCard = dynamic(() => import("react-tinder-card"), {
  ssr: false, // Prevent SSR
});

const FlirtCard = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="mt-20 relative flex justify-center items-center">
        {People.map((character, index) => (
          <DynamicTinderCard
            preventSwipe={["up", "down"]}
            className="absolute"
            key={character.id}
          >
            <div
              style={{
                backgroundImage: `url(${character.img})`,
              }}
              className="relative w-[350px] max-w-sm h-[650px] rounded-2xl shadow-md bg-cover bg-center"
            >
              <div className="w-full h-full absolute bg-gradient-to-t from-AuroMetalSaurus-800 rounded-3xl"></div>

              <div className="absolute text-white bottom-0 w-full p-6">
                <h3 className="text-xl font-semibold">{character.name}</h3>
                <div className="grid grid-cols-3 gap-1 mt-3 pr-10">
                  {character.interests.map((interest, idx) => (
                    <div
                      className="py-1 px-2 rounded-3xl bg-AuroMetalSaurus-50 text-AuroMetalSaurus-500 border-spacing-1 shadow drop-shadow-md font-medium"
                      key={idx}
                    >
                      <p className="md:text-sm text-[11px] text-center">
                        {interest}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex justify-between">
                  <button className="py-2 px-9 md:py-1.5 md:px-8 hover rounded-3xl bg-gradient-to-r from-Uninteresting-50 to-Uninteresting-100 border-spacing-1 shadow drop-shadow-md font-medium transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-105 duration-300">
                    <XMarkIcon className="icon" />
                  </button>
                  <button className="py-2 px-9 md:py-1.5 md:px-8 hover rounded-3xl bg-gradient-to-r from-Fire-50 to-Fire-100  text-AuroMetalSaurus-500 border-spacing-1 shadow drop-shadow-md font-medium transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-105 duration-300">
                    <img src="icons/fi-rr-flame.png" className="icon" />
                  </button>
                  <button className="py-2 px-9 md:py-1.5 md:px-8 hover rounded-3xl bg-gradient-to-r from-interesting-50 to-interesting-100 text-AuroMetalSaurus-500 border-spacing-1 shadow drop-shadow-md font-medium transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-105 duration-300">
                    <HeartIcon className="icon text-white" />
                  </button>
                </div>
              </div>
            </div>
          </DynamicTinderCard>
        ))}
      </div>
    </div>
  );
};

export default FlirtCard;
