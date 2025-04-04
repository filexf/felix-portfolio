import React from "react";
import arrowVector from "../../assets/icons/Main-icons/Vector-arrow.svg";
import { Link } from "react-router-dom";

export default function SeeMore({ projectLink }) {
  return (
    <>
      <Link to={projectLink}>
        <div className="see-more">
          <p>See more</p>
          <img src={arrowVector} alt="Arrow vector" />


        </div>
      </Link>
    </>
  );
}
