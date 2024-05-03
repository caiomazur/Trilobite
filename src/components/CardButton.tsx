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
  // For web, use div and img tags. Adjust onClick event for web.
  // Use an anchor tag or react-router-dom's Link for navigation.
  return (
    <div
      onClick={onClick} // For a clickable div, attach the onClick handler here.
      className="w-[200px] h-[200px] flex items-center justify-center cursor-pointer"
    >
      {link ? (
        // Use Link for navigation. Adjust styling as needed.
        <Link
          to={link}
          className="border rounded-[25%] bg-gray-100 hover:bg-gray-200 ring ring-black hover:ring hover:ring-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center w-full h-full"
        >
          <img
            style={{ width: 200, height: 200, borderRadius: "50%" }} // Inline styles can be replaced with Tailwind classes if preferred
            src={cardImage}
            alt=""
          />
        </Link>
      ) : (
        <div className="border bg-gray-100 hover:bg-gray-200 hover:ring hover:ring-black shadow-lg hover:shadow-xl flex items-center justify-center w-full h-full">
          <img
            style={{ width: 150, height: 150, borderRadius: "50%" }}
            src={cardImage}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default CardButton;
