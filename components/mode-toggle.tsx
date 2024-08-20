"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="flex items-center cursor-pointer"
    >
      <motion.div
        className="relative w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        <motion.div
          className="absolute top-0.6 left-0.4 h-8 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center"
          layout
          initial={false}
          animate={{ x: isDark ? 32 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-white" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
