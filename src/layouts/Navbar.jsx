import React, { useState } from "react";
import logoSite from "../assets/icons/Main-icons/Logo-website-icon.svg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode } = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    // Ici, nous ajouterons plus tard la logique pour changer la langue avec i18n
    console.log(`Langue changée à: ${lang}`);
  };

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

              {/* Nouveau sélecteur de langue */}
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
