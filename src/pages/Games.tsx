import React, { useState } from "react";
import TicTac from "../components/TicTac";
import Background from "../assets/images/game-background.png";
//import Snake from "../components/Snake";

const Games: React.FC = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex justify-center items-start w-screen h-screen">
        <TicTac />
        {/* <Snake /> */}
      </div>
    </div>
  );
};

export default Games;
