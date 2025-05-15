import React from "react";
import logoSite from "../assets/icons/Main-icons/Logo-website-icon.svg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";

import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../i18n/i18n";

export default function Navbar() {
  const { darkMode } = useTheme();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
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
              <div className="flex size-[2rem] transform items-center transition hover:scale-102 md:size-[2.4rem]">
                <Link to="/">
                  <img
                    src={logoSite}
                    alt="Logo website"
                    className={darkMode ? "invert filter" : ""}
                  />
                </Link>
              </div>
              <ul className="flex flex-row items-center gap-[18px] text-xl font-medium md:gap-[25px] md:text-2xl">
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/">{t("navbar.home", language)}</Link>
                </li>
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/applications">
                    {t("navbar.applications", language)}
                  </Link>
                </li>
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/photos">{t("navbar.photos", language)}</Link>
                </li>
                <li className="transition-opacity hover:opacity-70">
                  <Link to="/books">{t("navbar.books", language)}</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              {/* Bouton de bascule du thème */}
              <ThemeToggle />

              {/* Nouveau sélecteur de langue */}
              <LanguageSwitcher
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
