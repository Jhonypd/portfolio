"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import TextSections from "../sub/TextSections";
import { slideInFromLeft, slideInFromRight } from "../../../../utils/motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  const [viewPlus, setViewPlus] = useState<boolean>(false);

  const handleView = () => {
    setViewPlus(!viewPlus);
  };

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
          <div className="relative mx-auto flex max-w-[600px] flex-col">
            <motion.p
              variants={slideInFromRight(0.8)}
              className={`mx-auto my-5 ${
                viewPlus ? "" : "h-72 pb-6"
              }  max-w-[600px] overflow-hidden text-justify text-lg text-gray-400`}
            >
              E aí! Sou o Jhony, um cara de Brusque que resolveu dar um salto na
              carreira.
              <br />
              Depois de anos no comercial, decidi mergulhar de cabeça no mundo
              da tecnologia. Hoje, estou construindo minha história como
              desenvolvedor, trazendo comigo a experiência de quem sabe muito
              sobre comunicação, negociação e resolver problemas.
              <br />
              Trabalho com desenvolvimento fullstack, com foco em Node.js,
              React, TypeScript e bancos de dados relacionais. Já coloquei de pé
              um sistema de agendamento para barbearias que mostra como consigo
              transformar ideias em soluções práticas.
              <br />
              Atualmente, atuo como QA em uma empresa que desenvolve sistemas
              MES (Manufacturing Execution System) para a indústria de
              automação, com foco especial no setor têxtil. Mergulhado no
              universo da Indústria 4.0, trabalho com soluções de IoT que
              transformam dados industriais em inteligência estratégica.
              <br />
              Minha migração não é só sobre aprender códigos, mas sobre usar
              minha bagagem comercial para criar soluções que realmente fazem
              sentido para os negócios.
              <br />
              Estou animado para novos desafios e sempre de olho em evoluir.
              Bora trocar uma ideia?
            </motion.p>
            <Button
              onClick={handleView}
              className={`absolute ${
                viewPlus ? "!-bottom-4" : "!bottom-0"
              }  w-full bg-[#03001417] backdrop-blur-md`}
            >
              {viewPlus ? "Ver menos" : "ver mais"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
