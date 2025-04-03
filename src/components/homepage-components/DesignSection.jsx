import React from "react";
import Photo1 from "../../assets/images/Couvertures magazines/Civilisation Mag.jpg";
import Photo2 from "../../assets/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg";
import SeeMore from "./SeeMore";
import DesignIcon from "../../assets/icons/Main-icons/Designs-icon.svg"

import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function DesignSection() {
  return (
    <>
    <Reveal>

      <div className="frames-layouts-landing-page-with-see-more">
        <div className="frames-layouts-landing-page">
          <div className="frames-layouts-landing-page-logo">
            <img
              className="logo-layouts-landing-page"
              src={DesignIcon}
              alt="Designs-icon"
              />
          </div>
          <div className="frames-layouts-landing-page-content">
            <h2 className="header-layouts-landing-page">Designs</h2>
            <p className="body-font">
              I had the opportunity to make 2
              books depicting 5 months of adventure through south east Asia. I
              wrote the story, used my own photos and edited all by myself, they
              got sold by more than 500 copies. During these months of crafting
              I gained a lot of knowledge about how to stay consistent in
              designing and mainly how to tackle a huge project like this one.
            </p>
            <div className="frame-magazines-cover">
              <Image photo={Photo1}/>
              <Image photo={Photo2}/>
            </div>
            <SeeMore />
          </div>
        </div>
      </div>
      </Reveal>
    </>
  );
}

function Image({photo}) {
  return (
    <div className="zoom-effect-photos">
      <Link to="/books">
        <img
          src={photo}
          alt="Photos Magazines"
        />
      </Link>
    </div>
  );
}
