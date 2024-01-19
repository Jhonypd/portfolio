"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="my-2 flex flex-col items-center">
      <form
        className=" flex min-w-96 flex-col items-center justify-center gap-2  bg-transparent p-4 md:w-[600px]"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="button-primary form-input w-[80%] rounded-2xl border-none bg-purple-500 px-2 py-1 text-white"
        />
        <input
          className="button-primary form-input w-[80%] rounded-2xl border-none bg-purple-500 px-2 py-1 text-white"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="button-primary form-textarea w-[80%] rounded-2xl border-none bg-purple-500 px-2 py-1 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem"
          rows={5}
        ></textarea>
        <input
          type="submit"
          value="Enviar"
          className="button-primary mt-4 min-w-[100px] cursor-pointer rounded-lg p-2 text-center text-white md:max-w-[200px]"
        />
      </form>
    </div>
  );
};

export default ContactContent;
