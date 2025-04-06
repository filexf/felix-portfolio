import React from "react";
import photoIcon from "../../assets/icons/Main-icons/Photography-icon.svg";
import SeeMore from "./SeeMore";
import { Link } from "react-router-dom";

import Photo1 from "../../assets/images/Important-photos/Tests photos USA-147.jpg";
import Photo2 from "../../assets/images/Important-photos/Photos Bangkok V1-33.jpg";
import Photo3 from "../../assets/images/Important-photos/Photos HK chill-109.jpg";
import Photo4 from "../../assets/images/Important-photos/Photos HK chill-132.jpg";

import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function PhotographySection() {
  const photos = [Photo1, Photo2, Photo3, Photo4];

  return (
    <>
      <Reveal>
        <SectionWrapper title={"Photography"} icon={photoIcon}>
          <p className="body-font">
            Since I was little, I’ve always been fascinated by art and
            adventure. I wanted to fulfill this deep need for adventure and be
            able to tell those stories in my own way. So, when I discovered
            photography a few years ago, an entirely new world opened up to me.
          </p>
          <div className="img-list">
            {photos.map((photo, index) => (
              <Photo
                key={index}
                photo={photo}
                className={index % 2 === 0 ? "img1" : "img2"}
              />
            ))}
          </div>
          <SeeMore projectLink={"/photos"} />
        </SectionWrapper>
      </Reveal>
    </>
  );
}

function Photo({ photo, className }) {
  return (
    <div className="zoom-effect-photos">
      <Link to="/photos">
        <img className={className} src={photo} alt="Photography" />
      </Link>
    </div>
  );
}
