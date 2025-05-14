import React from "react";
import Photo1 from "../assets/images/Photos-sport/Photo_dub_roofgap.jpg";
import Photo2 from "../assets/images/Important-photos/Photos Bangkok V1-33.jpg";
import Photo3 from "../assets/images/Important-photos/Photos HK chill-109.jpg";
import Photo4 from "../assets/images/Important-photos/Tests photos USA-147.jpg";
import Photo5 from "../assets/images/Photos-wedding/Wedding-photos 14.jpg"

import iconLoupe from "../assets/icons/Main-icons/Loop-plus-icon.svg";

import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

export default function PhotosPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-12 flex w-4/5 flex-col items-center gap-12 p-5">
          <Reveal>
            <h2 className="text-gradient text-center text-7xl font-bold leading-normal my-10">
              Photography
            </h2>
            <p className="body-font max-w-4xl mx-auto text-center mb-16">
              Since I was little, I've always been fascinated by art and
              adventure. I wanted to fulfill this deep need for adventure and be
              able to tell those stories in my own way. So, when I discovered
              photography a few years ago, an entirely new world opened up to me.
            </p>

            {/* Grille de photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
              <PhotoCard title="Sport" photo={Photo1} />
              <PhotoCard title="Mosaic" photo={Photo2} />
              <PhotoCard title="Cityscape" photo={Photo3} />
              <PhotoCard title="Landscape" photo={Photo4} />
              <PhotoCard title="Wedding" photo={Photo5} />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

function PhotoCard({ photo, title }) {
  return (
    <Link to={`/photos/${title.toLowerCase()}`}>
      <div className="vertical-animation my-3 group flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-gray-200/10 hover:bg-white/10 transition-all duration-300 shadow-lg">

        <div className="relative overflow-hidden">
          <div className="h-[500px] w-full">
            <img
              src={photo}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>


          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/25 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm
                flex items-center justify-center">
                <img
                  src={iconLoupe}
                  alt="View more"
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Titre en bas de carte */}
        <div className="p-4 bg-slate-50">
          <h3 className="text-3xl font-bold text-center text-gradient">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
