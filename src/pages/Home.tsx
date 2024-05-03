import CardButton from "../components/CardButton";
import cardImage from "../assets/images/card.png";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[655px] px-4">
        <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 pt-6">
          Trilobites: Ancient Wonders
        </h1>
        <p // Changed from Text to p for paragraphs, adjusted className to match
          className="font-poppins text-lg text-left md:text-xl"
        >
          Dive into the world of Trilobites, the early inhabitants of our
          oceans.
        </p>
        <div className="flex justify-center mt-6">
          <CardButton
            onClick={() => console.log("Card Button Pressed")} // Adjusted for web, assuming CardButton is adapted for onClick
            cardImage={cardImage}
            link="/fan-arts"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
