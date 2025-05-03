import React from "react";
import coverCivilisation from "../assets/images/Couvertures magazines/Civilisation Mag.jpg";
import coverWizzyEnAsie from "../assets/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg";
import loop from "../assets/icons/Main-icons/Loop-plus-icon.svg";
import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

export default function BooksPage() {
  return (
    <>
      <Reveal>
        <div className="flex justify-center p-8">
          <div className="mt-[30px] flex w-4/5 flex-col items-center gap-12">
            <h1 className="text-gradient text-center text-7xl leading-normal font-bold">
              Books
            </h1>
            <p className="body-font mx-auto max-w-4xl text-center">
              I created two books showcasing five months of adventure in
              Southeast Asia, using my own photos and writing. Self-edited and
              sold over 500 copies, this experience taught me consistency in
              design and how to manage large-scale projects effectively.
            </p>

            {/* La carte de Civilisation */}
            <Reveal>
              <div className="mb-4 flex flex-wrap-reverse justify-center gap-[64px] self-stretch rounded-2xl border-1 border-gray-200 bg-slate-50 shadow-lg hover:bg-gray-100">
                <PhotoMagazine
                  link="/books/civilisation"
                  src={coverCivilisation}
                />
                <div className="flex flex-shrink-0 flex-grow basis-0 flex-col items-center justify-center gap-7">
                  <h2 className="text-gradient pt-5 text-center text-5xl font-bold">
                    Civilisation
                  </h2>
                  <p className="mb-3 p-2 text-center text-sm font-normal text-gray-700 md:p-3 md:text-base dark:text-gray-400">
                    The first book I made is “Civilisation”, narrating the
                    behind the scenes of the eponym film, watched by more than
                    5000 people. Civilisation is the adventure of 9 friends who
                    travel to the other side of the world to shoot a parkour and
                    adventure film in Southeast Asia. Follow them through their
                    filming journey across three different countries and
                    environments, where they faced a multitude of challenges.
                    Travel with them through this story and their breathtaking
                    photos. <br /> <br /> This book is 80 pages long and was
                    entirely edited by me. <br /> <br /> Click on it to read a
                    few pages !
                  </p>
                  <div className="flex gap-4">
                    {/* Bouton Galerie */}
                    <Link to="/books/civilisation">
                      <div className="group inline-flex items-center gap-3 rounded-full border border-gray-300 px-5 py-2 text-gray-600 transition-all duration-300 ease-in-out hover:border-gray-900 hover:text-gray-900">
                        <span className="text-sm font-medium tracking-wide">
                          See the gallery
                        </span>
                        <img
                          src={loop}
                          alt="View more"
                          className="h-4 w-4 transform transition-transform duration-300 group-hover:scale-110 invert"
                        />
                      </div>
                    </Link>

                    {/* Bouton Film */}
                    <a
                      href="https://www.youtube.com/watch?v=Q-gz6qA1h14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-full border border-gray-300 px-5 py-2 text-gray-600 transition-all duration-300 ease-in-out hover:border-gray-900 hover:text-gray-900"
                    >
                      <span className="text-sm font-medium tracking-wide">
                        See the movie
                      </span>
                      <svg
                        className="h-4 w-4 transform transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* La carte de Wizzy en Asie */}
            <Reveal>
              <div className="mb-4 flex flex-wrap justify-center gap-[64px] self-stretch rounded-2xl bg-slate-50 shadow-lg hover:bg-gray-100">
                <div className="flex flex-shrink-0 flex-grow basis-0 flex-col items-center justify-center gap-4">
                  <h2 className="text-gradient pt-5 pb-1 text-center text-5xl font-bold">
                    Wizzy en Asie
                  </h2>
                  <p className="mb-3 p-2 py-3 text-center text-sm font-normal text-gray-700 md:p-3 md:text-base dark:text-gray-400">
                    The second book I made is “Wizzy en Asie”, following the
                    journey of Civilisation. Wizzy in Asia is the adventure of 9
                    friends traveling to the other side of the world for several
                    months with the goal of practicing Parkour on the rooftops
                    of Asia’s megacities. Follow them on their journey as they
                    face a multitude of challenges. From leaping across the
                    massive rooftops of Bangkok to exploring a ghost town in
                    Malaysia and even being stranded together in Hong Kong for a
                    month, it’s an adventure packed with adrenaline. Experience
                    their story and breathtaking photos as you travel along with
                    them. <br /> <br /> This book is 112 pages long and was
                    entirely edited by me. <br /> <br /> Click on it to read a
                    few pages !
                  </p>
                  <Link to="/books/civilisation">
                    <div className="group inline-flex items-center gap-3 rounded-full border border-gray-300 px-5 py-2 text-gray-600 transition-all duration-300 ease-in-out hover:border-gray-900 hover:text-gray-900">
                      <span className="text-sm font-medium tracking-wide">
                        See the gallery
                      </span>
                      <img
                        src={loop}
                        alt="View more"
                        className="h-4 w-4 transform transition-transform duration-300 group-hover:scale-110 invert"
                      />
                    </div>
                  </Link>
                </div>
                <PhotoMagazine
                  link="/books/wizzyenasie"
                  src={coverWizzyEnAsie}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function PhotoMagazine({ link, src }) {
  return (
    <Link to={link}>
      <div className="group relative overflow-hidden rounded-2xl">
        <img
          className="w-[22rem] object-cover transition-transform duration-500 group-hover:scale-105"
          src={src}
          alt="Book cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <div className="flex justify-center gap-6 px-4 py-3">
                <p className="text-3xl font-bold text-white">See gallery</p>
                <img
                  src={loop}
                  alt="View more"
                  className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
