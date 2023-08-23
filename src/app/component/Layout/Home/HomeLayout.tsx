"use client";
import React from "react";
import { People } from "@/utils/People";
import TinderCard from "react-tinder-card";

const HomeLayout = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="mt-20 flex justify-center items-center bg-green-400">
        {People.map((character, index) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            key={character.id}
            className="absolute"
          >
            <div
              style={{ backgroundImage: `url(${character.img})` }}
              className="relative w-64 p-2 max-w-sm h-96 rounded-xl shadow-lg bg-cover bg-center"
            >
              <h3 className="absolute text-white font-medium bottom-3">
                {character.name}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
