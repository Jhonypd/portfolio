"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

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
          setMsg("Mensagem enviada com sucesso!");
        },
        (err) => {
          console.log("FAILURE!!", err);
        },
      );
  };
  return (
    <div className="my-2 flex w-full flex-col items-center py-2">
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
        <div className="flex flex-row px-3 py-2">
          {"será exibido a mensagem de confirmação."}
          {/* {?msg.length > 0 (<p>{msg}</p>)} */}
        </div>
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
