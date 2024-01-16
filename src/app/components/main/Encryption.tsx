"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../../../utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-row items-center justify-center">
      <div className="absolute top-0 z-[5] h-auto w-auto">
        <motion.div
          variants={slideInFromTop}
          className="text-center text-[40px] font-medium text-gray-200"
        >
          Performace{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            &
          </span>{" "}
          Security
        </motion.div>
      </div>
      <div className="absolute z-20 flex h-auto w-auto translate-y-[-50px] flex-col items-center justify-center">
        <div className="cursor-poiinter group flex h-auto w-auto flex-col items-center">
          <Image
            src={"/LockTop.png"}
            alt="Lock Top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src={"/LockMain.png"}
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
        <div className="Welcome-box z-20 my-[20px] border border-[#7042f88b] px-[15px] py-[4px] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute bottom-[10px] z-20 px-[5px]">
        <div className="cursive text-center text-[20px] font-medium text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>
      <div className="absolute flex w-full items-start justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="h-auto w-full"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
