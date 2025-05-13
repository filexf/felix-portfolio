import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Opt

// Icons & pictures
import githubIcon from "../../assets/icons/Tech stack icons/Github-icon.svg";
import websiteIcon from "../../assets/icons/Main-icons/Website-icon.svg";
import galleryIcon from "../../assets/icons/Main-icons/Gallery-icon.svg";

import sportifyPicture from "../../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import tyMouetPicture from "../../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";
import portfolioPicture from "../../assets/images/Photo GGB/Photo-GGB-Squared.jpg";
import gisProject from "../../assets/images/Photo-projets-dev/Web Gis Cover Picture.jpg"

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

// Screenshots GIS Project
import screenshotGisProject1 from "../../assets/images/Screenshots-GIS-Project/WebGIS-project-screenshot-1.jpg";
import screenshotGisProject2 from "../../assets/images/Screenshots-GIS-Project/WebGIS-project-screenshot-2.jpg";


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
      { src: screenshotSportify1, alt: "Screenshot 1" },
      { src: screenshotSportify2, alt: "Screenshot 2" },
      { src: screenshotSportify3, alt: "Screenshot 3" },
      { src: screenshotSportify4, alt: "Screenshot 4" },
      { src: screenshotSportify5, alt: "Screenshot 5" },
      { src: screenshotSportify6, alt: "Screenshot 6" },
      { src: screenshotSportify7, alt: "Screenshot 7" },
      { src: screenshotSportify8, alt: "Screenshot 8" },
    ],
  },
  {
    title: "GIS PROJECT",
    description:
      "This project is a web GIS application that allows users to visualize and interact with geospatial data. It was built using React, Leaflet, and Mapbox, and it includes features such as map layers, markers, and popups. The application is designed to be user-friendly and responsive.",
    image: gisProject,
    githubLink: "https://github.com/filexf/webGIS-app", // Add actual link if available
    websiteLink: "https://data-visualizer-mocha.vercel.app/",
    images: [
      { src: screenshotGisProject1, alt: "Screenshot 1" },
      { src: screenshotGisProject2, alt: "Screenshot 2" },
    ],

  },
  {
    title: "PORTFOLIO",
    description:
      "This portfolio was built using React. I used React Router to implement several pages in order to host it on Github Pages and I used Framer Motion for animations. It showcases my projects, skills, and experience. I aimed for a clean and user-friendly design that I made myself.",
    image: portfolioPicture,
    githubLink: "https://github.com/filexf/felix-portfolio",
    websiteLink: "https://filexf.github.io/felix-portfolio/",
  },
  {
    title: "TY MOUET",
    description:
      "Ty Mouet was our first project at Le Wagon, a seagull-themed Airbnb clone built with Ruby on Rails, PostgreSQL, and AJAX. We handled a many-to-many database, deployed on Heroku, and worked in an agile team. Key features included booking logic, user authentication, and geolocation-based dynamic search.",
    image: tyMouetPicture,
    githubLink: "https://github.com/filexf/ty-mouet",
    websiteLink: "https://ty-mouet-c5897a5b74b0.herokuapp.com/",
    images: [
      { src: screenshotTyMouet1, alt: "Screenshot 1" },
      { src: screenshotTyMouet2, alt: "Screenshot 2" },
      { src: screenshotTyMouet3, alt: "Screenshot 3" },
      { src: screenshotTyMouet4, alt: "Screenshot 4" },
      { src: screenshotTyMouet5, alt: "Screenshot 5" },
      { src: screenshotTyMouet6, alt: "Screenshot 6" },
      { src: screenshotTyMouet7, alt: "Screenshot 7" },
      { src: screenshotTyMouet8, alt: "Screenshot 8" },
      { src: screenshotTyMouet9, alt: "Screenshot 9" },
    ],
  },
];

export function ProjectCard({
  title,
  description,
  image,
  githubLink,
  websiteLink,
  images,
}) {
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
    <>
      <Reveal>
        <div className="mb-2 flex flex-col rounded-2xl border-1 border-gray-200 bg-slate-50 shadow-md hover:bg-gray-100 md:flex md:items-center lg:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="h-64 w-full rounded-2xl object-cover md:flex md:h-96 md:w-96 md:justify-center"
            src={image}
            alt=""
          />

          <div className="flex flex-col gap-4 p-4 leading-normal md:p-7">
            <h5 className="text-gradient mb-2 text-center text-2xl font-bold tracking-tight md:text-4xl dark:text-white">
              {title}
            </h5>

            <p className="mb-3 p-2 text-center text-sm font-normal text-gray-700 md:p-3 md:text-base dark:text-gray-400">
              {description}
            </p>
            <div className="flex justify-center gap-5 md:gap-10">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="h-12 w-12 hover:scale-102 hover:opacity-75 md:h-15 md:w-15"
                />
              </a>
              {images && (
                <div className="cursor-pointer" onClick={openLightbox}>
                  <img
                    src={galleryIcon}
                    alt="Gallery Icon"
                    className="h-12 w-12 hover:scale-102 hover:opacity-75 md:h-15 md:w-15 "
                  />
                </div>
              )}
              <Lightbox
                open={isOpen}
                index={currentImageIndex}
                close={() => closeLightbox()}
                slides={
                  images &&
                  images.map((image) => ({
                    src: image.src,
                    alt: image.alt,
                  }))
                }
              />
              {websiteLink && (
                <a href={websiteLink} target="_blank">
                  <img
                    className="h-12 w-12 hover:scale-102 hover:opacity-75 md:h-15 md:w-15 "
                    src={websiteIcon}
                    alt="Website"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
