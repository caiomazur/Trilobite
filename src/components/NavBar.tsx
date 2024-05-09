import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/card.png"; // Make sure this import works, or use a public URL

const NavBar = () => {
  return (
    <div className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between bg-gray-100">
      <div>
        <Link to="/" className="font-bold flex-1 items-center justify-center">
          <img
            style={{ width: 50, height: 40, borderRadius: 40 }}
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-4 sm:gap-6">
        <Link
          to="/"
          className="text-md font-medium hover:underline web:underline-offset-4 text-black"
        >
          Home
        </Link>
        <Link
          to="/fan-arts"
          className="text-md font-medium hover:underline web:underline-offset-4 text-black"
        >
          Fan Arts
        </Link>
        <Link
          to="/games"
          className="text-md font-medium hover:underline web:underline-offset-4 text-black"
        >
          Game
        </Link>
        <Link
          to="/learn"
          className="text-md font-medium hover:underline web:underline-offset-4 text-black"
        >
          Learn
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
