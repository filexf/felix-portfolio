import React from 'react'

import Gallery from '../../components/photos-components/PhotosGallery';

// Import images properly
import photo1 from "../../assets/images/Photos-landscape/Tests photos USA-126.jpg";
import photo2 from "../../assets/images/Photos-landscape/Tests photos USA-18.jpg";
import photo3 from "../../assets/images/Photos-landscape/Tests photos USA-32.jpg";
import photo4 from "../../assets/images/Photos-landscape/Tests photos USA-61.jpg";
import photo6 from "../../assets/images/Photos-landscape/Tests photos USA-71.jpg";
import photo7 from "../../assets/images/Photos-landscape/Tests photos USA-145.jpg";
import photo8 from "../../assets/images/Photos-landscape/Tests photos USA-147.jpg";
import photo9 from "../../assets/images/Photos-landscape/Tests photos USA-152.jpg";
import photo10 from "../../assets/images/Photos-landscape/Tests photos USA-154.jpg";
import photo11 from "../../assets/images/Photos-landscape/Tests photos USA-178.jpg";
import photo12 from "../../assets/images/Photos-landscape/Tests photos USA-184.jpg";
import photo13 from "../../assets/images/Photos-landscape/Tests photos USA-186.jpg";
import photo14 from "../../assets/images/Photos-landscape/Tests photos USA-199.jpg";
import photo15 from "../../assets/images/Photos-landscape/Tests photos USA-209.jpg";
import photo16 from "../../assets/images/Photos-landscape/Tests photos USA-233.jpg";
import photo17 from "../../assets/images/Photos-landscape/Tests photos USA-234.jpg";
import photo18 from "../../assets/images/Photos-landscape/Tests photos USA-291.jpg";


const images = [
  { src: photo6, title: "Landscape image" },
  { src: photo3, title: "Landscape image" },
  { src: photo4, title: "Landscape image" },
  { src: photo2, title: "Landscape image" },
  { src: photo1, title: "Landscape image" },
  { src: photo7, title: "Landscape image" },
  { src: photo8, title: "Landscape image" },
  { src: photo9, title: "Landscape image" },
  { src: photo10, title: "Landscape image" },
  { src: photo11, title: "Landscape image" },
  { src: photo12, title: "Landscape image" },
  { src: photo13, title: "Landscape image" },
  { src: photo14, title: "Landscape image" },
  { src: photo15, title: "Landscape image" },
  { src: photo16, title: "Landscape image" },
  { src: photo17, title: "Landscape image" },
  { src: photo18, title: "Landscape image" },
];


export default function LandscapePhotoPage() {
  return (
    <>
      <Gallery title={"Landscapes"} images={images} text={`As a photographer, I love landscapes for their ability to evoke both stillness and awe. Capturing the clouds drifting through Yosemite’s cliffs and valleys feels like preserving nature’s fleeting masterpieces. Each moment is unique, with light and weather transforming the scenery before my eyes. Shooting starry skies offers a humbling connection to the vastness of the universe, blending patience with wonder. Whether it’s misty forests or cosmic expanses, landscapes remind me of the beauty and grandeur of the world. Through my lens, I aim to share these timeless, breathtaking moments with others.

`}/>
    </>
  )
}
