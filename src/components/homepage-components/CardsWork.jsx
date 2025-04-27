import React from "react";
import { cardData } from "../../data/cardData";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function CardsWork() {
  return (
    <>
      <Reveal>

      <div className="frame-my-latest-works" id="latest-works">
          <h2 className="header-landing-page">My portfolio</h2>

        <p className="font-text-latest-works" >
        After four years as a freelance photographer, I ventured into web development to blend my artistic vision with technology, creating unique digital experiences. <br />
        Dive into my projects and see what I’ve been working on!
        </p>
          <Reveal>

          <div className="frame-cards-latest-works">
            {cardData.map((card) => (
              <Card
              key={card.title}
              title={card.title}
              icon={card.icon}
              text={card.text}
              path={card.path}
              />
            ))}
          </div>
          </Reveal>

      </div>
    </Reveal>
    </>
  );
}

const Card = ({ icon, title, text, path }) => {
  return (
    <div
      className="card-latest-works "
      id={title === "Photography" ? "black-card" : undefined}
    >
      <img className="icon-latest-works" src={icon} alt={title} />
      <p className="title-card-latest-works">{title}</p>
      <p className="font-card-latest-works"> {text}</p>
      <Link to={path}>
        <button className="btn-card-latest-works">Read more</button>
      </Link>
    </div>
  );
};
