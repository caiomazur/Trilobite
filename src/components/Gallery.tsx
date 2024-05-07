import React from "react";

interface PhotoElem {
  image: string;
  title: string;
  description?: string;
  credits?: string;
}

interface GaleryProps {
  photosArr: PhotoElem[];
}

const Gallery: React.FC<GaleryProps> = ({ photosArr }) => {
  return (
    <div className="flex flex-row gap-6 items-center justify-center flex-wrap">
      {photosArr &&
        photosArr.map((photo, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start border-[15px] border-white rounded-md shadow-xl"
            >
              <img
                className="object-cover w-64 h-48"
                alt={"Fan Art index"}
                src={photo.image}
              />
              <h4>{photo.title}</h4>
              {/* <p>{photo.credits && photo.credits}</p> */}
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
