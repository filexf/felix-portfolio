import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Opt

// Icons & pictures
import githubIconWhite from "../../assets/icons/Main-icons/Github-icon-white.svg";
import websiteIconWhite from "../../assets/icons/Main-icons/Website-icon-white.svg";
import sportifyPicture from "../../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import tyMouetPicture from "../../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";
import portfolioPicture from "../../assets/images/Photo GGB/Photo GGB-Landing page.webp";

import galleryIcon from "../../assets/icons/Main-icons/Gallery-icon.svg";

// Screenshots Sportify
import screenshotSportify1 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-1.jpg";
import screenshotSportify2 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-2.jpg";
import screenshotSportify3 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-3.jpg";
import screenshotSportify4 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-4.jpg";
import screenshotSportify5 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-5.jpg";
import screenshotSportify6 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-6.jpg";
import screenshotSportify7 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-7.jpg";
import screenshotSportify8 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-8.jpg";

// Screenshots Ty Mouet
import screenshotTyMouet1 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-1.jpeg";
import screenshotTyMouet2 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-2.jpeg";
import screenshotTyMouet3 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-3.jpeg";
import screenshotTyMouet4 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-4.jpeg";
import screenshotTyMouet5 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-5.jpeg";
import screenshotTyMouet6 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-6.jpeg";
import screenshotTyMouet7 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-7.jpeg";
import screenshotTyMouet8 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-8.jpeg";
import screenshotTyMouet9 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-9.jpeg";

import Reveal from "../Reveal";


// Project data
export const projects = [
  {
    title: "SPORTIFY",
    description:
      "Sportify is a PWA built with Ruby on Rails, PostgreSQL, and Javascript with AJAX to connect users with sports partners by browsing or creating local events. We designed it in Figma, used Bootstrap for the UI, and deployed it on Heroku with a custom domain. The project was then presented in front of a big crowd.",
    image: sportifyPicture,
    githubLink: "https://github.com/filexf/sportify",
    websiteLink: "#", // Add actual link if available
    images: [
      {src: screenshotSportify1, alt: "Screenshot 1"},
      {src: screenshotSportify2, alt: "Screenshot 2"},
      {src: screenshotSportify3, alt: "Screenshot 3"},
      {src: screenshotSportify4, alt: "Screenshot 4"},
      {src: screenshotSportify5, alt: "Screenshot 5"},
      {src: screenshotSportify6, alt: "Screenshot 6"},
      {src: screenshotSportify7, alt: "Screenshot 7"},
      {src: screenshotSportify8, alt: "Screenshot 8"},
    ]
  },
  {
    title: "TY MOUET",
    description:
      "Ty Mouet was our first project at Le Wagon, a seagull-themed Airbnb clone built with Ruby on Rails, PostgreSQL, and AJAX. We handled a many-to-many database, deployed on Heroku, and worked in an agile team. Key features included booking logic, user authentication, and geolocation-based dynamic search.",
    image: tyMouetPicture,
    githubLink: "https://github.com/filexf/ty-mouet",
    websiteLink: "https://ty-mouet-c5897a5b74b0.herokuapp.com/",
    images: [
      {src: screenshotTyMouet1, alt: "Screenshot 1"},
      {src: screenshotTyMouet2, alt: "Screenshot 2"},
      {src: screenshotTyMouet3, alt: "Screenshot 3"},
      {src: screenshotTyMouet4, alt: "Screenshot 4"},
      {src: screenshotTyMouet5, alt: "Screenshot 5"},
      {src: screenshotTyMouet6, alt: "Screenshot 6"},
      {src: screenshotTyMouet7, alt: "Screenshot 7"},
      {src: screenshotTyMouet8, alt: "Screenshot 8"},
      {src: screenshotTyMouet9, alt: "Screenshot 9"},
    ]
  },
  {
    title: "PORTFOLIO",
    description:
      "This portfolio was built using React. I used React Router to implement several pages in order to host it on Github Pages and I used Framer Motion for animations. It showcases my projects, skills, and experience. I aimed for a clean and user-friendly design that I made myself.",
    image: portfolioPicture,
    githubLink: "https://github.com/filexf/felix-portfolio",
    websiteLink: "https://filexf.github.io/felix-portfolio/",

  }
];


export function ProjectCard({ title, description, image, githubLink, websiteLink, images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = () => {
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <Reveal>
      <div className="container-photo-app">
        <img className="frame-application" src={image} alt={title} />
        <p className="font-header-applications center-title-application">
          {title}
        </p>
        <div className="frame-hovered-content-application">
          <p className="font-header-applications">{title}</p>
          <p className="body-font font-hovered">{description}</p>
          <div className="icons-projects">
            <p className="body-font font-hovered">Check it out:</p>
            {images && <div className="gallery-icon" onClick={openLightbox} style={{ cursor: "pointer" }}>
              <img
                src={galleryIcon}
                alt="Gallery Icon"
                className="gallery-icon"
              />
            </div>}
            {/* Lightbox */}
            <Lightbox
              open={isOpen}
              index={currentImageIndex}
              close={() => closeLightbox()}
              slides={ images && images.map((image) => ({
                src: image.src,
                alt: image.alt,
              }))}
            />
            <a href={githubLink} target="_blank">
              <img
                className="loop-plus-icon"
                src={githubIconWhite}
                alt="GitHub"
              />
            </a>
            {websiteLink && (
              <a href={websiteLink} target="_blank">
                <img
                  className="loop-plus-icon"
                  src={websiteIconWhite}
                  alt="Website"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
