"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "../../../../constants";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" z-20 flex flex-col items-center justify-center py-20"
    >
      <h3 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-10 text-[40px] font-semibold text-transparent">
        Meus Projetos
      </h3>

      <div className="flex h-full w-full flex-col gap-10 px-10 ">
        <>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.image}
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
