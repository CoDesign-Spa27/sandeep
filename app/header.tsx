"use client";
import React from "react";
import { IconHome, IconUser } from "@tabler/icons-react";
import { ModeToggle } from "@/components/mode-toggle";
import { FloatingNav } from "@/components/ui/floating-navbar";
import RobotLogo from "@/public/Robot-Logo.png"
import Image from "next/image";
export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconHome className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white dark:text-white" />,
    },
  ];

  return (
    <>
    <div className="relative sm:hidden block w-full">
      {/* Use Tailwind's responsive utilities to control positioning */}
      <FloatingNav
        className="fixed sm:inset-x-0 bottom-8 sm:mx-auto sm:top-5 sm:bottom-auto  sm:transform sm:-translate-x-1/2   w-full sm:w-auto z-[10000]"
        navItems={navItems}
        />
    </div>
    <div className="bg-neutral-800 hidden sm:block">

    <div className="max-w-7xl font-switzer mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section (logo or brand name) */}
          <div className="flex z-[99999] mt-12 items-center">
           
            <Image src={RobotLogo} alt="logo" className="w-28 h-28 object-contain" />
           
          </div>

          {/* Center section (navigation links) */}
          <div className="hidden font-bold text-white sm:flex items-center space-x-8">
            <a href="/" className="hover:text-[#73c8a9] transition">
            &lt; Home / &gt;
            </a>
            <a href="#contact" className="hover:text-[#73c8a9] transition">
            &lt; Contact / &gt;
            
            </a>
          </div>

          {/* Right section (actions like buttons and toggles) */}
          <div className="flex items-center space-x-4">
            <button className="relative border font-bold font-switzer text-sm border-neutral-200 dark:border-white/[0.2] text-white px-4 py-2 rounded-full hover:bg-[#73c8a9] transition">
              <a href="mailto:dev.sandeepsingh28@gmail.com">Hire Me</a>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>

            <ModeToggle /> {/* Theme toggle button */}
          </div>
        </div>
      </div>
    </div>
        </>
  );
}
