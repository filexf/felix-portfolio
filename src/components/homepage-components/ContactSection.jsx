import React from "react";
import contactIcon from "../../assets/icons/Main-icons/Contact-icon.svg";
import SectionWrapper from "./SectionWrapper";
import Reveal from "../Reveal";
import { IoSend } from "react-icons/io5";

export default function ContactSection() {
  return (
    <Reveal>
      <SectionWrapper title={"Contact me"} icon={contactIcon}>
        <div className="flex flex-col gap-12">
          {/* Texte d'introduction */}
          <p className="body-font max-w-3xl mx-auto text-center">
            Feel free to contact me for any project at : felix.orain@gmail.com
          </p>

          {/* Formulaire de contact */}
          <form
            action="https://usebasin.com/f/477736526efa"
            method="POST"
            className="flex flex-col gap-6 max-w-2xl mx-auto w-full"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                className="w-full rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm p-3
                  text-gray-600 placeholder-gray-400
                  transition-all duration-300 ease-in-out
                  focus:border-gray-900 focus:outline-none focus:ring-0
                  dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="w-full rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm p-3
                  text-gray-600 placeholder-gray-400
                  transition-all duration-300 ease-in-out
                  focus:border-gray-900 focus:outline-none focus:ring-0
                  dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <textarea
              className="w-full rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm p-3
                text-gray-600 placeholder-gray-400
                transition-all duration-300 ease-in-out
                focus:border-gray-900 focus:outline-none focus:ring-0
                dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300"
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              required
            />

            <div className="flex justify-center">

            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-5 py-2
                border border-gray-300 rounded-full
                text-gray-600 hover:text-gray-900
                hover:border-gray-900
                transition-all duration-300 ease-in-out
                self-start"
            >
              <span className="text-sm font-medium tracking-wide">
                Send message
              </span>
              <IoSend className="w-4 h-4 transform transition-transform duration-300
                group-hover:translate-x-1"
              />
            </button>
            </div>

          </form>
        </div>
      </SectionWrapper>
    </Reveal>
  );
}
