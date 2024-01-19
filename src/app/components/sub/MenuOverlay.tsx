import React from "react";
import NavLink from "./NavLink";
import { GoDownload } from "react-icons/go";
import { FaEnvelope, FaTelegram } from "react-icons/fa";

interface Link {
  path: string;
  title: string;
}
interface MenuOverlayProps {
  links: Link[];
  onCloseMenu: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, onCloseMenu }) => {
  const handleLinkClick = () => {
    onCloseMenu();
  };
  return (
    <ul className="flex flex-col items-center py-4 md:hidden">
      {links.map((link: Link, index: number) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            onClick={handleLinkClick}
          />
        </li>
      ))}
      <div className="mt-2 flex w-full flex-row">
        <ul className="flex w-full flex-row items-center justify-between">
          <li className="px-3">
            <a
              href="https://drive.google.com/file/d/1Gci45O5Lf2FnXwHwIRdd6v9aR-91M3qR/view?usp=drive_link"
              download={"Jhony_Pereira_Duarte.pdf"}
              className="flex flex-row items-center gap-2 text-slate-200 hover:text-white"
            >
              <GoDownload className="h-5 w-5" /> baixar cv
            </a>
          </li>
          <li>
            <a href="https://t.me/@jhonydph" target="_blanck">
              <button className="flex flex-row items-center gap-2 text-slate-200 hover:text-white">
                <FaTelegram className="h-5 w-5" /> Telegram
              </button>
            </a>
          </li>
          <li>
            <a href="mailto:jhony-16@live.com?subject=&body=">
              <button className="flex flex-row items-center gap-2 text-slate-200 hover:text-white">
                <FaEnvelope className="h-5 w-5" /> E-mail
              </button>
            </a>
          </li>
        </ul>
      </div>
    </ul>
  );
};

export default MenuOverlay;
