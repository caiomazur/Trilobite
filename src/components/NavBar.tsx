import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/card.png";
import { useTheme } from "../context/ThemeContext";
import ToggleSwitch from "./ToggleSwitch";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen px-2 h-14 flex items-center justify-between bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center bg-white rounded-full my-2">
        <Link to="/" className="font-bold items-center justify-center ml-2">
          <img
            style={{ width: 40, height: 40, borderRadius: 20 }}
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="hidden md:flex flex-row gap-4 sm:gap-6 items-center">
        <ToggleSwitch isOn={isDarkMode} handleToggle={toggleTheme} />
        <Link
          to="/learn"
          className="text-md font-medium web:underline-offset-4 text-black dark:text-white customUnderline"
        >
          Learn
        </Link>
        <Link
          to="/fan-arts"
          className="text-md font-medium web:underline-offset-4 text-black dark:text-white customUnderline"
        >
          Fan Arts
        </Link>
        <Link
          to="/games"
          className="text-md font-medium web:underline-offset-4 text-black dark:text-white mr-4 customUnderline"
        >
          Games
        </Link>
      </div>
      <div className="md:hidden flex items-center mr-4 gap-4">
        <ToggleSwitch isOn={isDarkMode} handleToggle={toggleTheme} />

        <button onClick={toggleMenu}>
          <Bars3Icon className="w-6 h-6 text-black dark:text-white" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 right-0 w-[115px] rounded-b-lg bg-gray-100 dark:bg-gray-900 flex flex-col items-start md:hidden">
          <Link
            to="/"
            className="text-lg font-medium hover:underline web:underline-offset-4 text-black dark:text-white py-2 px-4 w-full text-right"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/learn"
            className="text-lg font-medium hover:underline web:underline-offset-4 text-black dark:text-white py-2 px-4 w-full text-right"
            onClick={toggleMenu}
          >
            Learn
          </Link>
          <Link
            to="/fan-arts"
            className="text-lg font-medium hover:underline web:underline-offset-4 text-black dark:text-white py-2 px-4 w-full text-right"
            onClick={toggleMenu}
          >
            Fan Arts
          </Link>
          <Link
            to="/games"
            className="text-lg font-medium hover:underline web:underline-offset-4 text-black dark:text-white py-2 pb-3 px-4 w-full text-right"
            onClick={toggleMenu}
          >
            Games
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
