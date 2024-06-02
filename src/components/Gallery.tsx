import React, { useState } from "react";
import PhotoModal from "./PhotoModal";
import Footer from "./Footer";

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
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoElem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (photo: PhotoElem) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-row gap-6 items-center justify-center flex-wrap mb-2">
      {photosArr &&
        photosArr.map((photo, index) => {
          return (
            <button
              key={index}
              className="flex flex-col items-start border-[15px] border-white rounded-md shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => handleModalOpen(photo)}
            >
              <img
                className="object-cover w-64 h-48"
                alt={"Fan Art index"}
                src={photo.image}
              />
              <h4 className="font-poppins font-semibold mt-2">{photo.title}</h4>
              {/* <p>{photo.credits && photo.credits}</p> */}
            </button>
          );
        })}
      {selectedPhoto && (
        <PhotoModal
          isOpen={isModalOpen}
          handleClose={handleModalClose}
          image={selectedPhoto.image}
          title={selectedPhoto.title}
          description={selectedPhoto.description || ""}
          credits={selectedPhoto.credits || ""}
        />
      )}
      <div className="mt-8">
        <p className="font-poppins font-semibold text-lg mb-2">
          Got fan art? Send it to{" "}
          <a
            href="mailto:trilo.tales@gmail.com"
            className="text-primary-purple underline"
          >
            trilo.tales@gmail.com
          </a>
        </p>
        <p className="font-poppins text-md">
          Your artwork could be featured here!
        </p>
      </div>
    </div>
  );
};

export default Gallery;
