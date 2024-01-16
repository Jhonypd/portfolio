"use client";
import React from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import TextSections from "./TextSections";

const SkillText = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <TextSections
        variant="slideInFromTop"
        text="Think better with Next js 13"
      />
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-[10px] text-center text-[30px] text-white"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive mb-10 mt-[10px] text-center text-[20px] text-gray-200"
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
