import React from "react";
import "../styles/index.css";
import githubIcon from "../assets/icons/Main-icons/Github-icon-white.svg";
import linkedinIcon from "../assets/icons/Main-icons/Linkedin-icon-white.svg";
import instagramIcon from "../assets/icons/Main-icons/Instagram-icon.svg";

export default function Footer({noPadding}) {
  return (
    // To make sure that there isn't the padding on the bottom of the page
    <div className={noPadding ? undefined : "footer-padding"}>
      <div className="footer-frame">
        <div className="social-icons-list">
          <ul>
            <li>
              <a href="https://github.com/filexf">
                <img src={githubIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/felix-orain/">
                <img src={linkedinIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_filex_/?hl=fr">
                <img src={instagramIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <p>
          Copyright Felix Orain © All rights reserved.
        </p>
      </div>
    </div>
  );
}
