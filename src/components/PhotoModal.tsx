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
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <button onClick={handleClose} className="relative left-48">
        <XCircleIcon width={42} />
      </button>
    </div>
  );
};

export default PhotoModal;
