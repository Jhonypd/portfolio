"use client";
import React, { JSX, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  // width: number;
  // height: number;
  icon: React.ReactNode;
  index: number;
}

const SkillsDataProvider = ({ icon, index }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {icon}
    </motion.div>
  );
};

export default SkillsDataProvider;
