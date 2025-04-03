import React from "react";
import Photo1 from "../assets/images/Photos-sport/Photo_dub_roofgap.jpg";
import Photo2 from "../assets/images/Important-photos/Photos Bangkok V1-33.jpg";
import Photo3 from "../assets/images/Important-photos/Photos HK chill-109.jpg";
import Photo4 from "../assets/images/Important-photos/Tests photos USA-147.jpg";

import iconLoupe from "../assets/icons/Main-icons/Loop-plus-icon.svg";

import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

export default function PhotosPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#15151B",
          display: "flex",
          flexDirection: "flex-column",
          justifyContent: "center",
        }}
      >
        <div className="frame-header-photos-page" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
          <Reveal>
            <h2 className="font-main-sections" style={{ color: "#ffffff", marginBottom: "40px", marginTop: "40px" }}>
              Photography
            </h2>
            <p className="body-font" style={{ color: "#ffffff", marginBottom: "50px" }}>
              Since I was little, I’ve always been fascinated by art and
              adventure. I wanted to fulfill this deep need for adventure and be
              able to tell those stories in my own way. So, when I discovered
              photography a few years ago, an entirely new world opened up to
              me. Photography opened up an entirely new way of seeing the
              world—a lens through which every shadow, color, and frame held
              potential.
            </p>
            {/* The frame showcasing all the photos */}

            <div className="frame-page-photos">
              <Photo title={"Sport"} photo={Photo1} />
              <Photo title={"Mosaic"} photo={Photo2} />
              <Photo title={"Cityscape"} photo={Photo3} />
              <Photo title={"Landscape"} photo={Photo4} />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

function Photo({ photo, title }) {
  return (
    <>
      <Link to={`/photos/${title.toLowerCase()}`}>
        <div className="container-photo">
          <img className="main-photo" src={photo} alt="Photo" />
          <div className="frame-loop-title">
            <p className="font-hover-photo">{title}</p>
            <img className="loop-plus-icon" src={iconLoupe} alt="Loupe icon" />
          </div>
        </div>
      </Link>
    </>
  );
}
