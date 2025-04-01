import React from "react";

import logoSiteWhite from "../assets/icons/Main-icons/Logo-white-website-icon.svg";
import dropdown from "../assets/icons/Main-icons/Dropdwon-menu-white.svg";

import { Link } from "react-router-dom";

export default function BlackNavbar() {
  return (
    <>
      <nav className="frame-navbar" style={{ backgroundColor: "#15151B" }}>
        <div className="group-navbar">
          <div className="row-navbar">
            <div className="navbar-row-items">
              <div className="logo-navbar">
                <Link to="/">
                  <img
                    src={logoSiteWhite}
                    alt="Logo website"
                    className="white-elements"
                    style={{ color: "#ffffff" }}
                  />
                </Link>
              </div>
              <ul className="list-navbar">
                <li>
                  <Link to="/" className="body-font-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/applications" className="body-font-white">
                    Applications
                  </Link>
                </li>
                <li>
                  <Link to="/photos" className="body-font-white">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="/books" className="body-font-white">
                    Books
                  </Link>
                </li>
              </ul>
            </div>
            {/*-------------------- The new burger menu  --------------------*/}
            {/* <div class="hamburger"> </div> */}
            <input type="checkbox" id="check" style={{ display: "none" }} />
            <label htmlFor="check" className="checkbtn">
              <img src={dropdown} className="" alt="Dropdown-menu" />
            </label>
            <div className="nav-mobile">
              <a href="#">English 🇺🇸</a>
              <a href="#">French 🇫🇷</a>
            </div>
            {/*-------------------- End of the new burger menu  --------------------*/}
          </div>
          <div className="line-navbar " style={{ backgroundColor: "#ffffff" }}>
            {/* The line of the navbar */}
          </div>
        </div>
      </nav>
    </>
  );
}
