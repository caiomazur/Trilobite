import React from "react";
import { Link } from "react-router-dom";

interface CardButtonProps {
  cardImage: string;
  onClick: () => void;
  link?: string;
}

const CardButton: React.FC<CardButtonProps> = ({
  cardImage,
  onClick,
  link,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-[250px] h-[250px] flex items-center justify-center cursor-pointer"
    >
      {link ? (
        <Link
          to={link}
          className="rounded-[25%] bg-gray-100 hover:bg-gray-200 focus:bg-gray-300 border-[7px] border-black active:border-double shadow-button-default hover:shadow-button-hover transition-shadow duration-200 flex items-center justify-center w-full h-full"
        >
          <img
            className="rounded-[50%] w-[200px] h-[200px]"
            src={cardImage}
            alt="Trilobite Logo"
          />
        </Link>
      ) : (
        <div className="rounded-[25%] bg-gray-100 hover:bg-gray-200 focus:bg-gray-300 border-[7px] border-black active:border-double shadow-button-default hover:shadow-button-hover transition-shadow duration-200 flex items-center justify-center w-full h-full">
          <img
            className="rounded-[50%] w-[200px] h-[200px]"
            src={cardImage}
            alt="Trilobite Logo"
          />
        </div>
      )}
    </div>
  );
};

export default CardButton;
