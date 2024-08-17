"use client";
import React from "react";
import { IconHome, IconUser } from "@tabler/icons-react";
import { ModeToggle } from "@/components/mode-toggle";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      {/* Use Tailwind's responsive utilities to control positioning */}
      <FloatingNav
        className="fixed sm:inset-x-0 bottom-8 sm:mx-auto sm:top-5 sm:bottom-auto  sm:transform sm:-translate-x-1/2   w-full sm:w-auto z-[10000]"
        navItems={navItems}
      />
    </div>
  );
}
