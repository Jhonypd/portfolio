"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../../utils/motion";
import Image from "next/image";
import TextSections from "./TextSections";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const styles = {
  container: `
    z-[20] mt-32 flex w-full flex-col items-center 
    justify-center px-10 md:flex-row md:px-20
  `,
  contentWrapper: `
    m-auto mt-4 flex h-full w-full flex-col 
    justify-center gap-5 text-start
  `,
  titleWrapper: `
    mt-2 flex h-auto max-w-[600px] flex-col gap-6 
    text-4xl font-bold text-white md:text-6xl
  `,
  gradientText: `
    bg-gradient-to-r from-purple-500 to-cyan-500 
    bg-clip-text text-transparent
  `,
  buttonContainer: "my-2 flex flex-row gap-4",
  button: `
    button-primary mt-4 cursor-pointer rounded-lg py-2 
    text-center text-white transition-all duration-300
    hover:opacity-90 min-w-[120px] md:min-w-[150px]
  `,
  
};

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className={styles.container}>
      <div className={styles.contentWrapper}>
        <TextSections
          variant="slideInFromTop"
          text="Front-end Developer Portfolio"
        />
        <motion.div
          variants={slideInFromLeft(0.5)}
          className={styles.titleWrapper}
        >
          <span>
            Jhony Pereira{" "}
            <span className={styles.gradientText}>Desenvolvedor Web</span>{" "}
            Full-stack
          </span>
        </motion.div>

        <div className={styles.buttonContainer}>
          <motion.a
            variants={slideInFromLeft(1)}
            className={styles.button}
            href="#about-me"
          >
            Ver Mais
          </motion.a>

          <motion.div variants={slideInFromLeft(0.7)} className={styles.button}>
          <Dialog>
              <DialogTrigger className="px-3">Ver Curriculo</DialogTrigger>
              <DialogContent className="min-w-fit ">
                <DialogHeader>Curriculo</DialogHeader>
                <iframe
                  src="https://drive.google.com/file/d/1QCWDPU2ZdcnUusXEuf6D84njqaDnC8HV/preview"

                  height="480"
                  allow="autoplay"
                  className="w-full md:w-[800px]"
                ></iframe>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full items-center justify-center"
      >
        {/* <Image
          src={"/mainIconsdark.svg"}
          alt="Work icons"
          height={650}
          width={650}
          priority
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
