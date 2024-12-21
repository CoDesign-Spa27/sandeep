import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data";

const Stack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full py-12 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6"
          variants={containerVariants}
        >
          {techStack.map((tech: any, index: any) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="group relative"
            >
              <div className="absolute inset-0  rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-glow" />
              <div className="relative h-full dark:bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-slate-500/50 transition-colors duration-300">
                <motion.img
                  src={tech.img}
                  alt={`${tech.name} logo`}
                  className="w-12 h-12 object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <motion.span className="text-sm font-medium dark:text-slate-300 text-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Stack;
