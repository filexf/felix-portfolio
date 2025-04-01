import React from "react";
import coverCivilisation from "../assets/images/Couvertures magazines/Civilisation Mag.jpg";
import coverWizzyEnAsie from "../assets/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg";
import loop from "../assets/icons/Main-icons/Loop-plus-icon.svg";
import { Link } from "react-router-dom";

export default function BooksPage() {
  return (
    <>
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
            During my time as a photographer I had the opportunity to make 2
            books depicting 5 months of adventure through south east Asia. I
            wrote the story, used my own photos and edited all by myself, they
            got sold by more than 500 copies. During these months of crafting I
            gained a lot of knowledge about how to stay consistent in designing
            and mainly how to tackle a huge project like this one.
          </p>
          {/* The frame of Civilisation */}
          <div className="frame-magazine-and-text wrap-civilisation">
            <Link to="/books/civilisation">
              <div className="container-photo">
                <img
                  className="main-photo-magazine"
                  src={coverCivilisation}
                  alt=""
                />
                <div className="frame-loop-title">
                  <p className="font-hover-photo">Read more</p>
                  <img className="loop-plus-icon" src={loop} alt="" />
                </div>
              </div>
            </Link>
            <div className="frame-texts-magazine">
              <h2>Civilisation</h2>
              <p className="body-font">
                The first book I made is “Civilisation”, narrating the behind
                the scenes of the eponym film, watched by more than 5000 people.
                <br />
                <br />
                Civilization is the adventure of 9 friends who travel to the
                other side of the world to shoot a parkour and adventure film in
                Southeast Asia. Follow them through their filming journey across
                three different countries and environments, where they faced a
                multitude of challenges. Travel with them through this story and
                their breathtaking photos.
                <br />
                <br />
                This book is 80 pages long and was entirely edited by me.
                <br />
                <br />
                Click on it to read a few pages !
              </p>
            </div>
          </div>
          {/* The frame of Wizzy en Asie */}
          <div className="frame-magazine-and-text wrap-wizzy-en-asie">
            <div className="frame-texts-magazine">
              <h2>Wizzy en Asie</h2>
              <p className="body-font">
                The second book I made is “Wizzy en Asie”, following the journey
                of Civilisation.
                <br />
                <br />
                Wizzy in Asia is the adventure of 9 friends traveling to the
                other side of the world for several months with the goal of
                practicing Parkour on the rooftops of Asia’s megacities. Follow
                them on their journey as they face a multitude of challenges.
                From leaping across the massive rooftops of Bangkok to exploring
                a ghost town in Malaysia and even being stranded together in
                Hong Kong for a month, it’s an adventure packed with adrenaline.
                Experience their story and breathtaking photos as you travel
                along with them.
                <br />
                <br />
                This book is 112 pages long and was entirely edited by me.
                <br />
                <br />
                Click on it to read a few pages !
              </p>
            </div>
            {/* <div class="magazine-dimensions zoom-effect-photos">
    <a href=""> <img src="/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg" alt="Couverture magazine Civilisation"> </a>
  </div> */}
            <Link to="/books/wizzyenasie">
              <div className="container-photo">
                <img
                  className="main-photo-magazine"
                  src={coverWizzyEnAsie}
                  alt=""
                />
                <div className="frame-loop-title">
                  <p className="font-hover-photo">Read more</p>
                  <img className="loop-plus-icon" src={loop} alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
