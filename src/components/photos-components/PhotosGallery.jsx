import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ title, images, text }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex w-full justify-center pt-[40px] pb-[120px]">
      <div className="flex w-4/5 flex-col gap-[40px]">
        <h2 className="font-main-sections">
          {title}
        </h2>
        <p className="body-font mb-20px">{text}</p>

        <div className="photos-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.title}
              className="thumbnail"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
              style={{ cursor: "pointer", width: "250px", margin: "5px" }}
              loading="lazy"
            />
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({ src: img.src, title: img.title }))}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
