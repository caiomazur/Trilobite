import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PhotoModalProps {
  isOpen: boolean;
  handleClose: () => void;
  image: string;
  title: string;
  description: string;
  credits: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  handleClose,
  image,
  title,
  description,
  credits,
}) => {
  if (!isOpen) return null;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="relative p-8 bg-white rounded-lg"
        onClick={stopPropagation}
      >
        <button onClick={handleClose} className="absolute top-1 right-1">
          <XCircleIcon width={30} />
        </button>
        <img
          src={image}
          alt={title}
          className="max-w-[350px] max-h-[350px] sm:max-w-[800px] sm:max-h-[500px] shadow-lg"
        />
        <h2 className="font-poppins font-semibold text-xl mt-4 text-black">
          {title}
        </h2>
        <p className="font-poppins text-sm max-w-[250px] sm:max-w-[450px] my-2 text-black">
          {description}
        </p>
        <aside className="font-poppins text-xs">{credits}</aside>
      </div>
    </div>
  );
};

export default PhotoModal;
