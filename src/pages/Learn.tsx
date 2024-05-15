import CardButton from "../components/CardButton";
import { useState } from "react";
import InfoCards, { CardsProps } from "../components/InfoCards";
import Timeline from "../components/Timeline";
import Hr from "../components/Hr";
import Footer from "../components/Footer";

import triloFriendImg from "../assets/images/TriloFriends-removebg.png";
import learnImage from "../assets/images/TriloLookingGlass-removebg.png";
import trilobiteFossilImg from "../assets/images/TriloFossil01.webp";
import trilobiteAnatomyImg from "../assets/images/trilobite-anatomy.jpg";
import trilobiteExtinctionImg from "../assets/images/TriloExtinctImg.jpg";
import trilobiteLifeImg from "../assets/images/TriloMateImg.jpeg";
import trilobiteEyes from "../assets/images/TriloEyes.jpeg";
import trilobiteFossilImg02 from "../assets/images/TriloFossil02.jpeg";
import trilobiteDiversityImg from "../assets/images/TriloAnatomyImg.jpeg";

import hallucigeniaImage from "../assets/images/HalucigeniImg copy.png";
import anomalocarisImage from "../assets/images/AnomalocarisImg.webp";
import marrellaImage from "../assets/images/MarellaImg.webp";
import wiwaxiaImage from "../assets/images/WiwaxiaImg.jpeg";
import opabiniaImage from "../assets/images/OpabiniaImg.webp";
import leanchoiliaImage from "../assets/images/Leancholia.jpeg";
import isoxysImage from "../assets/images/Isoxys.webp";
import helicocystisImage from "../assets/images/Helicocystis.webp";

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
      "Trilobites may have mated like modern horseshoe crabs, using claspers for males to hold onto females, enhancing reproductive success. This finding highlights their complex behaviors, akin to some current marine arthropods.",
    link: "https://www.nhm.ac.uk/discover/news/2022/may/trilobite-fossil-reveals-how-ancient-arthropods-mated.html",
    image: trilobiteLifeImg,
  },
  {
    title: "Extinction of Trilobites",
    description:
      "Trilobites went extinct 251 million years ago during the end Permian mass extinction, which eradicated over 90% of all species on Earth at that time.",
    link: "https://www.goodreads.com/book/show/75290432-trilobite",
    image: trilobiteExtinctionImg,
  },
  {
    title: "Vision and Defense",
    description:
      "Trilobites were the first creatures to develop complex eyes. Some species had hundreds of lenses, providing 360-degree vision, essential for detecting predators and prey.",
    link: "https://www.zmescience.com/feature-post/natural-sciences/geology-and-paleontology/fossils/trilobite-facts/",
    image: trilobiteEyes,
  },
  {
    title: "Trilobite Fossils Worldwide",
    description:
      "Their fossilized remains have been found on every continent, making them some of the most common and widely studied fossils in the world.",
    link: "https://www.zmescience.com/feature-post/natural-sciences/geology-and-paleontology/fossils/trilobite-facts/",
    image: trilobiteFossilImg02,
  },
  {
    title: "Trilobite Diversity",
    description:
      "Over 20,000 species have been described, showcasing their incredible diversity and success in marine environments from shallow waters to deep seas.",
    link: "https://www.zmescience.com/feature-post/natural-sciences/geology-and-paleontology/fossils/trilobite-facts/",
    image: trilobiteDiversityImg,
  },
];

const cambrianCards = [
  {
    title: "Hallucigenia",
    description:
      "This invertebrate, with a body where the head and tail are nearly indistinguishable, was once thought to represent a new animal phylum. Today, it's considered a distant ancestor to velvet worms.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: hallucigeniaImage,
  },
  {
    title: "Anomalocaris",
    description:
      "The 'abnormal shrimp' Anomalocaris was a giant of the Cambrian seas, measuring over three feet long. Equipped with compound eyes, a pineapple ring-like mouth, and a fan-shaped tail, it represents an ancient lineage of arthropods.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: anomalocarisImage,
  },
  {
    title: "Marrella",
    description:
      "Marrella, the most common fossil found in the Burgess Shale, features paired antennae and rear-facing spikes. This tiny invertebrate scavenged the ocean floor, contributing significantly to our understanding of Cambrian marine life.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: marrellaImage,
  },
  {
    title: "Wiwaxia",
    description:
      "Wiwaxia, resembling a two-inch-long Stegosaurus, was armored with defensive spikes. This lightly armored Cambrian invertebrate is thought to have been ancestral to mollusks, with a soft underbelly and a muscular foot for movement.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: wiwaxiaImage,
  },
  {
    title: "Opabinia",
    description:
      "Opabinia, with its five stalked eyes and backward-facing mouth, appeared to be hastily assembled. Difficult to classify, it is now understood to be somehow ancestral to modern arthropods.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: opabiniaImage,
  },
  {
    title: "Leanchoilia",
    description:
      "Leanchoilia, described as an arachnomorph or a megacheiran, used its sensitive tentacles to navigate the ocean floor. Its anatomy, a mix of various arthropod features, showcases the complexity of classifying ancient fauna.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: leanchoiliaImage,
  },
  {
    title: "Isoxys",
    description:
      "Isoxys stood out with its bulbous eyes and thin, flexible carapace with spines. It likely used its shell for defense and hydrodynamic purposes, adapting to the light conditions of different ocean depths.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: isoxysImage,
  },
  {
    title: "Helicocystis",
    description:
      "Helicocystis, a non-arthropod Cambrian invertebrate, is considered ancestral to echinoderms. Its roundish body featured specialized grooves spiraling out from its mouth, prefiguring the five-fold symmetry typical of later echinoderms.",
    link: "https://www.thoughtco.com/strangest-animals-of-the-cambrian-period-4125717",
    image: helicocystisImage,
  },
];

const Learn = () => {
  const [currentCards, setCurrentCards] = useState<CardsProps[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const showTrilobiteCards = () => {
    setCurrentCards(cardsArr);
    setIsVisible(true);
  };

  const showCambrianCards = () => {
    setCurrentCards(cambrianCards);
    setIsVisible(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[455px] sm:max-w-[655px] px-4 pb-4">
        <h1 className="font-poppins text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 mt-4">
          Learn more about Trilobites
        </h1>
        <p className="font-poppins text-xl text-left md:text-xl mt-4">
          Click and explore the informative cards
        </p>
        <div className="flex flex-row justify-center items-center mt-16 mb-12">
          <div className="mr-12 flex flex-col items-center">
            <CardButton onClick={showTrilobiteCards} cardImage={learnImage} />
            <h3 className="mt-6 font-poppins text-xl font-semibold">
              Trilobite
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <CardButton
              onClick={showCambrianCards}
              cardImage={triloFriendImg}
            />
            <h3 className="mt-6 font-poppins text-xl font-semibold">
              Cambrian Friends
            </h3>
          </div>
        </div>

        <Hr />

        <h2 className="font-poppins sm:text-4xl md:text-4xl mt-10 mb-4">
          Timeline of Species Longevity
        </h2>
        <Timeline />

        {isVisible && (
          <InfoCards
            isVisible={isVisible}
            cardsArr={currentCards}
            setIsVisible={setIsVisible}
          />
        )}
      </div>
      <Hr />

      <Footer />
    </div>
  );
};

export default Learn;
