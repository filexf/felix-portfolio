import React from "react";
import Photo1 from "../../assets/images/Couvertures magazines/Civilisation Mag.jpg";
import Photo2 from "../../assets/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg";
import SeeMore from "./SeeMore";
import DesignIcon from "../../assets/icons/Main-icons/Designs-icon.svg";

import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function DesignSection() {
  return (
    <>
      <Reveal>
        <SectionWrapper title={"Designs"} icon={DesignIcon}>
          <p className="body-font">
            I created two books showcasing five months of adventure in Southeast
            Asia, using my own photos and writing. Self-edited and sold over 500
            copies, this experience taught me consistency in design and how to
            manage large-scale projects effectively.
          </p>
          <div className="frame-magazines-cover">
            <Image photo={Photo1} />
            <Image photo={Photo2} />
          </div>

          <SeeMore projectLink={"/books"} />
        </SectionWrapper>
      </Reveal>
    </>
  );
}

function Image({ photo }) {
  return (
    <div className="zoom-effect-photos">
      <Link to="/books">
        <img src={photo} alt="Photos Magazines" />
      </Link>
    </div>
  );
}
