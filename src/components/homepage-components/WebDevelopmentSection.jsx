import React from "react";
import SeeMore from "./SeeMore";
import {Link} from "react-router-dom";

import webDevLogo from "../../assets/icons/Main-icons/Web-development-icon.svg";
import sportifyPicture from "../../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import tyMouetPicture from "../../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";

export default function WebDevelopmentSection() {
  return (
    <>
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
              I am a recent graduate from Le Wagon, where I gained hands-on
              experience in web development and built web applications from
              scratch. This journey not only enhanced my technical skills but
              also gave me the confidence to tackle real-world challenges in the
              tech industry. Coming from a photography background, I have always
              been passionate about visual storytelling and creativity. With my
              newfound knowledge in programming and my foundations in graphic
              design, I am excited to merge these skills to create user-centric,
              visually engaging digital products. I now have the tools and
              determination to carve out a space for myself in the dynamic world
              of tech, and I look forward to contributing to innovative projects
              that make a difference.
            </p>
            <div className="animation-carrousel">
              <Link to="/applications">
                <ImageText nom={"sportify"} image={sportifyPicture} text={"SPORTIFY"}/>
                <ImageText nom={"tymouet"} image={tyMouetPicture} text={"TY MOUET"}/>
              </Link>
            </div>
            <SeeMore />
          </div>
        </div>
      </div>
    </>
  );
}

function ImageText({nom, image, text }) {

  return (
    <div className={`image-animated ${nom}-animation`}>
      <img
        className="img-web-dev"
        src={image}
        alt="Photos web dev project"
      />
      <p className="font-header-applications"> {text} </p>
    </div>
  );
}
