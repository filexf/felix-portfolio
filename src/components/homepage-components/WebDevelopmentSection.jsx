import React from "react";
import SeeMore from "./SeeMore";
import { Link } from "react-router-dom";

import webDevLogo from "../../assets/icons/Main-icons/Web-development-icon.svg";
import sportifyPicture from "../../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import tyMouetPicture from "../../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";

import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function WebDevelopmentSection() {
  return (
    <>
      <Reveal>
        <SectionWrapper title={"Web development"} icon={webDevLogo}>
          <p className="body-font">
            I graduated from Le Wagon and built real-world applications from
            scratch, gaining hands-on experience in web development. With a
            background in photography, I bring a strong sense of design, now
            combined with solid programming skills.
          </p>
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
          <SeeMore projectLink={"/applications"} />
        </SectionWrapper>
      </Reveal>
    </>
  );
}

function ImageText({ nom, image, text }) {
  return (
    <div className={`image-animated ${nom}-animation`}>
      <img className="flex [aspect-ratio:16_/_9] h-[48vh] object-cover items-center gap-[11px] mr-[40px] rounded-[55px] border-[5px] border-black shadow-md" src={image} alt="Photos web dev project" />
      <p className="font-header-applications"> {text} </p>
    </div>
  );
}
