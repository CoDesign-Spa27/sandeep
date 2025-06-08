import React from "react";
import { motion } from "framer-motion";

const MobileStack = ({ names }: { names: string[] }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div>
      <motion.div
        className="mb-10 space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        custom={0}
      >
        <div className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          Technologies
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white">
          Tools I work with
        </h2>
        <div className="w-12 h-px  bg-gradient-to-r from-color1 to-color2" />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3"
      >
        {names.map((name, index) => (
          <motion.div
            key={index}
            className="text-sm font-medium bg-gradient-to-r from-[#9c40ff]/20 to-[#ffaa40]/10 px-3 py-1 rounded-full border border-[#ffaa40]/30"
            variants={itemVariants}
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileStack;
