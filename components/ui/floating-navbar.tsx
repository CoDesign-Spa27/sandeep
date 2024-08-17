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
          "border-4 border-[#73c8a9]",    
          // Responsive positioning: bottom for small screens, top for larger screens
          "bottom-5 sm:top-5 sm:bottom-auto",
          className
        )}
      >
        <div className="flex items-center justify-center space-x-4 bg-transparent/2 backdrop-blur-sm dark:bg-transparent/20   rounded-full  px-8 py-2">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <ModeToggle />
          <button className="border font-bold font-switzer text-sm relative border-black dark:border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <a href="mailto:dev.sandeepsingh28@gmail.com">Hire</a>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
