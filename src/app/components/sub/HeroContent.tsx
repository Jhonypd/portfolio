"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-40 flex w-full flex-row items-center justify-center px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-[13px]">
            Front-end Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-uto mt-6 flex h-auto max-w-[600px] flex-col gap-6 text-6xl font-bold text-white"
        >
          <span>
            Providing{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              the best
            </span>{" "}
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] text-lg text-gray-400"
        >
          &apos;m a Full Stack Software Engineer with experience in website,
          mobile and software development. Check out my projects and
          skills.&apos;
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="button-primary max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white"
        >
          Learn More!
        </motion.a>
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
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
