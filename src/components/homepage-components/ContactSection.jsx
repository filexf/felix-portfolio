import React from "react";
import contactIcon from "../../assets/icons/Main-icons/Contact-icon.svg";
import SectionWrapper from "./SectionWrapper";
import Reveal from "../Reveal";

export default function ContactSection() {
  return (
    <>
      <SectionWrapper title={"Contact me"} icon={contactIcon}>
        <Reveal>
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
              <button type="submit" value="Submit" className="btn-cv">
                <span> Send </span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2.4"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
