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
          <h2 className="text-gradient text-center text-7xl leading-[normal] font-bold">
            My portfolio
          </h2>

          <p className="w-3/4 p-[20px] text-center text-[22px]">
            After four years as a freelance photographer, I ventured into web
            development to blend my artistic vision with technology, creating
            unique digital experiences. <br />
            Dive into my projects and see what I’ve been working on!
          </p>
          <Reveal>
            <div className="my-2 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:gap-2">
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
    <Link to={path}>
      <div className="group mx-4 my-2 flex h-auto w-72 flex-col items-center justify-center gap-8 rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-5 shadow-md backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gradient-to-br hover:from-gray-50 hover:via-white hover:to-gray-100 hover:shadow-xl hover:shadow-gray-200/50 dark:border-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:hover:from-gray-800 dark:hover:via-gray-900 dark:hover:to-gray-800">
        <div className="rounded-full bg-gray-100 p-2.5 transition-colors duration-300 group-hover:bg-gray-200 dark:bg-gray-800">
          <img
            className="h-11 w-10 transition-transform duration-300 group-hover:scale-110"
            src={icon}
            alt={title}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h3 className="text-gradient text-xl font-bold">{title}</h3>

          <p className="h-25 leading-relaxed text-gray-600 dark:text-gray-400">
            {text}
          </p>

          <button className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-5 py-2 text-sm font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gray-900 hover:text-white md:w-3/4 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
            <span className="flex items-center justify-center gap-2">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};
