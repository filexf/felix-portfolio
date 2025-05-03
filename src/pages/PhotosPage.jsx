import React from "react";
import Photo1 from "../assets/images/Photos-sport/Photo_dub_roofgap.jpg";
import Photo2 from "../assets/images/Important-photos/Photos Bangkok V1-33.jpg";
import Photo3 from "../assets/images/Important-photos/Photos HK chill-109.jpg";
import Photo4 from "../assets/images/Important-photos/Tests photos USA-147.jpg";

import iconLoupe from "../assets/icons/Main-icons/Loop-plus-icon.svg";

import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

export default function PhotosPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-12 flex w-4/5 flex-col items-center gap-[60px] p-5">
          <Reveal>
            <h2 className="text-center text-7xl font-bold leading-normal text-gradient my-10 ">Photography</h2>
            <p className="body-font mb-16">
              Since I was little, I’ve always been fascinated by art and
              adventure. I wanted to fulfill this deep need for adventure and be
              able to tell those stories in my own way. So, when I discovered
              photography a few years ago, an entirely new world opened up to
              me. Photography opened up an entirely new way of seeing the
              world—a lens through which every shadow, color, and frame held
              potential.
            </p>
            {/* The frame showcasing all the photos */}

            <div className="flex flex-wrap items-center justify-center gap-10">
              <Photo title={"Sport"} photo={Photo1} />
              <Photo title={"Mosaic"} photo={Photo2} />
              <Photo title={"Cityscape"} photo={Photo3} />
              <Photo title={"Landscape"} photo={Photo4} />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

function Photo({ photo, title }) {
  return (
    <>
      <Link to={`/photos/${title.toLowerCase()}`}>
        <div className="group relative overflow-hidden">
          {/* L'image va "scaler" quand on survole la div parent */}
          <img
            className="h-[33rem] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={photo}
            alt="Photo"
          />
          {/* Contenu visible lors du hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[rgba(23,_23,_23,_0.752)] text-[white] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-5xl leading-[normal] font-bold text-[#F5F5F5] text-shadow-md">
              {title}
            </p>
            <img
              className="h-[70px] w-[70px]"
              src={iconLoupe}
              alt="Loupe icon"
            />
          </div>
        </div>
      </Link>
    </>
  );
}
