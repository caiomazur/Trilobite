import React from "react";
import TicTac from "../components/TicTac";
import Background from "../assets/images/game-background.png";

const Games: React.FC = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="bg-gray-800 w-[350px] sm:w-[400px] h-16 sm:h-20 mt-4 rounded-lg border-4 border-white border-double shadow-lg flex justify-center items-center">
        <h1 className="font-poppins text-[28px] sm:text-[38px] text-center text-white font-bold">
          Trilo Tac Toe
        </h1>
      </div>
      <div className="flex justify-center items-start w-screen h-screen">
        <TicTac />
      </div>
    </div>
  );
};

export default Games;
