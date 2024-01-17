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
        text="Penso melhor com Next js 13"
      />
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-[10px] text-center text-[30px] text-white"
      >
        Tecnologias que utilizo
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursiva mb-10 mt-[10px] text-center text-[20px] text-gray-200"
      >
        Sempre a aberto a aprender novas tecnologias e métodos
      </motion.div>
    </div>
  );
};

export default SkillText;
