import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Optional, for styling
import ImageOne from '../assets/images/Photo-projets-dev/Photo Couverture Sportify.png';
import ImageTwo from '../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg';
import { FaImage } from 'react-icons/fa'; // Import a gallery icon (FaImage)


const images = [
  { src: ImageOne, alt: 'Image 1' },
  { src: ImageTwo, alt: 'Image 2' },

  // Add more images as needed
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = () => {
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="gallery-icon" onClick={openLightbox}>
        <FaImage size={40}/>
        <span>View Gallery</span>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        index={currentImageIndex}
        close={() => closeLightbox()}
        slides={images.map(image => ({ src: image.src, alt: image.alt }))}
      />
    </div>
  );
};

export default Gallery;
