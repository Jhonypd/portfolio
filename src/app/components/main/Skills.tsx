import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";
import { Frontend_skill } from "../../../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20"
      style={{ transform: "scale:0.9" }}
    >
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
