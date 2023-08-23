"use client";
import React, { useEffect, useState } from "react";
import { People } from "@/utils/People";
import dynamic from "next/dynamic";

const DynamicTinderCard = dynamic(() => import("react-tinder-card"), {
  ssr: false, // Prevent SSR
});

const HomeLayout = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="mt-20 relative flex justify-center items-center bg-green-400">
        {People.map((character, index) => (
          <DynamicTinderCard preventSwipe={["up", "down"]} className="absolute">
            <div
              style={{ backgroundImage: `url(${character.img})` }}
              className="relative w-64 p-2 max-w-sm h-96 rounded-xl shadow-lg bg-cover bg-center"
            >
              <div className="absolute text-white font-medium bottom-3">
                <h3>{character.name}</h3>
                <div>
                  {/* {character.interests.map((interest) => () => {
                    return <p>{interest}</p>;
                  }} */}
                </div>
              </div>
            </div>
          </DynamicTinderCard>
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
