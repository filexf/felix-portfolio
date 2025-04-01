import React from "react";
import PhotoLandingPage from "../../assets/images/Photo GGB/Photo GGB-Landing page.jpg"
import ArrowLogo from "../../assets/icons/Main-icons/Vector-arrow-white.svg"


export default function LandingFrame() {
  return (
    <>
      <div className="frame-landingpage">
        <div className="frame-title-text">
          <div className="name-profession">
            <h1 className="title"> Félix Orain </h1>
            <p className="profession"> Developer and photographer</p>
          </div>
        </div>
        <div className="vector-arrow">
          <a href="#latest-works">
            <img src={ArrowLogo} className="blinking-arrow" alt="" />
          </a>
        </div>
        <div className="essai-relative">
          <img
            className="photo-landing-page"
            src={PhotoLandingPage}
            alt="Landscape photo"
          />
        </div>
      </div>
    </>
  );
}
