import Gallery from "../components/Gallery";

import fanArtImg1 from "../assets/images/fanArt1.png";
import fanArtImg2 from "../assets/images/fanArt2.png";
import fanArtImg3 from "../assets/images/fanArt3.png";
import fanArtImg4 from "../assets/images/fanArt4.png";

const photosArr = [
  {
    image: fanArtImg1,
    title: "test",
    credits: "TriloFan Bob",
    description: "an amazing image",
  },
  {
    image: fanArtImg2,
    title: "test2",
    credits: "TriloFan Sarah",
    description: "an amazing image",
  },
  {
    image: fanArtImg3,
    title: "test3",
    credits: "TriloFan Sergio",
    description: "an amazing image",
  },
  {
    image: fanArtImg4,
    title: "test4",
    credits: "TriloFan Nina",
    description: "an amazing image",
  },
  {
    image: fanArtImg1,
    title: "test",
    credits: "TriloFan Bob",
    description: "an amazing image",
  },
  {
    image: fanArtImg2,
    title: "test2",
    credits: "TriloFan Sarah",
    description: "an amazing image",
  },
  {
    image: fanArtImg3,
    title: "test3",
    credits: "TriloFan Sergio",
    description: "an amazing image",
  },
  {
    image: fanArtImg4,
    title: "test4",
    credits: "TriloFan Nina",
    description: "an amazing image",
  },
];

const FanArts = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="max-w-[455px] sm:max-w-[655px]">
        <h1 className="font-poppins text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 mt-4">
          Fan Arts
        </h1>
        <p className="font-poppins text-xl text-left md:text-xl mb-8">
          Explore fan-created arts of Trilobites.
        </p>
      </div>
      <Gallery photosArr={photosArr} />
    </div>
  );
};

export default FanArts;
