import React from "react";
import SeeMore from "./SeeMore";
import { Link } from "react-router-dom";

import Photo1 from "../../assets/images/Important-photos/Tests photos USA-147.jpg";
import Photo2 from "../../assets/images/Important-photos/Photos Bangkok V1-33.jpg";
import Photo3 from "../../assets/images/Important-photos/Photos HK chill-109.jpg";
import Photo4 from "../../assets/images/Important-photos/Photos HK chill-132.jpg";

import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function PhotographySection() {
  const photos = [Photo1, Photo2, Photo3, Photo4];








  

  return (
    <Reveal>
      <SectionWrapper title={"Photography"}>
        <div className="flex flex-col gap-12 items">
          {/* Texte d'introduction */}
          <p className="body-font max-w-3xl mx-auto text-center">
            Since I was little, I've always been fascinated by art and
            adventure. I wanted to fulfill this deep need for adventure and be
            able to tell those stories in my own way. So, when I discovered
            photography a few years ago, an entirely new world opened up to me.
          </p>

          {/* Grille de photos */}
          <div className="flex gap-10">
            {photos.map((photo, index) => (
              <PhotoCard key={index} photo={photo} />
            ))}
          </div>

          <SeeMore projectLink={"/photos"} />
        </div>
      </SectionWrapper>
    </Reveal>
  );
}

function PhotoCard({ photo }) {
  return (
    <Link to="/photos">
      <div className="group relative overflow-hidden rounded transition-all duration-300 hover:-translate-y-1 shadow-xl mb-2">
        {/* Container d'image avec ratio aspect */}
        <div className=" w-full h-[450px] relative overflow-hidden rounded ">
          <img
            src={photo}
            alt="Photography"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {/* Icône d'appareil photo */}
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
              flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
