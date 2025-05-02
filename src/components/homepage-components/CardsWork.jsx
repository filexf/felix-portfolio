import React from "react";
import { cardData } from "../../data/cardData";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function CardsWork() {
  return (
    <>
      <Reveal>
        <div
          className="mt-14 flex w-full flex-col items-center justify-center gap-8"
          id="latest-works"
        >
          <h2 className="text-center text-7xl font-bold leading-[normal] bg-gradient-to-tr from-slate-600 to-slate-700 bg-clip-text text-transparent text-shadow-sm">My portfolio</h2>

          <p className="text-[22px] text-center p-[20px] w-3/4">
            After four years as a freelance photographer, I ventured into web
            development to blend my artistic vision with technology, creating
            unique digital experiences. <br />
            Dive into my projects and see what I’ve been working on!
          </p>
          <Reveal>
            <div className="flex justify-center flex-wrap items-center gap-6 mb-4">
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
      className="flex px-8 py-6 mx-3 flex-col items-center gap-[1.4rem] rounded-[2.5rem] border-[0.20rem] border-black shadow-md"
      id={title === "Photography" ? "black-card" : undefined}
    >
      <img className="w-[50px] h-[50px]" src={icon} alt={title} />
      <p className="text-center text-[23px] font-extrabold">{title}</p>
      <p className="w-60 h-60 flex-shrink-0 text-left overflow-hidden text-[#000] overflow-ellipsis max-w-prose hyphens-auto text-[17px] "> {text}</p>
      <Link to={path}>
        <button className="flex w-38 h-[2.8rem] p-[15px] justify-center items-center rounded-[18px] border-[0.18rem] border-black shadow-lg text-[#000] text-[1.1rem] font-extrabold hover:bg-[black] hover:text-[white] hover:[transition:ease-in-out_300ms]">Read more</button>
      </Link>
    </div>
  );
};
