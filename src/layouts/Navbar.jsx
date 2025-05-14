import React from "react";
import dropdown from "../assets/icons/Main-icons/Dropdown-menu.svg";
import logoSite from "../assets/icons/Main-icons/Logo-website-icon.svg";
import ThemeToggle from "../components/ThemeToggle";

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode } = useTheme();

  return (
    <>
      <nav
        className="sticky top-[0] z-100 flex w-full flex-col items-center justify-end gap-[10px] py-1.5 shadow-md"
        style={{ backgroundColor: "var(--navbar-bg)" }}
      >
        <div className="w-[85%]">
          <div className="flex flex-row justify-between gap-[20px] p-[10px]">
            <div className="flex flex-row items-center gap-[25px]">
              <div className="flex size-[2.4rem] transform items-center transition hover:scale-102">
                <Link to="/">
                  <img
                    src={logoSite}
                    alt="Logo website"
                    className={darkMode ? "invert filter" : ""}
                  />
                </Link>
              </div>
              <ul className="flex flex-row items-center gap-[25px] text-2xl font-medium">
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/">Home</Link>
                </li>
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/applications">Applications</Link>
                </li>
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/photos">Photos</Link>
                </li>
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/books">Books</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              {/* Bouton de bascule du thème */}
              <ThemeToggle />

              {/* Langue menu déroulant */}
              <div className="relative flex items-center">
                <input type="checkbox" id="check" className="peer hidden" />
                <label htmlFor="check" className="cursor-pointer text-[1.5rem]">
                  <img
                    src={dropdown}
                    alt="Dropdown-menu"
                    className={darkMode ? "invert filter" : ""}
                  />
                </label>
                <div className="absolute top-[200%] right-[-27%] hidden w-[200px] bg-[#232425] peer-checked:block">
                  <a
                    href="#"
                    className="flex justify-center px-6 py-4 font-[raleway] font-extrabold text-[#fff] hover:scale-[1.01] hover:text-[#b2b2b3] hover:[transition:0.2s_ease-in-out]"
                  >
                    English 🇺🇸
                  </a>
                  <a
                    href="#"
                    className="flex justify-center px-6 py-4 font-[raleway] font-extrabold text-[#fff] hover:scale-[1.01] hover:text-[#b2b2b3] hover:[transition:0.2s_ease-in-out]"
                  >
                    French 🇫🇷
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
