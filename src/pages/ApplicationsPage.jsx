import {
  projects,
  ProjectCard,
} from "../components/applications-components/ProjectCard";

// Importing assets
import RailIcon from "../assets/icons/Tech stack icons/Rails-icon.svg";
import JSIcon from "../assets/icons/Tech stack icons/Javascript-icon.svg";
import Ruby from "../assets/icons/Tech stack icons/Ruby-icons.svg";
import PostgreIcon from "../assets/icons/Tech stack icons/Postgresql-icon.svg";
import FigmaIcon from "../assets/icons/Tech stack icons/Figma-icon.svg";
import HTMLIcon from "../assets/icons/Tech stack icons/HTML-icon.svg";
import CSSIcon from "../assets/icons/Tech stack icons/CSS-icon.svg";
import GitIcon from "../assets/icons/Tech stack icons/Git-icon.svg";
import GithubIcon from "../assets/icons/Tech stack icons/Github-icon.svg";
import Bootstrap from "../assets/icons/Tech stack icons/Bootstrap-icon.svg";
import ReactIcon from "../assets/icons/Tech stack icons/React.svg";

import Reveal from "../components/Reveal";

import PhotoSportify from "../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import PhotoTyMouet from "../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";

// Tech stack data
const techStack = [
  { name: "React", icon: ReactIcon },
  { name: "Ruby on Rails", icon: RailIcon },
  { name: "Ruby", icon: Ruby },
  { name: "JavaScript", icon: JSIcon },
  { name: "PostgreSQL", icon: PostgreIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Bootstrap", icon: Bootstrap },
];

// Reusable Tech Stack Icon component
function TechStackIcon({ name, icon }) {
  return (
    <>
      <div className="flex gap-4 items-center border-2px rounded-3xl border-slate-800 bg-gray-50 px-6 py-2 shadow-md hover:bg-gray-200 mb-1">
        <p className="font-bold text-gradient">{name} </p>
        <img src={icon} alt={name} className="w-9" />
      </div>
    </>
  );
}

export default function ApplicationsPage() {
  return (
    <Reveal>
      <div className="mt-4 flex flex-row justify-center">
        <div className="mt-[30px] flex w-4/5 flex-col items-center gap-[70px] px-12 py-[0]">
          <h1 className="text-gradient text-center text-7xl leading-normal font-bold">
            Applications
          </h1>
          <p className="body-font">
            I’m a recent Le Wagon graduate with hands-on experience in web
            development, where I built applications from scratch using Ruby on
            Rails, JavaScript, and React. Throughout the program, I developed
            strong problem-solving skills and learned to work with tools like
            Git, SQL, and API integrations. With a solid understanding of
            frontend and backend development, I’m excited to leverage these
            skills to build efficient, scalable applications and tackle
            real-world challenges in the tech industry.
          </p>
          <a href="https://github.com/filexf" target="_blank">
            <div className="border-2px flex items-center gap-5 rounded-3xl border-slate-800 bg-gray-50 px-6 py-3 shadow-md hover:bg-gray-200">
              <p className="text-gradient text-bold text-xl">
                My GitHub account
              </p>
              <img
                src={GithubIcon}
                alt="GitHub logo icon"
                className="w-10 hover:scale-102"
              />
            </div>
          </a>
          {/* Projects Section */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

          {/* Tech Stack Section */}
          <Reveal>
            <div className="flex justify-center items-center w-full flex-col gap-[48px]">
              <p className="text-gradient text-6xl font-bold pb-1 mb-4">My tech stack</p>
              <div className="flex w-4/5 justify-center items-center gap-10 flex-wrap">
                {techStack.map((tech, index) => (
                  <TechStackIcon key={index} {...tech} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}
