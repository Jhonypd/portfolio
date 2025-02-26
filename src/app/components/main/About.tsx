"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextSections from "../sub/TextSections";
import { slideInFromLeft, slideInFromRight } from "../../../../utils/motion";
import Image from "next/image";

const styles = {
  container:
    "mt-30 z-[20] flex w-full flex-row items-center justify-center px-8 md:px-20 md:flex-col",
  imageWrapper:
    "flex h-auto w-auto max-w-[600px] flex-col gap-6 transition-all duration-300 hover:scale-105 justify-center",
  textContainer: `
    relative mx-auto max-w-[740px] flex flex-col
    h-80 overflow-y-auto overflow-x-hidden
    transition-all duration-300 ease-in-out
    scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
    hover:scrollbar-thumb-gray-500
  `,
  text: "text-justify text-lg text-gray-400 leading-relaxed space-y-4 ",
};

const About = () => {

  return (
    <motion.div
      id="about-me"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={styles.container}
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <TextSections variant="slideInFromTop" text="Sobre mim" />
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className={styles.imageWrapper}
          >
            <div className="relative">
              
              <Image
                src="/jhony.jpeg"
                width={300}
                height={300}
                alt="Jhony - Desenvolvedor Fullstack"
                className={`mx-auto rounded-3xl shadow-lg transition-opacity duration-300 md:mx-0 `}
                
                priority
              />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <div className={styles.textContainer} key="text-container">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className={styles.text}
              >
                <p>
                  E aí! Sou o Jhony, um cara de Brusque que resolveu dar um
                  salto na carreira.
                </p>

                <p>
                  Depois de anos no comercial, decidi mergulhar de cabeça no
                  mundo da tecnologia. Hoje, estou construindo minha história
                  como desenvolvedor, trazendo comigo a experiência de quem sabe
                  muito sobre comunicação, negociação e resolver problemas.
                </p>

                <p>
                  Trabalho com desenvolvimento fullstack, com foco em Node.js,
                  React, TypeScript e bancos de dados relacionais. Já coloquei
                  de pé um sistema de agendamento para barbearias que mostra
                  como consigo transformar ideias em soluções práticas.
                </p>

                <p>
                  Atualmente, atuo como QA em uma empresa que desenvolve
                  sistemas MES (Manufacturing Execution System) para a indústria
                  de automação, com foco especial no setor têxtil. Mergulhado no
                  universo da Indústria 4.0, trabalho com soluções de IoT que
                  transformam dados industriais em inteligência estratégica.
                </p>

                <p>
                  Minha migração não é só sobre aprender códigos, mas sobre usar
                  minha bagagem comercial para criar soluções que realmente
                  fazem sentido para os negócios.
                </p>

                <p>
                  Estou animado para novos desafios e sempre de olho em evoluir.
                  Bora trocar uma ideia?
                </p>
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
