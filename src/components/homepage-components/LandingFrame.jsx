import React from "react";
import PhotoLandingPage from "../../assets/images/Photo GGB/Photo GGB-Landing page.webp";
import ArrowLogo from "../../assets/icons/Main-icons/Vector-arrow-white.svg";
import SplitStrings from "../../util/regexSplitString.js";
import { motion } from "framer-motion";
import Reveal from "../Reveal";

export default function LandingFrame() {
  const title = "Félix Orain";
  const splitTitle = SplitStrings(title);
  const profession = "Developer and photographer";
  const splitProfession = SplitStrings(profession);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <>
      <section className="frame-landingpage">
        <div className="frame-title-text">
          <div className="name-profession">
            <motion.h1
              className="title"
              initial="hidden"
              whileInView={"reveal"}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05 }}
            >
              {" "}
              {splitTitle.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}

                  transition={{ duration: 3 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="profession"
              initial="hidden"
              whileInView={"reveal"}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05 }}
            >
              {splitProfession.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}

                  transition={{ duration: 3 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>

        <div className="vector-arrow">
          <a href="#latest-works">
            <img src={ArrowLogo} className="blinking-arrow" alt="" />
          </a>
        </div>
        <Reveal>
        <div className="essai-relative">
          <img
            className="photo-landing-page"
            src={PhotoLandingPage}
            srcSet={`${PhotoLandingPage} 500w, ${PhotoLandingPage} 1000w, ${PhotoLandingPage} 1500w`}
            sizes="(max-width: 600px) 500px, (max-width: 1000px) 1000px, 1500px"
            alt="Landscape photo"
            fetchPriority="high"
            />
        </div>
        </Reveal>
      </section>
    </>
  );
}
