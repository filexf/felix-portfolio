import React from "react";

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

import githubIconWhite from "../assets/icons/Main-icons/Github-icon-white.svg";
import websiteIconWhite from "../assets/icons/Main-icons/Website-icon-white.svg";
import sportifyPicture from "../assets/images/Photo-projets-dev/Photo Couverture Sportify.png";
import tyMouetPicture from "../assets/images/Photo-projets-dev/Photo Ty Mouet.jpg";

// Tech stack data
const techStack = [
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

// Project data
const projects = [
  {
    title: "SPORTIFY",
    description:
      "Sportify is a PWA made for connecting people who don't have a sport partner. They login to the app, type which sport they want to do and they'll be offered with sport events around them. They can add an event, participate to an event but also look into a feed for all the sport news in their region.",
    image: sportifyPicture,
    githubLink: "https://github.com/filexf/sportify",
    websiteLink: "#", // Add actual link if available
  },
  {
    title: "TY MOUET",
    description:
      "Ty Mouet was our first real project at Le Wagon’s bootcamp—an Airbnb clone for seagulls! We could lend, rent, or find nearby seagulls, following a many-to-many database structure. It was a fun challenge where we learned the full web development process, from building features to deploying a live app.",
    image: tyMouetPicture,
    githubLink: "https://github.com/filexf/ty-mouet",
    websiteLink: "https://ty-mouet-c5897a5b74b0.herokuapp.com/",
  },
];

// Reusable Tech Stack Icon component
function TechStackIcon({ name, icon }) {
  return <img src={icon} alt={name} className="layout-icons-tech-stack" />;
}

// Reusable Project Card component
function ProjectCard({ title, description, image, githubLink, websiteLink }) {
  return (
    <div className="container-photo-app">
      <img className="frame-application" src={image} alt={title} />
      <p className="font-header-applications center-title-application">
        {title}
      </p>
      <div className="frame-hovered-content-application">
        <p className="font-header-applications">{title}</p>
        <p className="body-font font-hovered">{description}</p>
        <div className="icons-projects">
          <p className="body-font font-hovered">Check it out:</p>
          <a href={githubLink} target="_blank">
            <img
              className="loop-plus-icon"
              src={githubIconWhite}
              alt="GitHub"
            />
          </a>
          {websiteLink && (
            <a href={websiteLink} target="_blank">
              <img
                className="loop-plus-icon"
                src={websiteIconWhite}
                alt="Website"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApplicationsPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "flex-column",
        justifyContent: "center",
      }}
    >
      <div className="frame-header-applications-page">
        <h1 className="font-main-sections">Applications</h1>
        <p className="body-font">
        I’m a recent Le Wagon graduate with hands-on experience in web development, where I built applications from scratch using Ruby on Rails, JavaScript, and React. Throughout the program, I developed strong problem-solving skills and learned to work with tools like Git, SQL, and API integrations. With a solid understanding of frontend and backend development, I’m excited to leverage these skills to build efficient, scalable applications and tackle real-world challenges in the tech industry.

        </p>
        <div className="github-account-frame">
          <p className="body-font">My GitHub account:</p>
          <a href="https://github.com/filexf" target="_blank">
            <img src={GithubIcon} alt="GitHub logo icon" />
          </a>
        </div>

        {/* Projects Section */}
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        {/* Tech Stack Section */}
        <div className="tech-stack">
          <p>Tech stack used</p>
          <div className="frame-icons-tech-stack">
            {techStack.map((tech, index) => (
              <TechStackIcon key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
