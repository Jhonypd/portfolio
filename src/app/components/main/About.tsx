"use client";
import React from "react";

import { motion } from "framer-motion";
import TextSections from "../sub/TextSections";
import { slideInFromLeft, slideInFromRight } from "../../../../utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="mt-30 z-[20] flex w-full flex-row items-center justify-center px-20 md:flex-col"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <TextSections variant="slideInFromTop" text="Sobre mim" />
        <div className="flex flex-col md:flex-row">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6"
          >
            <Image
              src={"/jhony.jpeg"}
              width={300}
              height={300}
              alt="jhony"
              className="rounded-3xl"
            />
          </motion.div>
          <motion.p
            variants={slideInFromRight(0.8)}
            className="mx-auto my-5 max-w-[600px] text-justify text-lg text-gray-400"
          >
            Olá, sou Jhony, um profissional baseado em Brusque, Santa Catarina,
            atualmente embarcando em uma emocionante transição de carreira.
            <br />
            Estou migrando da área comercial para explorar novos horizontes no
            mundo do desenvolvimento web. Estou entusiasmado com esta nova etapa
            e comprometido em aplicar minha experiência e habilidades para
            contribuir de forma única para o campo do desenvolvimento web.
            <br />
            Com minha paixão pela tecnologia e determinação em aprender, estou
            pronto para enfrentar e contribuir de maneira significativa. Vamos
            juntos construir um futuro inovador!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
