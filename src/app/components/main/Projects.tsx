"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "../../../../constants";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const styles = {
  container: `
    z-20 flex flex-col items-center justify-center 
    py-20 w-full md:px-14 px-7
  `,
  title: `
    bg-gradient-to-r from-purple-500 to-cyan-500 
    bg-clip-text py-10 text-[40px] font-semibold 
    text-transparent
  `,
  projectsRow: `
    flex flex-row gap-8 px-10 py-8 w-full
    overflow-x-auto overflow-y-hidden
    scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
    hover:scrollbar-thumb-gray-500
    snap-x snap-mandatory
  `,
  cardWrapper: `
    snap-center flex-shrink-0
    w-[300px] sm:w-[350px] md:w-[400px]
  `,
};

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        Meus Projetos
      </motion.h2>

      <Carousel opts={{ align: "start" }} className="w-full ">
        <CarouselContent className="-ml-1">
          {projectsData.map((project, index) => (
            <CarouselItem
              key={project.id}
              className="basis-10/12 md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={styles.cardWrapper}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2" />
        <CarouselNext className="-right-10" />
      </Carousel>
    </section>
  );
};

export default Projects;
