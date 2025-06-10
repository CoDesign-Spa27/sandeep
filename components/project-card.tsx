import Image from "next/image";
import React, { useState } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
  imageUrl: string;
  category?: string;
}

export const ProjectCard = ({
  name,
  description,
  technologies,
  liveLink,
  codeLink,
  imageUrl,
  category = "Web Development",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full group">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm 
          rounded-xl border border-white/10 overflow-hidden cursor-pointer p-5 h-[480px]
          transition-all duration-500 ease-out hover:border-color1/40
          shadow-lg shadow-black/30 hover:shadow-color1/10
        `}
      >
        <div className="relative w-full h-32 mb-5 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="space-y-2">
          <h3
            className={`
              text-2xl font-bold transition-all duration-300
              ${isHovered ? "text-color1" : "text-white"}
            `}
          >
            {name}
            <span className="block w-10 h-0.5 bg-color1 mt-2 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </h3>
 
          <p className="text-sm text-gray-300/90 leading-relaxed line-clamp-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className={`
                  text-sm font-medium bg-gradient-to-r from-[#9c40ff]/20 to-[#ffaa40]/10 px-3 py-1 rounded-full border border-[#ffaa40]/30
                `}
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="text-sm font-medium bg-gradient-to-r from-[#9c40ff]/20 to-[#ffaa40]/10 px-3 py-1 rounded-full border border-[#ffaa40]/30">
                +{technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
 
          <div
            className={`
            absolute bottom-5 left-5 right-5 flex gap-3
            transition-all duration-500 ease-out
            ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }
          `}
          >
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
               text-center p-2 text-sm font-semibold rounded-full
              bg-color1/10 text-color1 border border-color1/30
              transition-all duration-300 hover:bg-color1/20 hover:border-color1/50
              flex items-center justify-center gap-2
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
              text-center p-2 text-sm font-semibold rounded-full
              bg-color2/10 text-color2 border border-color2/30
              transition-all duration-300 hover:bg-color2/20 hover:border-color2/50
              flex items-center justify-center gap-2
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
 
      </div>
    </div>
  );
};
