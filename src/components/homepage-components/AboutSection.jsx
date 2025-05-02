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
          <div className="flex flex-col items-center gap-8 w-full mt-4 lg:flex-row lg:justify-center lg:gap-[100px]">
            <img
              className="h-[400px] w-auto rounded-[30px] shadow-md mb-4 lg:h-[410px]"
              src={profileImage}
              alt="Profile Image"
            />
            <div className="flex flex-col justify-center items-center gap-4 mt-6">
              <p className="body-font text-start lg:text-left">
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
              <button className="group mt-[15px] mb-4 flex h-[2.8rem] w-[fit-content] flex-shrink-0 items-center justify-center gap-[16px] rounded-[20px] border-[2px] border-black px-[22px] py-[2px] text-[large] font-semibold shadow-md transition-all duration-300 hover:bg-[black]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="479"
                  height="501"
                  viewBox="0 0 479 501"
                  fill="none"
                  className="h-6 w-4 fill-black [transition:fill_300ms_ease-in-out] group-hover:fill-[white]"
                >
                  <path
                    d="M478.609 321.67V473.043C478.609 488.626 466.365 500.87 450.783 500.87H27.8261C12.2435 500.87 0 488.626 0 473.043V321.67C0 306.087 12.2435 293.843 27.8261 293.843C43.4087 293.843 55.6522 306.087 55.6522 321.67V445.217H422.957V321.67C422.957 306.087 435.2 293.843 450.783 293.843C466.365 293.843 478.609 306.087 478.609 321.67ZM219.27 356.174C224.278 361.739 231.513 364.522 239.304 364.522C247.096 364.522 253.774 361.739 259.339 356.174L370.087 242.643C380.661 231.513 380.661 214.261 369.53 203.13C358.4 192.557 341.148 192.557 330.017 203.687L267.13 268.8V27.8261C267.13 12.2435 254.887 0 239.304 0C223.722 0 211.478 12.2435 211.478 27.8261V268.8L148.035 204.243C137.461 193.113 119.652 193.113 108.522 203.687C97.3913 214.261 97.3913 232.07 107.965 243.2L219.27 356.174Z"
                  />
                </svg>
                <a
                  href={Resume}
                  download
                  className="text-[black] [transition:ease-in-out_300ms] group-hover:text-white"
                >
                  My Resume
                </a>
              </button>
            </div>
          </div>
        </SectionWrapper>
      </Reveal>
    </>
  );
}
