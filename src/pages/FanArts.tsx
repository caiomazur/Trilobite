import Gallery from "../components/Gallery";

import fanArtImg1 from "../assets/images/fanArt3.png";
import fanArtImg2 from "../assets/images/D&DTrilo.webp";
import fanArtImg3 from "../assets/images/fanArt4.png";
import fanArtImg4 from "../assets/images/16bitTriloImg.webp";
import fanArtImg5 from "../assets/images/psychadelic.png";
import fanArtImg6 from "../assets/images/CuteTriloImg.webp";
import fanArtImg7 from "../assets/images/GymTriloImg.webp";
import fanArtImg8 from "../assets/images/daVinciTriloImg.webp";

const photosArr = [
  {
    image: fanArtImg1,
    title: "Trilobite Twilight",
    credits: "Art by Alex",
    description:
      "A vibrant and color-rich depiction of a trilobite, emphasizing its complex anatomy with a playful palette of colors.",
  },
  {
    image: fanArtImg2,
    title: "Prehistoric Battle",
    credits: "Art by Casey",
    description:
      "This dramatic scene captures a fierce battle between trilobites and ancient sea creatures under stormy skies, showcasing a dynamic interplay of survival.",
  },
  {
    image: fanArtImg3,
    title: "Skaterbite",
    credits: "Art by Jamie",
    description:
      "A whimsical interpretation of a trilobite effortlessly skateboarding, blending paleontology with modern street culture.",
  },
  {
    image: fanArtImg4,
    title: "Desert Dwellers",
    credits: "Art by Morgan",
    description:
      "A pixel art masterpiece featuring trilobites thriving in a vividly rendered prehistoric desert landscape.",
  },
  {
    image: fanArtImg5,
    title: "Psychedelic Spiral",
    credits: "Art by Taylor",
    description:
      "An explosion of psychedelic colors and forms that morph into a trilobite, inspired by visions of deep time and natural evolution.",
  },
  {
    image: fanArtImg6,
    title: "Bubble-eyed Buddy",
    credits: "Art by Jordan",
    description:
      "Cute and captivating, this art captures a cartoonish trilobite with big, bubbly eyes, floating serenely among aquatic flora.",
  },
  {
    image: fanArtImg7,
    title: "Gym Fossil",
    credits: "Art by Sidney",
    description:
      "This humorous piece imagines a trilobite hitting the gym, complete with workout gear, highlighting the lighter side of ancient life.",
  },
  {
    image: fanArtImg8,
    title: "Fossil in Relief",
    credits: "Art by Riley",
    description:
      "A detailed and realistic rendering of a trilobite fossil, presented as if it were an intricate Renaissance relief sculpture.",
  },
];

const FanArts = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-2">
      <div className="max-w-[455px] sm:max-w-[655px]">
        <h1 className="font-poppins text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 mt-4">
          Fan Arts
        </h1>
        <p className="font-poppins text-xl text-left md:text-xl mb-8">
          Explore fan-created arts of Trilobites.
        </p>
      </div>
      <Gallery photosArr={photosArr} />
      <footer className="my-4"></footer>
    </div>
  );
};

export default FanArts;
