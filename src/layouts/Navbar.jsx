import React from "react";
import logoSite from "../assets/icons/Main-icons/Logo-website-icon.svg";
import dropdown from "../assets/icons/Main-icons/Dropdown-menu.svg";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-[0] z-100 flex w-full flex-col items-center justify-end gap-[10px] bg-[white] pt-2 shadow-md">
        <div className="w-[85%] ">
          <div className="flex flex-row justify-between gap-[20px] p-[10px]">
            <div className="flex flex-row items-center gap-[25px]">
              <div className="flex size-[2.4rem] transform items-center transition hover:scale-102">
                <Link to="/">
                  <img src={logoSite} alt="Logo website" />
                </Link>
              </div>
              <ul className="flex flex-row items-center gap-[25px] text-2xl font-medium ">
                <li className="hover:text-[#888]">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#888]">
                  <Link to="/applications">Applications</Link>
                </li>
                <li className="hover:text-[#888]">
                  <Link to="/photos">Photos</Link>
                </li>
                <li className="hover:text-[#888]">
                  <Link to="/books">Books</Link>
                </li>
              </ul>
            </div>
            {/*-------------------- The new burger menu  --------------------*/}
            {/* <div class="hamburger"> </div> */}
            <div className="relative">
              {/* Checkbox cachée avec `peer` */}
              <input type="checkbox" id="check" className="peer hidden" />

              {/* Label lié à la checkbox */}
              <label
                htmlFor="check"
                className="cursor-pointer text-[1.5rem] text-[white]"
              >
                <img src={dropdown} alt="Dropdown-menu" />
              </label>

              {/* Menu conditionnellement affiché */}
              <div className="absolute top-[126%] right-[-27%] hidden w-[200px] bg-[#232425] peer-checked:block">
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
            {/*-------------------- End of the new burger menu  --------------------*/}
          </div>
          {/* <div className="flex h-px w-full justify-center bg-[#000]"></div> */}
        </div>
      </nav>
    </>
  );
}
