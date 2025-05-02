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
        <div
          style={{
            display: "flex",
            flexDirection: "flex-column",
            justifyContent: "center",
          }}
        >
          <div className="frame-header-books-page">
            <h1 className="font-main-sections">Books</h1>
            <p className="body-font">
              I created two books showcasing five months of adventure in
              Southeast Asia, using my own photos and writing. Self-edited and
              sold over 500 copies, this experience taught me consistency in
              design and how to manage large-scale projects effectively.
            </p>
            {/* The frame of Civilisation */}
            <Reveal>
              <div className="frame-magazine-and-text wrap-civilisation">
                <Link to="/books/civilisation">
                  <div className="container-photo group relative overflow-hidden">
                    <img
                      className="main-photo-magazine transition-transform duration-300 group-hover:scale-105"
                      src={coverCivilisation}
                      alt="Civilisation cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px] bg-[rgba(23,_23,_23,_0.752)] text-[white] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-[50px] leading-[normal] font-bold text-[#F5F5F5] [text-shadow:0px_4.546px_4.546px_rgba(0,_0,_0,_0.25)]">
                        Read more
                      </p>
                      <img
                        className="h-[70px] w-[70px] hover:[transition:200ms_ease-in-out]"
                        src={loop}
                        alt="Loupe icon"
                      />
                    </div>
                  </div>
                </Link>
                <div className="frame-texts-magazine">
                  <h2>Civilisation</h2>
                  <p className="body-font">
                    The first book I made is “Civilisation”, narrating the
                    behind the scenes of the eponym{" "}
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=Q-gz6qA1h14"
                      style={{ textDecoration: "underline" }}
                    >
                      {" "}
                      film
                    </a>
                    , watched by more than 5000 people.
                    <br />
                    <br />
                    Civilization is the adventure of 9 friends who travel to the
                    other side of the world to shoot a parkour and adventure
                    film in Southeast Asia. Follow them through their filming
                    journey across three different countries and environments,
                    where they faced a multitude of challenges. Travel with them
                    through this story and their breathtaking photos.
                    <br />
                    <br />
                    This book is 80 pages long and was entirely edited by me.
                    <br />
                    <br />
                    Click on it to read a few pages !
                  </p>
                </div>
              </div>
            </Reveal>
            {/* The frame of Wizzy en Asie */}
            <Reveal>
              <div className="frame-magazine-and-text wrap-wizzy-en-asie">
                <div className="frame-texts-magazine">
                  <h2>Wizzy en Asie</h2>
                  <p className="body-font">
                    The second book I made is “Wizzy en Asie”, following the
                    journey of Civilisation.
                    <br />
                    <br />
                    Wizzy in Asia is the adventure of 9 friends traveling to the
                    other side of the world for several months with the goal of
                    practicing Parkour on the rooftops of Asia’s megacities.
                    Follow them on their journey as they face a multitude of
                    challenges. From leaping across the massive rooftops of
                    Bangkok to exploring a ghost town in Malaysia and even being
                    stranded together in Hong Kong for a month, it’s an
                    adventure packed with adrenaline. Experience their story and
                    breathtaking photos as you travel along with them.
                    <br />
                    <br />
                    This book is 112 pages long and was entirely edited by me.
                    <br />
                    <br />
                    Click on it to read a few pages !
                  </p>
                </div>
                <Link to="/books/wizzyenasie">
                  <div className="container-photo group relative overflow-hidden">
                    <img
                      className="main-photo-magazine transition-transform duration-300 group-hover:scale-105"
                      src={coverWizzyEnAsie}
                      alt="Wizzy en Asie cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px] bg-[rgba(23,_23,_23,_0.752)] text-[white] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-[50px] leading-[normal] font-bold text-[#F5F5F5] [text-shadow:0px_4.546px_4.546px_rgba(0,_0,_0,_0.25)]">
                        Read more
                      </p>
                      <img
                        className="h-[70px] w-[70px] hover:[transition:200ms_ease-in-out]"
                        src={loop}
                        alt="Loupe icon"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </>
  );
}
