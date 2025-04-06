import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ title, images, text }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "#15151B",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          width: "80%",
          gap: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 className="font-main-sections" style={{ color: "#ffffff" }}>
          {title}
        </h2>
        <p className="body-font-white" style={{ marginBottom: "20px" }}>
          {text}
        </p>

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
