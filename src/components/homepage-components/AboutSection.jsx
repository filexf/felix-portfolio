import React from "react";
import profileImage from "../../assets/images/Important-photos/photo-profil-V2.jpg";
import aboutIcon from "../../assets/icons/Main-icons/About-icon.svg";

import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";
import Resume from "/FelixOrain-CV.pdf";

export default function AboutSection() {
  return (
    <>
      <Reveal>
        <SectionWrapper title={"About me"} icon={aboutIcon}>
          <div className="lg:width-[80%] lg:pl-12 mt-2 flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:justify-center lg:gap-10">
            <img
              className="mb-2 h-[400px] w-auto rounded-4xl shadow-md lg:h-[400px]"
              src={profileImage}
              alt="Profile Image"
            />
            <div className="mt-4 flex flex-col items-center justify-center gap-10">
              <p className="body-font max-width-md w-[80%] text-start lg:text-left">
                I’m a creative web developer with a strong background in
                photography and design. For years, I’ve loved exploring ways to
                bring ideas to life through visuals and storytelling, honing my
                eye for detail and aesthetics.
                <br /> <br />
                Now, I’m channeling that passion into crafting intuitive,
                user-friendly digital experiences. I’m currently expanding my
                skills by learning Ruby on Rails and React, eager to combine my
                creative background with new technical expertise to build
                meaningful and engaging products.
              </p>
              <a
                href={Resume}
                download
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gray-400 px-5 py-2 text-gray-600 transition-all duration-300 ease-in-out hover:border-gray-900 hover:text-gray-900"
              >
                <span className="text-sm font-medium tracking-wide">
                  My resume
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-y-[2px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 4h12v-2H6v2z" />
                </svg>
              </a>
            </div>
          </div>
        </SectionWrapper>
      </Reveal>
    </>
  );
}
