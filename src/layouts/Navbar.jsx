import React from "react";
import logoSite from "../assets/icons/Main-icons/Logo-website-icon.svg";
import dropdown from "../assets/icons/Main-icons/Dropdown-menu.svg";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="frame-navbar">
        <div className="group-navbar">
          <div className="row-navbar">
            <div className="navbar-row-items">
              <div className="logo-navbar">
                <Link to="/">
                  <img src={logoSite} alt="Logo website" />
                </Link>
              </div>
              <ul className="list-navbar">
                <li><Link to="/" className="body-font">Home</Link></li>
                <li><Link to="/applications" className="body-font">Applications</Link></li>
                <li><Link to="/photos" className="body-font">Photos</Link></li>
                <li><Link to="/books" className="body-font">Books</Link></li>
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
          <div className="line-navbar">{/* The line of the navbar */}</div>
        </div>
      </nav>
    </>
  );
}
