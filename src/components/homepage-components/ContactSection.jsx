import React from "react";
import contactIcon from "../../assets/icons/Main-icons/Contact-icon.svg";

export default function ContactSection() {
  return (
    <>
      <div className="frames-layouts-landing-page">
        <div className="frames-layouts-landing-page-logo">
          <img
            className="logo-layouts-landing-page"
            src={contactIcon}
            alt="Contact-icon"
          />
        </div>

        <div className="frames-layouts-landing-page-content">
          <h2 className="header-layouts-landing-page">Contact me</h2>
          <div className="frame-contact-form">
            <p className="body-font">
              Feel free to contact me for any project at : felix.orain@gmail.com
            </p>
            <form action="https://usebasin.com/f/477736526efa" method="POST">
              <div className="frame-inputs">
                {/* <label for="name"></label> */}
                <input
                  className="inputs-style"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required=""
                />
                {/* <label for="email"></label> */}
                <input
                  className="inputs-style"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required=""
                />
              </div>
              {/* <label for="message"></label> */}
              <textarea
                className="inputs-style"
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required=""
                defaultValue={""}
              />
              <button type="submit" value="Submit">
                Send &gt;{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
