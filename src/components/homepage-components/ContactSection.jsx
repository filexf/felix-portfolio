import React from "react";
import SectionWrapper from "./SectionWrapper";
import Reveal from "../Reveal";
import { IoSend } from "react-icons/io5";

export default function ContactSection() {
  return (
    <Reveal>
      <SectionWrapper title={"Contact me"}>
        <div className="flex flex-col gap-12">
          <p className="body-font mx-auto max-w-3xl text-center">
            Feel free to contact me for any project at : felix.orain@gmail.com
          </p>

          <form
            action="https://usebasin.com/f/477736526efa"
            method="POST"
            className="mx-auto flex w-full max-w-2xl flex-col gap-6"
          >
            <div className="flex flex-col gap-6 md:flex-row">
              <input
                className="w-full rounded-xl border border-gray-300 bg-white/50 p-3 text-gray-600 placeholder-gray-400 backdrop-blur-sm transition-all duration-300 ease-in-out focus:border-gray-900 focus:ring-0 focus:outline-none dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300 shadow-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="w-full rounded-xl border border-gray-300 bg-white/50 p-3 text-gray-600 placeholder-gray-400 backdrop-blur-sm transition-all duration-300 ease-in-out focus:border-gray-900 focus:ring-0 focus:outline-none dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300 shadow-md"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <textarea
              className="w-full rounded-xl border border-gray-300 bg-white/50 p-3 text-gray-600 placeholder-gray-400 backdrop-blur-sm transition-all duration-300 ease-in-out focus:border-gray-900 focus:ring-0 focus:outline-none dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-300 shadow-md"
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              required
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 self-start rounded-full border border-gray-300 px-5 py-2 text-gray-600 transition-all duration-300 ease-in-out hover:border-gray-900 hover:text-gray-900 shadow-md mb-2"
              >
                <span className="text-sm font-medium tracking-wide">
                  Send message
                </span>
                <IoSend className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </Reveal>
  );
}
