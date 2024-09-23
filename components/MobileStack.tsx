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

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-xl font-black text-center py-5"
      >
        Tech Stack
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {names.map((name, index) => (
          <motion.div
            key={index}
            className="bg-slate-100 rounded-full px-3 py-1 inline-block font-semibold text-black m-1"
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
