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
        text="Sempre aberto a aprender novas tecnologias"
      />
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-[10px] text-center text-[30px] text-white"
      >
        Tecnologias que utilizo
      </motion.div>
      {/* <motion.div
        variants={slideInFromRight(0.5)}
        className="cursiva mb-10 mt-[10px] text-center text-[20px] text-gray-200"
      >
        Atualmente estou atuando como QA em uma empresa que desenvolve MES para
        a indústria de automação, com bastante foco na área textil, onde
        trabalhamos com o conceito de IoT para a industria 4.0.
      </motion.div> */}
    </div>
  );
};

export default SkillText;
