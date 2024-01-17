"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../sub/NavLink";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import MenuOverlay from "../sub/MenuOverlay";

const Navbar = () => {
  const navLinks = [
    {
      title: "Inicio",
      path: "#",
    },
    {
      title: "Sobre mim",
      path: "#about-me",
    },
    {
      title: "Tecnologias",
      path: "#skills",
    },
    {
      title: "Projetos",
      path: "#projects",
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#03001417] px-10 py-4 shadow-lg shadow-[#2a0e61]/50 backdrop-blur-md md:py-1">
      <div className="mx-auto my-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link
          href={"/"}
          className="text-lg font-semibold text-white md:text-xl"
        >
          Jhony Dev
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <CiMenuBurger className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={closeNavbar}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onCloseMenu={closeNavbar} />
      ) : null}
    </nav>
  );
};

export default Navbar;
