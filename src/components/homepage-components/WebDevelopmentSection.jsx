import React from "react";
import SeeMore from "./SeeMore";
import { Link } from "react-router-dom";

import webDevLogo from "../../assets/icons/Main-icons/Web-development-icon.svg";
import sportifyPicture from "../../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import tyMouetPicture from "../../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";

import Reveal from "../Reveal";

export default function WebDevelopmentSection() {
  return (
    <>
      <Reveal>
        <div className="frames-layouts-landing-page-with-see-more">
          <div className="frames-layouts-landing-page">
            <div className="frames-layouts-landing-page-logo">
              <img
                className="logo-layouts-landing-page"
                src={webDevLogo}
                alt="Web development icon"
              />
            </div>
            <div className="frames-layouts-landing-page-content">
              <h2 className="header-layouts-landing-page">Web development</h2>
              <p className="body-font">
                I graduated from Le Wagon and built real-world applications from
                scratch, gaining hands-on experience in web development. With a
                background in photography, I bring a strong sense of design, now
                combined with solid programming skills.{" "}
              </p>{" "}
              <div className="animation-carrousel">
                <Link to="/applications">
                  <ImageText
                    nom={"sportify"}
                    image={sportifyPicture}
                    text={"SPORTIFY"}
                  />
                  <ImageText
                    nom={"tymouet"}
                    image={tyMouetPicture}
                    text={"TY MOUET"}
                  />
                </Link>
              </div>
              <SeeMore />
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function ImageText({ nom, image, text }) {
  return (
    <div className={`image-animated ${nom}-animation`}>
      <img className="img-web-dev" src={image} alt="Photos web dev project" />
      <p className="font-header-applications"> {text} </p>
    </div>
  );
}
