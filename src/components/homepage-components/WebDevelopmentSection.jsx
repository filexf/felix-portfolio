import React from "react";
import SeeMore from "./SeeMore";
import { Link } from "react-router-dom";

import sportifyPicture from "../../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import tyMouetPicture from "../../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";
import GoldenGatePicture from "../../assets/images/Photo GGB/Photo-GGB-Squared.jpg"

import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";


export default function WebDevelopmentSection() {
  return (
    <Reveal>
      <SectionWrapper title={"Web development"}>
        <div className="flex flex-col gap-12">
          <p className="body-font max-w-3xl mx-auto text-center">
          I graduated from Le Wagon and built real-world applications from scratch, gaining hands-on experience in web development. With a background in photography, I bring a strong sense of design, now combined with solid programming skills.
          </p>

          {/* Grille de projets mise à jour */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              image={sportifyPicture}
              title="SPORTIFY"
              path="/applications"
            />
            <ProjectCard
              image={tyMouetPicture}
              title="TY MOUET"
              path="/applications"
            />
            <ProjectCard
              image={GoldenGatePicture}
              title="PORTFOLIO"
              path="/applications"
            />
          </div>

          <SeeMore projectLink={"/applications"} />
        </div>
      </SectionWrapper>
    </Reveal>
  );
}


function ProjectCard({ image, title, path }) {
  return (
    <Link to={path}>
      <div className="group relative overflow-hidden rounded-2xl h-[300px] transition-all duration-300 hover:-translate-y-1 shadow-lg">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay avec titre qui apparaît au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex items-center justify-center p-8">
          <h3 className="text-4xl font-bold text-white tracking-wider transform translate-y-4
            group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

// Mise à jour du container des cartes dans le composant principal
