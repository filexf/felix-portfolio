import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

export default function SeeMore({ projectLink }) {
  return (
    <div className="flex justify-center">

    <Link to={projectLink}>
      <div className="group inline-flex items-center gap-3 px-5 py-2
        border border-gray-300 rounded-full
          
        transition-all duration-300 ease-in-out">
        <span className="text-sm font-medium tracking-wide">
          See more
        </span>
        <MdArrowForward
          className="w-4 h-4 transform transition-transform
          duration-300 group-hover:translate-x-1"
          />
      </div>
    </Link>
  </div>
  );
}
