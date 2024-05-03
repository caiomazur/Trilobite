import React from "react";
import TicTac from "../components/TicTac";
import Background from "../assets/images/game-background.png";

const Games = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-gray-800 w-[400px] rounded-lg border-4 border-white border-double mt-4 shadow-lg">
        <h1 className="text-[38px] text-center text-white font-bold">
          Trilo Tac Toe
        </h1>
      </div>
      <div className="flex justify-center pt-4 w-screen h-screen">
        <TicTac />
      </div>
    </div>
  );
};

export default Games;
