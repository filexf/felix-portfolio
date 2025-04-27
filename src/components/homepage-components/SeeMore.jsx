import React from "react";
import arrowVector from "../../assets/icons/Main-icons/Vector-arrow.svg";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";


export default function SeeMore({ projectLink }) {
  return (
    <>
      <Link to={projectLink}>
        <div className="see-more">
          <p>See more</p>
          <MdArrowForwardIos
            className="arrow-icon"
            />

        </div>
      </Link>
    </>
  );
}
