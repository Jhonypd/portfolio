import Link from "next/link";
import React from "react";

interface navLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink: React.FC<navLinkProps> = ({ href, title, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link
      className="block rounded py-2 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0"
      href={href}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
