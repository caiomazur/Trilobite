import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface CardsProps {
  image?: string;
  title: string;
  description: string;
  link: string;
}

interface InfoCardsProps {
  cardsArr: CardsProps[];
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void; // Un-comment this line to use it
}

const InfoCards: React.FC<InfoCardsProps> = ({
  cardsArr,
  isVisible,
  setIsVisible,
}) => {
  const [cardIndex, setCardIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null); // Create a ref for the modal

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false); // Close modal if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsVisible]); // Dependency on setIsVisible to avoid adding/removing listeners unnecessarily

  useEffect(() => {
    if (isVisible) {
      setCardIndex(0); // Reset card index whenever modal is opened
    }
  }, [isVisible]);

  const handleNext = () => {
    if (cardIndex < cardsArr.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setIsVisible(false); // Close modal after last card
    }
  };

  const handlePrevious = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div
          className="bg-white px-8 pb-8 pt-2 rounded-lg w-[448px] border border-gray-300 hover:border-gray-100 shadow-lg ring-2 ring-black flex flex-col items-center"
          ref={modalRef}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="relative left-48"
          >
            <XCircleIcon width={42} />
          </button>
          {cardsArr[cardIndex].image && (
            <img
              src={cardsArr[cardIndex].image}
              alt={cardsArr[cardIndex].title}
              className="w-[325px] h-[325px] rounded-lg ring ring-black shadow-md"
            />
          )}
          <Link to={cardsArr[cardIndex].link}>
            <div className="rounded-lg p-4 mt-6 ring-1 hover:ring-[#0000EE] ring-black hover:shadow-lg flex flex-col items-start w-[350px]">
              <h2 className="text-xl font-bold pb-2">
                {cardsArr[cardIndex].title}
              </h2>
              <p className="text-md">{cardsArr[cardIndex].description}</p>
            </div>
          </Link>
          <div className="flex justify-between items-center mt-6 w-full">
            {cardIndex !== 0 ? (
              <button
                onClick={handlePrevious}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-xl w-[120px] h-[50px]"
              >
                Previous
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={handleNext}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-xl w-[100px] h-[50px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default InfoCards;
