import React from "react";
import { cardData } from "../../data/cardData";
import { Link } from "react-router-dom";

export default function CardsWork() {
  return (
    <>
      <div className="frame-my-latest-works">
        <h2 className="header-landing-page">My latest works</h2>
        <p className="font-text-latest-works" id="latest-works">
          I’ve always been interested in technologies and photography. I’ve been
          working as a freelance photographer / videographer for over 4 years,
          published 2 photobooks and I’ve recently explored web development more
          thoroughly. <br /> <br />
          Check out my work below to learn more :
        </p>
        <div className="frame-cards-latest-works">
          {cardData.map((card) => (
            <Card key={card.title} title={card.title} icon={card.icon} text={card.text} path={card.path} />
          ))}
        </div>
      </div>
    </>
  );
}

const Card = ({ icon, title, text, path }) => {
  return (
    <div className="card-latest-works " id={title === "Photography" ? "black-card" : undefined}>
      <img className="icon-latest-works" src={icon} alt={title} />
      <p className="title-card-latest-works">{title}</p>
      <p className="font-card-latest-works"> {text}</p>
      <Link to={path}>
        <button className="btn-card-latest-works">See more</button>
      </Link>
    </div>
  );
};
