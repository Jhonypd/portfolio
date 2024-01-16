import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-[40px] font-semibold text-transparent">
        My Projrcts
      </h1>
      <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/NextWebsite.png"
          title="exemple #1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ProjectCard
          src="/CardImage.png"
          title="exemple #2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="exemple #3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
};

export default Projects;
