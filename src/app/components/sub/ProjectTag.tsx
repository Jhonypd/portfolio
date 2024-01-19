import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyle = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADb7BE] border-slate-600 hver:border-white";
  return (
    <button
      className={`${buttonStyle} cursor-pointer rounded-full border-2 px-6 py-2 text-xl `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
