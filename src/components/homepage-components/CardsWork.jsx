import React from "react";
import { cardData } from "../../data/cardData";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function CardsWork() {
  return (
    <>
      <Reveal>

      <div className="frame-my-latest-works">
          <h2 className="header-landing-page">My latest projects</h2>

        <p className="font-text-latest-works" id="latest-works">
          Passionate about technology and visual storytelling, I spent four
          years as a freelance photographer before diving into web development
          to craft engaging digital experiences. <br />
          Check out my work below to learn more :
        </p>

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
        <button className="btn-card-latest-works">See more</button>
      </Link>
    </div>
  );
};
