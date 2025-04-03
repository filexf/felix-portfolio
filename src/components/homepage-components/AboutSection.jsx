import React from "react";
import profileImage from "../../assets/images/Important-photos/photo_profil-V2.jpg"
import aboutIcon from "../../assets/icons/Main-icons/About-icon.svg"

export default function AboutSection() {
  return (
    <>
      <div className="frames-layouts-landing-page">
        <div className="frames-layouts-landing-page-logo">
          <img
            className="logo-layouts-landing-page"
            src={aboutIcon}
            alt="About-me-icon"
            style={{ width: "55px", height: "55px" }}
          />
        </div>
        <div className="frames-layouts-landing-page-content">
          <h2 className="header-layouts-landing-page">About me</h2>
          <div className="frame-about-photo-and-text">
            <img
              className="img-frame"
              src={profileImage}
              alt="Profile Image"
            />
            <p className="body-font text-width">
            I’m a recent graduate from Le Wagon with hands-on experience in web development, having built applications from scratch. I specialize in creating user-centric, visually engaging digital products by combining my programming skills with a foundation in graphic design and visual storytelling.
            <br /> <br />
            With a background in photography, I bring creativity and a unique perspective to my work. I’m excited to apply my skills to tackle real-world challenges and contribute to innovative projects in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
