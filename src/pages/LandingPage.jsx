import React from "react";
import LandingFrame from "../components/homepage-components/LandingFrame";
import CardsWork from "../components/homepage-components/CardsWork";
import WebDevelopmentSection from "../components/homepage-components/WebDevelopmentSection";
import PhotographySection from "../components/homepage-components/PhotographySection";
import DesignSection from "../components/homepage-components/DesignSection";
import AboutSection from "../components/homepage-components/AboutSection";
import ContactSection from "../components/homepage-components/ContactSection";

export default function LandingPage() {
  return (
    <>
      <LandingFrame />
      <CardsWork />
      <div class="layout-all-frames">
        <WebDevelopmentSection />
        <PhotographySection />
        <DesignSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}
