"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../../../utils/motion";
import Image from "next/image";
import ContactContent from "../sub/ContactContent";

const Encryption = () => {
  return (
    <div
      id="contact"
      className="relative flex h-full min-h-screen w-full flex-row items-center justify-center"
    >
      <div className="absolute top-0 z-[5] h-auto w-auto">
        <motion.div
          variants={slideInFromTop}
          className="text-center text-[40px] font-medium text-gray-200"
        >
          Entre{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            em
          </span>{" "}
          contato
        </motion.div>
      </div>
      <div className="absolute z-20 flex h-auto w-auto translate-y-[-50px] flex-col items-center justify-center">
        <div className="Welcome-box z-20 my-3 border border-[#7042f88b] px-[15px] py-[4px] opacity-[0.9]">
          <ContactContent />
        </div>
      </div>
      <div className="absolute bottom-[10px] z-20 px-[5px]">
        <div className="cursive text-center text-[20px] font-medium text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>
    </div>
  );
};

export default Encryption;
