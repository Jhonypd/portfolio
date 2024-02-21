import React from "react";

import { motion, Variants } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

interface TextSectionsProps {
  variant: "slideInFromLeft" | "slideInFromRight" | "slideInFromTop" | " ";
  text: string;
}

const getVariant = (variant: string): Variants => {
  switch (variant) {
    case "slideInFromLeft":
      return slideInFromLeft(0);
    case "slideInFromRight":
      return slideInFromRight(0);
    case "slideInFromTop":
    default:
      return slideInFromTop;
  }
};

const TextSections: React.FC<TextSectionsProps> = ({ variant, text }) => {
  const selctedVariant = getVariant(variant);
  return (
    <motion.div
      variants={selctedVariant}
      className="Welcome-box w-max border border-[#7042f88b] px-4 py-[8px] opacity-[0.9]"
    >
      <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
      <h1 className="Welcome-text text-[13px]">{text}</h1>
    </motion.div>
  );
};

export default TextSections;
