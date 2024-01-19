"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "../../../../constants";
import { FaCode } from "react-icons/fa";
import ProjectTag from "../sub/ProjectTag";

const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <div
      id="projects"
      className=" z-20 flex flex-col items-center justify-center py-20"
    >
      <h3 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-10 text-[40px] font-semibold text-transparent">
        Meus Projetos
      </h3>
      <div className=" flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "All"}
          name="All"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="flex h-full w-full flex-col gap-10 px-10 ">
        <>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default Projects;
