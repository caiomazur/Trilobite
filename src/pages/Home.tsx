import CardButton from "../components/CardButton";
import cardImage from "../assets/images/card.png";
import { useState } from "react";
import InfoCards from "../components/InfoCards";

import gameCardImg from "../assets/images/TriloPlayGameImg.webp";
import fanArtImg from "../assets/images/FanArtsTrilo.webp";
import learnImg from "../assets/images/TriloEnciclopediaImg.webp";
//import aboutImg from "../assets/images/TriloCoding.webp";

const cardsArr = [
  {
    title: "Learn",
    description: "Learn more about the world of Trilobites.",
    link: "/learn",
    image: learnImg,
  },
  {
    title: "Fan Arts",
    description: "Explore fan-created arts.",
    link: "/fan-arts",
    image: fanArtImg,
  },
  {
    title: "Games",
    description: "Discover fun games.",
    link: "/games",
    image: gameCardImg,
  },

  // {
  //   title: "About",
  //   description: "Learn more about this project.",
  //   link: "/about",
  //   image: aboutImg,
  // },
];

const Home = () => {
  const [showCards, setShowCards] = useState(false);

  const handleCardButtonClick = () => {
    setShowCards(true);
  };

  const handleSetIsVisible = (isVisible: boolean) => {
    setShowCards(isVisible);
  };

  return (
    <div className="flex justify-center bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className="max-w-screen-sm w-full px-4 mt-2">
        <h1 className="font-poppins text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 mt-4 customUnderline">
          Trilobites: Ancient Wonders
        </h1>
        <p className="font-poppins text-xl text-left md:text-xl mt-4 sm:max-w-[500px]">
          Dive into the world of Trilobites, the masters of the prehistoric
          game.
        </p>
        <div className="flex justify-center mt-10">
          <CardButton onClick={handleCardButtonClick} cardImage={cardImage} />
        </div>
        {showCards && (
          <InfoCards
            isVisible={showCards}
            cardsArr={cardsArr}
            setIsVisible={handleSetIsVisible}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
