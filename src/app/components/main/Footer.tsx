import React from "react";

import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative z-50 h-full w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col flex-wrap items-center justify-around px-4 md:flex-row md:justify-between">
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start">
            <div className="flex w-full flex-row items-center justify-between">
              <a
                href="https://github.com/Jhonypd"
                className="my-[15px] flex cursor-pointer flex-row items-center"
              >
                <RxGithubLogo className="h-6 w-6" />
              </a>

              <a
                href="https://www.instagram.com/jhonydupe/"
                className="my-[15px] flex cursor-pointer flex-row items-center"
              >
                <RxInstagramLogo className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/jhonypereiraduarte"
                className="my-[15px] flex cursor-pointer flex-row items-center"
              >
                <RxLinkedinLogo className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start md:items-end">
            <a
              href="mailto:jhony-16@live.com?subject=&body="
              target="_blanck"
              className="my-[15px] flex cursor-pointer flex-row items-center"
            >
              <BsEnvelopeAtFill />
              <span className="ml-[6px] text-[15px]">jhony-16@live.com</span>
            </a>
            <p className="my-[15px] flex cursor-pointer flex-row items-center font-extralight">
              Desenvolvido por
              <span className="ml-[6px] text-[15px] font-semibold">
                Jhony Pereira
              </span>
              <FaCode className="ml-2" />
            </p>
          </div>
        </div>
        <div className="text-center font-extralight">
          Copyright &copy; 2024{" "}
          <a href="#" className="font-semibold">
            Jhonydev.com
          </a>
          . Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
