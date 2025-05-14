import React from "react";
import githubIcon from "../assets/icons/Main-icons/Github-icon-white.svg";
import instagramIcon from "../assets/icons/Main-icons/Instagram-icon.svg";
import linkedinIcon from "../assets/icons/Main-icons/Linkedin-icon-white.svg";
import { useTheme } from "../context/ThemeContext";
import "../styles/index.css";

export default function Footer({ noPadding }) {
  const { darkMode } = useTheme();

  return (
    // To make sure that there isn't the padding on the bottom of the page
    <div className={noPadding ? undefined : "bg-transparent pt-[15vh]"}>
      <div
        className="bottom-0 flex h-[20vh] w-full flex-col items-center justify-center gap-[20px]"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <ul className="flex gap-[25px]">
          <SocialIcon icon={githubIcon} link="https://github.com/filexf" />
          <SocialIcon
            icon={linkedinIcon}
            link="https://www.linkedin.com/in/felix-orain/"
          />
          <SocialIcon
            icon={instagramIcon}
            link="https://www.instagram.com/_filex_/?hl=fr"
            invert={!darkMode} // Inversé uniquement en mode clair
          />
        </ul>
        <p className="text-center" style={{ color: "var(--footer-text)" }}>
          Copyright Felix Orain © All rights reserved.
        </p>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link, invert }) {
  return (
    <li>
      <a href={link}>
        <img
          src={icon}
          alt="Social icon list"
          className={`w-[35px] hover:scale-110 hover:filter hover:[transition:all_0.3s] ${
            invert ? "contrast-[3]" : ""
          }`}
        />
      </a>
    </li>
  );
}
