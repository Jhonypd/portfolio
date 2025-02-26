"use client";
import React, { useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "../../../../constants";
import { delay, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const styles = {
  container: `
    z-20 flex flex-col items-center justify-center 
    py-20 w-full md:px-10 px-7
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
};

const Projects = () => {
  const handlePlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );
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

      <Carousel
        plugins={[handlePlugin.current]}
        opts={{ align: "start" }}
        onMouseEnter={handlePlugin.current.stop}
        onMouseLeave={handlePlugin.current.reset}
        className="w-full max-w-[80%] md:max-w-4xl"
      >
        <CarouselContent>
          {projectsData.map((project, index) => (
            <CarouselItem key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projects;
