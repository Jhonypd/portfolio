import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCode, FaEye } from "react-icons/fa";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({
  imageUrl,
  title,
  description,
  previewUrl,
  gitUrl,
  tags,
}: Props) => {
  return (
    <div className="rounded-xl border-[1px]">
      <div
        className="group relative h-52 rounded-t-xl md:h-72"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute left-0 top-0 hidden h-full w-full  items-center justify-center gap-4 rounded-t-xl bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            className="group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <FaCode className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <FaEye className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="mt-3 rounded-b-xl  bg-transparent px-4 py-6 text-white">
        <h5 className="mb-2 text-xl font-semibold ">{title}</h5>
        <p className=" text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
