"use client";
import React from "react";

import ContactContent from "../sub/ContactContent";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-4 "
    >
      <div className="absolute z-20 flex h-auto w-[90%] translate-y-[-50px] flex-col items-center justify-center md:w-auto">
        <div className="Welcome-box py- z-20 w-full border border-[#7042f88b] py-[4px] opacity-[0.9] md:px-[15px]">
          <ContactContent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
