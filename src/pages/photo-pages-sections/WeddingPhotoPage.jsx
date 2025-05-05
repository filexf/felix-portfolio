import React from "react";
import Gallery from "../../components/photos-components/PhotosWeddingGallery";

// Import images properly
import photo1 from "../../assets/images/Photos-wedding/Wedding-photos 1.jpg";
import photo2 from "../../assets/images/Photos-wedding/Wedding-photos 2.jpg";
import photo3 from "../../assets/images/Photos-wedding/Wedding-photos 3.jpg";
import photo4 from "../../assets/images/Photos-wedding/Wedding-photos 4.jpg";
import photo5 from "../../assets/images/Photos-wedding/Wedding-photos 5.jpg";
import photo6 from "../../assets/images/Photos-wedding/Wedding-photos 6.jpg";
import photo7 from "../../assets/images/Photos-wedding/Wedding-photos 7.jpg";
import photo8 from "../../assets/images/Photos-wedding/Wedding-photos 8.jpg";
import photo9 from "../../assets/images/Photos-wedding/Wedding-photos 9.jpg";
import photo10 from "../../assets/images/Photos-wedding/Wedding-photos 10.jpg";
import photo11 from "../../assets/images/Photos-wedding/Wedding-photos 11.jpg";
import photo13 from "../../assets/images/Photos-wedding/Wedding-photos 13.jpg";
import photo14 from "../../assets/images/Photos-wedding/Wedding-photos 14.jpg";
import photo15 from "../../assets/images/Photos-wedding/Wedding-photos 15.jpg";
import photo16 from "../../assets/images/Photos-wedding/Wedding-photos 16.jpg";
import photo17 from "../../assets/images/Photos-wedding/Wedding-photos 17.jpg";
import photo18 from "../../assets/images/Photos-wedding/Wedding-photos 18.jpg";

// Define images array with proper imports
const images = [
  { src: photo14, title: "Wedding image" },
  { src: photo3, title: "Wedding image" },
  { src: photo17, title: "Wedding image" },
  { src: photo9, title: "Wedding image" },

  { src: photo10, title: "Wedding image" },
  { src: photo1, title: "Wedding image" },
  { src: photo5, title: "Wedding image" },
  { src: photo16, title: "Wedding image" },

  { src: photo11, title: "Wedding image" },
  { src: photo15, title: "Wedding image" },
  { src: photo18, title: "Wedding image" },
  { src: photo8, title: "Wedding image" },

  { src: photo2, title: "Wedding image" },
  { src: photo4, title: "Wedding image" },
  { src: photo7, title: "Wedding image" },
  { src: photo13, title: "Wedding image" },
];

export default function WeddingPhotoPage() {
  return (
    <>
      <Gallery
        title={"Wedding"}
        images={images}
        text={`Your wedding day is a unique story, and my goal is to capture it authentically and beautifully.

I focus on candid moments and genuine emotions while ensuring every detail, from the décor to the small gestures, is thoughtfully documented. My style combines natural photojournalism with creative storytelling, shaped by my background in filmmaking.  Here is a glimpse of the love and joy that fills the day.`}
      />
    </>
  );
}
