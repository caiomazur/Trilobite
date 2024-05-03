import React from "react";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick}>
      <div
        className={classNames(
          "p-2 rounded-lg w-[100px] items-center hover:ring hover:ring-black hover:shadow-md",
          {
            "bg-gray-200 hover:bg-gray-300": type === "primary",
            "bg-black-500 hover:bg-back-700 text-white hover:ring-white":
              type === "secondary",
          }
        )}
      >
        <p className="">{text}</p>
      </div>
    </button>
  );
};

export default Button;
