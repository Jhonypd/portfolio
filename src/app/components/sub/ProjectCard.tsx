import Link from "next/link";
import React from "react";
import { FaCode, FaEye } from "react-icons/fa";
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const styles = {
  container: `
    relative rounded-xl border-[1px] bg-[#181818]/5 
    backdrop-blur-sm transition-all duration-300 
    hover:border-purple-500/50 h-52 md:h-72
  `,
  imageContainer: `
    relative h-full w-full rounded-xl 
    overflow-hidden
  `,
  contentOverlay: `
    absolute inset-0 flex flex-col justify-between
    bg-[#181818]/90 opacity-0 transition-all duration-300
    group-hover:opacity-100 rounded-xl
  `,
  textContent: `
    flex-1 overflow-y-auto p-4 text-white
    scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
    hover:scrollbar-thumb-gray-500
  `,
  actions: `
    flex items-center justify-end gap-4 p-4
    border-t border-gray-700/50 bg-[#181818]/50
    backdrop-blur-sm
  `,
  linkButton: `
    group/link relative h-10 w-10 
    rounded-full border-2 border-[#ADB7BE] 
    transition-all duration-300 
    hover:border-white hover:scale-110
  `,
  icon: `
    absolute left-1/2 top-1/2 h-6 w-6 
    -translate-x-1/2 -translate-y-1/2 
    text-[#ADB7BE] transition-colors duration-300 
    group-hover/link:text-white
  `,
  title: `
    text-xl font-semibold mb-2
    bg-gradient-to-r from-purple-500 to-cyan-500 
    bg-clip-text text-transparent
  `,
  description: `text-[#ADB7BE] text-sm`,
};

const ProjectCard = ({
  imageUrl,
  title,
  description,
  previewUrl,
  gitUrl,
}: Props) => {
  return (
    <div className="group">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={90}
          />
          <div className={styles.contentOverlay}>
            <div className={styles.textContent}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.actions}>
              {gitUrl && (
                <Link
                  href={gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                  aria-label="Ver código no GitHub"
                >
                  <FaCode className={styles.icon} />
                </Link>
              )}
              {previewUrl && (
                <Link
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                  aria-label="Ver preview do projeto"
                >
                  <FaEye className={styles.icon} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
