"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideInFromTop } from "../../../../utils/motion";
import { useToast } from "@/components/ui/use-toast";

const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templatePrams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_eooz9a4",
        "template_5wfwcta",
        templatePrams,
        "5e3mcJWX9xwERcqKi",
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("FAILURE!!", err);
        },
      );
  };
  return (
    <div className="my-4 flex w-full flex-col items-center py-2">
      <div className=" z-[5] mb-5 h-auto w-auto ">
        <motion.div
          variants={slideInFromTop}
          className="mb-3 text-center text-[40px] font-medium text-gray-200"
        >
          <p>Entre em contato</p>
        </motion.div>
      </div>
      <form
        className=" flex w-full flex-col items-center justify-center gap-2  bg-transparent md:w-[600px] md:p-4"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className=" form-input w-[80%] rounded-lg border-[1px] border-gray-300 bg-[#03001417] px-2 py-1 text-white backdrop-blur-md"
        />
        <input
          className="form-input w-[80%] rounded-lg border-[1px] border-gray-300 bg-[#03001417] px-2 py-1 text-white backdrop-blur-md"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="form-input w-[80%] rounded-lg border-[1px] border-gray-300 bg-[#03001417] px-2 py-1 text-white backdrop-blur-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem"
          rows={5}
        ></textarea>

        <input
          type="submit"
          value="Enviar"
          onClick={() => {
            toast({
              title: "Mensagem enviada!",
              description: `${name} sua mensagem foi enviada!`,
            });
          }}
          className="button-primary mt-4 min-w-[100px] cursor-pointer rounded-lg p-2 text-center text-white md:max-w-[200px]"
        />
      </form>
    </div>
  );
};

export default ContactContent;
