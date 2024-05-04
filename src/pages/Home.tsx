import CardButton from "../components/CardButton";
import cardImage from "../assets/images/card.png";
import { useState } from "react";
import InfoCards from "../components/InfoCards";

import gameCardImg from "../assets/images/TriloGameCard2.png";
import fanArtImg from "../assets/images/FanArtsTrilo.webp";
import learnImg from "../assets/images/Search.png";
import aboutImg from "../assets/images/TriloCoding.webp";

const cardsArr = [
  {
    title: "Games",
    description: "Discover fun games about Trilobites.",
    link: "/games",
    image: gameCardImg,
  },
  {
    title: "Fan Arts",
    description: "Explore fan-created arts of Trilobites.",
    link: "/fan-arts",
    image: fanArtImg,
  },
  {
    title: "Learn",
    description: "Learn more about the world of Trilobites.",
    link: "/learn",
    image: learnImg,
  },
  {
    title: "About",
    description: "Learn more about this project.",
    link: "/about",
    image: aboutImg,
  },
];

const Home = () => {
  const [showCards, setShowCards] = useState(false);

  const handleCardButtonClick = () => {
    setShowCards(true);
  };

  // Function to update the visibility state
  const handleSetIsVisible = (isVisible: boolean) => {
    setShowCards(isVisible);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-[455px] sm:max-w-[655px] px-4">
        <h1 className="font-poppins text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 mt-8">
          Trilobites: Ancient Wonders
        </h1>
        <p className="font-poppins text-xl text-left md:text-xl mt-4">
          Dive into the world of Trilobites, the early inhabitants of our
          oceans.
        </p>
        <div className="flex justify-center mt-20">
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
