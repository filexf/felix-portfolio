import { projects,ProjectCard } from "../components/applications-components/ProjectCard";

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
  return <img src={icon} alt={name} className="layout-icons-tech-stack" />;
}

export default function ApplicationsPage() {
  return (
    <Reveal>
      <div
        style={{
          display: "flex",
          flexDirection: "flex-column",
          justifyContent: "center",
        }}
      >
        <div className="frame-header-applications-page">
          <h1 className="font-main-sections ">Applications</h1>
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
          <Reveal>
            <div className="tech-stack">
              <p>My tech stack</p>
              <div className="frame-icons-tech-stack">
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
