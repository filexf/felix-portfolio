import React from "react";
import arrowVector from "../../assets/icons/Main-icons/Vector-arrow.svg";

export default function SeeMore() {
  return (
    <>
      <a href="Applications.html">
        <div className="see-more">
          <p>See more</p>
          <img src={arrowVector} alt="Arrow vector" />


        </div>
      </a>
    </>
  );
}
