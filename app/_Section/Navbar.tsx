"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ModeToggle } from "../../components/mode-toggle";
import DownloadResumeButton from "../../components/DownloadResumeButton";
import { motion } from "framer-motion";

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  homeRef,
  projectsRef,
  experienceRef,
}) => {
  const tabs = ["Home", "Projects", "Experience"];

  const [selected, setSelected] = useState(tabs[0]);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
  };

  const handleTabClick = (tab: string) => {
    setSelected(tab);
    if (tab === "Home") {
      scrollToSection(homeRef);
    } else if (tab === "Projects") {
      scrollToSection(projectsRef);
    } else if (tab === "Experience") {
      scrollToSection(experienceRef);
    }
  }
  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-center">
        <div className="sm:flex  items-center justify-between">
          <div className="flex gap-3 items-center p-3">
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <Chip
                  text={tab}
                  selected={selected === tab}
                  setSelected={handleTabClick}
                  key={tab}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center gap-5 sm:justify-between p-3">
              <DownloadResumeButton />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: (tab:string )=>void ;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-black dark:text-slate-300 hover:text-slate-200 hover:bg-gray-900"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-[#9c40ff] to-[#ffaa40] rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default React.memo(Navbar);
