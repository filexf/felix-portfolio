import React from 'react';

import logoSiteWhite from '../assets/icons/Main-icons/Logo-white-website-icon.svg';
import dropdown from '../assets/icons/Main-icons/Dropdwon-menu-white.svg';

import { Link } from 'react-router-dom';

export default function BlackNavbar() {
  return (
    <>
      <nav
        className="sticky top-[0] z-10 flex w-full flex-col items-center justify-end gap-[10px] bg-[white] pt-2"
        style={{ backgroundColor: '#15151B' }}
      >
        <div className="w-[85%]">
          <div className="flex flex-row justify-between gap-[20px] p-[10px]">
            <div className="flex flex-row items-center gap-[25px]">
              <div className="flex size-[2.4rem] transform items-center transition hover:scale-102">
                <Link to="/">
                  <img
                    src={logoSiteWhite}
                    alt="Logo website"
                    className="white-elements"
                    style={{ color: '#ffffff' }}
                  />
                </Link>
              </div>
              <ul className="flex flex-row items-center gap-[25px] text-2xl text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/applications">Applications</Link>
                </li>
                <li>
                  <Link to="/photos">Photos</Link>
                </li>
                <li>
                  <Link to="/books">Books</Link>
                </li>
              </ul>
            </div>
            {/*-------------------- The new burger menu  --------------------*/}
            {/* <div class="hamburger"> </div> */}
            <input type="checkbox" id="check" style={{ display: 'none' }} />
            <label htmlFor="check" className="checkbtn">
              <img src={dropdown} className="" alt="Dropdown-menu" />
            </label>
            <div className="nav-mobile">
              <a href="#">English 🇺🇸</a>
              <a href="#">French 🇫🇷</a>
            </div>
            {/*-------------------- End of the new burger menu  --------------------*/}
          </div>
          <div
            className="flex h-px w-full justify-center bg-[#000]"
            style={{ backgroundColor: '#ffffff' }}
          >
            {/* The line of the navbar */}
          </div>
        </div>
      </nav>
    </>
  );
}
