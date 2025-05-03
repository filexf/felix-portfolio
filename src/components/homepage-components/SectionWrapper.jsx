import React from "react";

export default function SectionWrapper({ children, title, icon }) {
  return (
    <section className="flex justify-center items-start gap-[35px] self-stretch">
      <div className="flex items-center gap-[35px]">
        <img className="mt-[5px] w-[58px] h-[60px]" src={icon} alt="Icon" />
      </div>
      <div className="flex w-4/5 flex-col gap-[48px]">

        <h2 className="self-stretch text-6xl font-semibold leading-[normal] text-gradient">{title}</h2>

        {children}
      </div>
    </section>
  );
}
