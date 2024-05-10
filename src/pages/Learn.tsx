import CardButton from "../components/CardButton";
import { useState } from "react";
import InfoCards from "../components/InfoCards";
import learnImage from "../assets/images/Search.png";

import trilobiteFossilImg from "../assets/images/TriloFossilImg.jpeg";
import trilobiteAnatomyImg from "../assets/images/trilobite-anatomy.jpg";
import trilobiteExtinctionImg from "../assets/images/ForthImgBritish.png";
import trilobiteLifeImg from "../assets/images/FirstCardBritish.png";
import Timeline from "../components/Timeline";

const cardsArr = [
  {
    title: "What were Trilobites?",
    description:
      "Trilobites were marine arthropods that lived from the Cambrian to the end of the Permian period, thriving for nearly 300 million years before dying out in the great Permian mass extinction.",
    link: "https://oumnh.ox.ac.uk/learn-what-were-trilobites",
    image: trilobiteFossilImg,
  },
  {
    title: "Trilobite Anatomy",
    description:
      "Trilobites had a three-part body plan consisting of a cephalon (head), a segmented thorax, and a pygidium (tail). They could roll up into a ball for protection, similar to modern-day woodlice.",
    link: "https://oumnh.ox.ac.uk/learn-what-were-trilobites",
    image: trilobiteAnatomyImg,
  },
  {
    title: "Lifestyle of Trilobites",
    description:
      "Trilobites exhibited diverse lifestyles, from burrowing in sediments to swimming in open water. Their diets ranged from detritus feeding and scavenging to active predation.",
    link: "https://oumnh.ox.ac.uk/learn-what-were-trilobites",
    image: trilobiteLifeImg,
  },
  {
    title: "Extinction of Trilobites",
    description:
      "Trilobites went extinct 251 million years ago during the end Permian mass extinction, which eradicated over 90% of all species on Earth at that time.",
    link: "https://oumnh.ox.ac.uk/learn-what-were-trilobites",
    image: trilobiteExtinctionImg,
  },
];

const Learn = () => {
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
        <h1 className="font-poppins text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 mt-4">
          Learn more about Trilobites
        </h1>
        <p className="font-poppins text-xl text-left md:text-xl mt-4">
          Click and explore the informative cards
        </p>
        <div className="flex justify-center mt-20 mb-8">
          <CardButton onClick={handleCardButtonClick} cardImage={learnImage} />
        </div>

        <Timeline />

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

export default Learn;
