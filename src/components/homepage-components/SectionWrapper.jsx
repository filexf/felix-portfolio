import React from "react";

export default function SectionWrapper({ children, title, icon }) {
  return (
    <section className="frames-layouts-landing-page">
      <div className="frames-layouts-landing-page-logo">
        <img className="logo-layouts-landing-page" src={icon} alt="Icon" />
      </div>
      <div className="frames-layouts-landing-page-content">
        
        <h2 className="header-layouts-landing-page">{title}</h2>
      {children}
      </div>
    </section>
  );
}
