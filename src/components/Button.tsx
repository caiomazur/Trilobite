import React from "react";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick}>
      <div
        className={classNames(
          "text-lg font-bold w-[150px] h-[55px] py-2 px-4 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center",
          {
            "text-black bg-gray-200 ring-1 ring-black hover:bg-gray-300 hover:ring-gray-400":
              type === "primary",
            "text-white bg-black ring-1 ring-white hover:bg-gray-800 hover:ring-gray-400":
              type === "secondary",
            "text-black bg-white ring-1 ring-black hover:bg-gray-200 hover:ring-gray-400":
              type === "tertiary",
          }
        )}
      >
        <p className="">{text}</p>
      </div>
    </button>
  );
};

export default Button;
