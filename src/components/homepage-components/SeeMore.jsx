import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

export default function SeeMore({ projectLink }) {
  return (
    <>
      <Link to={projectLink}>
        <div className="flex items-center justify-center gap-4 group hover:scale-[1.08] hover:[transition:300ms_ease-in-out] ">
          <p className="text-4xl leading-[normal] font-semibold text-[#000] not-italic ">
            See more
          </p>
          <MdArrowForwardIos className="text-[2rem]" />
        </div>
      </Link>
    </>
  );
}
