"use client";
import React from "react";
import { ModeToggle } from "../../components/mode-toggle";
import DownloadResumeButton from "../../components/DownloadResumeButton";
import { motion } from "framer-motion";

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({homeRef, projectsRef, experienceRef}) => {

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }


  const containerVariants = {
    hidden: { opacity: 0, y: -100 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 20,
        delay: 0.2,
      },
    },
  
  }
  return (
    <motion.div className="w-full max-w-2xl"  variants={containerVariants} 
  initial="hidden" animate="visible"
  >
      <div className="dark:bg-white/20 bg-black/20 backdrop-blur-sm rounded-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 pl-7 items-center p-3">
            <div 
            onClick={()=>scrollToSection(homeRef)}
            className="text-sm font-bold relative px-3 py-2 transition-all duration-300 cursor-pointer ease-in-out transform hover:text-white group">
              Home
              <div className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-[#73c8a9] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </div>

            <div 
            onClick={()=>scrollToSection(projectsRef)}
            className="text-sm cursor-pointer font-bold relative px-3 py-2 transition-all duration-300 ease-in-out transform hover:text-white group">
              Projects
              <div className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-[#73c8a9] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </div>

            <div
            onClick={()=>scrollToSection(experienceRef)}
            className="text-sm font-bold relative px-3 py-2 transition-all duration-300 cursor-pointer ease-in-out transform hover:text-white group">
              Experience
              <div className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 bg-[#73c8a9] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-5 p-3">
              <ModeToggle />
              <DownloadResumeButton />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
