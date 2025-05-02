import React from "react";
import contactIcon from "../../assets/icons/Main-icons/Contact-icon.svg";
import SectionWrapper from "./SectionWrapper";
import Reveal from "../Reveal";
import { IoSend } from "react-icons/io5";

export default function ContactSection() {
  return (
    <>
      <SectionWrapper title={"Contact me"} icon={contactIcon}>
        <Reveal>
          <div className="flex w-full flex-col flex-wrap items-start gap-10">
            <p className="body-font">
              Feel free to contact me for any project at : felix.orain@gmail.com
            </p>
            <form
              action="https://usebasin.com/f/477736526efa"
              method="POST"
              className="flex h-fit w-4/5 flex-col gap-5"
            >
              <div className="flex w-full flex-wrap gap-5 md:flex-col md:w-4/5">
                <input
                  className="w-full rounded-[15px] border-2 border-black bg-white p-2 pl-4 text-lg md:w-auto shadow-md"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className="w-full rounded-[15px] border-2 border-black bg-white p-2 pl-4 text-lg md:w-auto shadow-md"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <textarea
                className="w-full rounded-[15px] border-2 border-black bg-white p-2 pl-4 text-lg shadow-md"
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                defaultValue=""
              />
              <button
                type="submit"
                value="Submit"
                className="mt-4 mb-4 flex h-12 w-40 items-center justify-center gap-4 rounded-4xl border-[2px] border-black px-5 text-lg font-semibold shadow-md transition duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                <span>Send</span>
                <IoSend className="icon" />
              </button>
            </form>
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
