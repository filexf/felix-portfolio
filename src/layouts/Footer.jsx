import React from "react";
import "../styles/index.css";
import githubIcon from "../assets/icons/Main-icons/Github-icon-white.svg";
import linkedinIcon from "../assets/icons/Main-icons/Linkedin-icon-white.svg";
import instagramIcon from "../assets/icons/Main-icons/Instagram-icon.svg";

export default function Footer({ noPadding }) {
  return (
    // To make sure that there isn't the padding on the bottom of the page
    <div className={noPadding ? undefined : "bg-transparent pt-[15vh]"}>
      <div className="bottom-0 flex h-[20vh] w-full flex-col items-center justify-center gap-[20px] bg-[#2e2e32]">
        <ul className="flex gap-[25px]">
          <SocialIcon icon={githubIcon} link="https://github.com/filexf" />
          <SocialIcon
            icon={linkedinIcon}
            link="https://www.linkedin.com/in/felix-orain/"
          />
          <SocialIcon
            icon={instagramIcon}
            link="https://www.instagram.com/_filex_/?hl=fr"
          />
        </ul>
        <p className="text-center text-white">
          Copyright Felix Orain © All rights reserved.
        </p>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <li>
      <a href={link}>
        <img
          src={icon}
          alt="Social icon list"
          className="w-[35px] contrast-[3] hover:scale-110 hover:filter hover:[transition:all_0.3s]"
        />
      </a>
    </li>
  );
}
