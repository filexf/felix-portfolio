import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-3xl">
        <b>404 - Page not found</b>
      </h1>
      <h1 className="text-xl mt-4">
        <b>You may have gotten lost, go back to the main page:</b>
      </h1>
      <button className="mt-5 rounded-full bg-[#000] px-4 py-2 text-white hover:bg-[#2c2c35]">
        <Link to="/">Back home</Link>
      </button>
    </div>
  );
}
