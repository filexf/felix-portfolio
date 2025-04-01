import React from "react";
import profileImage from "../../assets/images/Important-photos/photo profil-V2.png"
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
          </div>
        </div>
      </div>
    </>
  );
}
