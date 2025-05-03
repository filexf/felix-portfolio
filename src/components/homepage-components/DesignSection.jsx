import React from "react";
import Photo1 from "../../assets/images/Couvertures magazines/Civilisation Mag.jpg";
import Photo2 from "../../assets/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg";
import SeeMore from "./SeeMore";
import DesignIcon from "../../assets/icons/Main-icons/Designs-icon.svg";

import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function DesignSection() {
  return (
    <Reveal>
      <SectionWrapper title={"Designs"} icon={DesignIcon}>
        <div className="flex flex-col gap-12">
          {/* Texte d'introduction */}
          <p className="body-font max-w-6xl mx-auto text-center">
            I created two books showcasing five months of adventure in Southeast
            Asia, using my own photos and writing. Self-edited and sold over 500
            copies, this experience taught me consistency in design and how to
            manage large-scale projects effectively.
          </p>

          {/* Grille de designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DesignCard photo={Photo1} />
            <DesignCard photo={Photo2} />
          </div>

          <SeeMore projectLink={"/books"} />
        </div>
      </SectionWrapper>
    </Reveal>
  );
}

function DesignCard({ photo }) {
  return (
    <Link to="/books">
      <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Container d'image avec ratio fixe */}
        <div className="aspect-[2/3] w-full h-[600px] ">
          <img
            src={photo}
            alt="Book Cover"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
