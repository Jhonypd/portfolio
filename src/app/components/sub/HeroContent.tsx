"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../../utils/motion";
import Image from "next/image";
import TextSections from "./TextSections";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-32 flex w-full flex-col items-center justify-center px-10 md:flex-row md:px-20"
    >
      <div className="m-auto mt-4 flex h-full w-full flex-col justify-center gap-5 text-start">
        <TextSections
          variant="slideInFromTop"
          text="Front-end Developer Portfolio"
        />
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-uto mt-2 flex h-auto max-w-[600px] flex-col gap-6 text-4xl font-bold text-white md:text-6xl"
        >
          <span>
            Jhony Pereira{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Desenvolvedor Web
            </span>{" "}
            Front-end
          </span>
        </motion.div>
        <div className="my-2 flex flex-row gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            className="button-primary mt-4 min-w-[100px] cursor-pointer rounded-lg py-2 text-center text-white md:max-w-[200px]"
            href="#about-me"
          >
            Ver Mais
          </motion.a>
          <motion.a
            variants={slideInFromLeft(0.7)}
            className="button-primary mt-4 min-w-[100px] cursor-pointer rounded-lg py-2 text-center text-white md:max-w-[200px]"
            href="https://jhonyfrontend.vercel.app/downloads/jhony_pereira_duarte"
            download={"Jhony_Pereira_Duarte.pdf"}
          >
            Baixar CV
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src={"/mainIconsdark.svg"}
          alt="Work icons"
          height={650}
          width={650}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
