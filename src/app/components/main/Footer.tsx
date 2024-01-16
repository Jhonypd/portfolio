import React from "react";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { BsEnvelopeAtFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="h-full w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-row flex-wrap items-center justify-around">
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start">
            <div className="text-[16px] font-bold">Comunity</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxDiscordLogo />
              <span className="ml-[6px] text-[15px]">Discord</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxGithubLogo />
              <span className="ml-[6px] text-[15px]">Github</span>
            </p>
          </div>
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start">
            <div className="text-[16px] font-bold">Social Media</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxInstagramLogo />
              <span className="ml-[6px] text-[15px]">Instagram</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxLinkedinLogo />
              <span className="ml-[6px] text-[15px]">Linkedin</span>
            </p>
          </div>
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-start">
            <div className="text-[16px] font-bold">About</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxDiscordLogo />
              <span className="ml-[6px] text-[15px]">Become Sponsor</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxGithubLogo />
              <span className="ml-[6px] text-[15px]">Learming about me</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <BsEnvelopeAtFill />
              <span className="ml-[6px] text-[15px]">
                jhonyfrontend@outlook.com
              </span>
            </p>
          </div>
        </div>
        <div className="text-center">
          &copy; Jhony Dev 2023 Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
