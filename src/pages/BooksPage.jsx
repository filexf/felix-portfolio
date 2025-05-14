import React from "react";
import { Link } from "react-router-dom";
import loop from "../assets/icons/Main-icons/Loop-plus-icon.svg";
import coverCivilisation from "../assets/images/Couvertures magazines/Civilisation Mag.jpg";
import coverWizzyEnAsie from "../assets/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg";
import { useTheme } from "../context/ThemeContext";

import Reveal from "../components/Reveal";

export default function BooksPage() {
  const { darkMode } = useTheme();

  return (
    <>
      <Reveal>
        <div className="flex justify-center p-4 sm:p-8">
          <div className="mt-[30px] flex w-full flex-col items-center gap-8 sm:w-[90%] sm:gap-12 lg:w-4/5">
            <h1 className="text-gradient text-center text-5xl leading-normal font-bold sm:text-7xl">
              Books
            </h1>
            <p className="body-font mx-auto max-w-4xl px-4 text-center">
              I created two books showcasing five months of adventure in
              Southeast Asia, using my own photos and writing. Self-edited and
              sold over 500 copies, this experience taught me consistency in
              design and how to manage large-scale projects effectively.
            </p>

            {/* Civilisation Book */}
            <BookCard
              title="Civilisation"
              description="The first book I made is Civilisation, narrating the behind the scenes of the eponym film, watched by more than 5000 people. Civilisation is the adventure of 9 friends who travel to the other side of the world to shoot a parkour and adventure film in Southeast Asia. Follow them through their filming journey across three different countries and environments, where they faced a multitude of challenges. Travel with them through this story and their breathtaking photos. <br /> <br /> This book is 80 pages long and was entirely edited by me. <br /> <br /> Click on it to read a few pages !"
              coverImage={coverCivilisation}
              galleryLink="/books/civilisation"
              reverseLayout={true}
              hasFilmLink={true}
              filmLink="https://www.youtube.com/watch?v=Q-gz6qA1h14"
              darkMode={darkMode}
            />

            {/* Wizzy en Asie Book */}
            <BookCard
              title="Wizzy en Asie"
              description="The second book I made is Wizzy en Asie, following the journey of Civilisation. Wizzy in Asia is the adventure of 9 friends traveling to the other side of the world for several months with the goal of practicing Parkour on the rooftops of Asia's megacities. Follow them on their journey as they face a multitude of challenges. From leaping across the massive rooftops of Bangkok to exploring a ghost town in Malaysia and even being stranded together in Hong Kong for a month, it's an adventure packed with adrenaline. Experience their story and breathtaking photos as you travel along with them. <br /> <br /> This book is 112 pages long and was entirely edited by me. <br /> <br /> Click on it to read a few pages !"
              coverImage={coverWizzyEnAsie}
              galleryLink="/books/wizzyenasie"
              reverseLayout={false}
              darkMode={darkMode}
            />
          </div>
        </div>
      </Reveal>
    </>
  );
}

function BookCard({
  title,
  description,
  coverImage,
  galleryLink,
  reverseLayout,
  hasFilmLink,
  filmLink,
  darkMode,
}) {
  return (
    <Reveal>
      <div
        className={`vertical-animation my-3 flex flex-col lg:flex-${reverseLayout ? "row-reverse" : "row"} w-full items-center justify-center gap-8 rounded-2xl border-1 border-gray-200 bg-slate-50 p-4 shadow-lg transition-all duration-300 hover:bg-gray-100 sm:p-6 md:gap-[64px]`}
      >
        {/* Le contenu texte */}
        <div className="flex w-full flex-col items-center justify-center gap-5 px-2 sm:gap-7 sm:px-4 lg:w-1/2">
          <h2 className="text-gradient pt-2 text-center text-3xl font-bold sm:pt-5 sm:text-5xl">
            {title}
          </h2>
          <p
            className="mb-2 p-1 text-center text-sm sm:mb-3 sm:p-2 sm:text-base"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <div className="mb-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            {/* Bouton Galerie */}
            <Link to={galleryLink}>
              <div className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-300 sm:gap-3 sm:px-5">
                <span className="text-xs font-medium tracking-wide sm:text-sm">
                  See the gallery
                </span>
                <img
                  src={loop}
                  alt="View more"
                  className={`h-4 w-4 transform transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5 ${darkMode ? "" : "invert"}`}
                />
              </div>
            </Link>

            {/* Bouton Film (conditionnel) */}
            {hasFilmLink && (
              <a
                href={filmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-300 sm:gap-3 sm:px-5"
              >
                <span className="text-xs font-medium tracking-wide sm:text-sm">
                  See the movie
                </span>
                <svg
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
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
            )}
          </div>
        </div>

        {/* L'image de couverture */}
        <div className="w-full flex-shrink-0 sm:w-3/4 md:w-2/3 lg:w-1/3">
          <PhotoMagazine
            link={galleryLink}
            src={coverImage}
            darkMode={darkMode}
          />
        </div>
      </div>
    </Reveal>
  );
}

function PhotoMagazine({ link, src }) {
  return (
    <Link to={link}>
      <div className="group relative overflow-hidden rounded-2xl shadow-md">
        <img
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={src}
          alt="Book cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <div className="flex justify-center gap-3 px-3 py-2 sm:gap-6 sm:px-4 sm:py-3">
                <p className="text-xl font-bold text-white sm:text-3xl">
                  See gallery
                </p>
                <img
                  src={loop}
                  alt="View more"
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
