import React from "react";
import profileImage from "../../assets/images/Important-photos/photo-profil-V2.jpg"
import aboutIcon from "../../assets/icons/Main-icons/About-icon.svg";

import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
    <>
      <Reveal>
        <SectionWrapper title={"About me"} icon={aboutIcon}>
          <div className="frame-about-photo-and-text">
            <img className="img-frame" src={profileImage} alt="Profile Image" />
            <p className="body-font text-width">
              I’m a recent graduate from Le Wagon with hands-on experience in
              web development, having built applications from scratch. I
              specialize in creating user-centric, visually engaging digital
              products by combining my programming skills with a foundation in
              graphic design and visual storytelling.
              <br /> <br />
              With a background in photography, I bring creativity and a unique
              perspective to my work. I’m excited to apply my skills to tackle
              real-world challenges and contribute to innovative projects in the
              tech industry.
            </p>
          </div>
        </SectionWrapper>
      </Reveal>
    </>
  );
}
