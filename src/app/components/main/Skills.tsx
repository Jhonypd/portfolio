import React from "react";

import SkillsDataProvider from "../sub/SkillsDataProvider";
import { HtmlIcons } from "../../../../constants";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-30 relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden px-10 "
      style={{ transform: "scale:0.9" }}
    >
      <SkillText />

      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {HtmlIcons.map((IconComponent, index) => (
          <SkillsDataProvider
            key={index}
            icon={<IconComponent className="h-[4.5rem] w-[4.5rem]" />}
            index={index}
          />
        ))}
      </div>

      <div className="absolute h-full w-full">
        <div className="bg-hover absolute z-[-10] flex h-full w-full items-center justify-center opacity-30">
          {/* <video
            className="h-auto w-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
