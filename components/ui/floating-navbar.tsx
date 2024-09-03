"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import DownloadResumeButton from "../DownloadResumeButton";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed z-[5000] inset-x-0 mx-auto font-bold p-1 rounded-full flex justify-center max-w-fit", 
          " animate-gradient bg-300% bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500",   
          // Responsive positioning: bottom for small screens, top for larger screens
          "bottom-5 sm:top-5 sm:bottom-auto",
          className
        )}
      >
        <div className="flex items-center justify-center space-x-2 bg-[#18181B] dark:bg-[#18181B]   rounded-full  px-8 py-2">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-white dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block text-white sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-white text-sm">{navItem.name}</span>
            </Link>
          ))}
          <button className="border font-bold font-switzer text-[0.6rem] relative border-neutral-200 dark:border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-2 py-1 rounded-full">
            <a href="mailto:dev.sandeepsingh28@gmail.com">Hire</a>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
          <ModeToggle />
          <DownloadResumeButton />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
