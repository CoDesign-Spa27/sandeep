import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data";
import { BorderBeam } from "./ui/border-beam";

const Stack = () => {
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(4px)"
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
         
        <motion.div
          className="mb-16 space-y-4"
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
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {techStack.map((tech: any, index: number) => (
            <TechItem key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
 
        <motion.div
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={5}
        >
          <div className="flex items-center justify-center text-xs font-mono text-gray-400 tracking-wider">
            <span>Always learning, always evolving</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechItem = ({ tech, index }: { tech: any; index: number }) => {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className="group relative"
      variants={itemVariants}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    > 
      <div className="relative flex flex-col items-center space-y-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/30">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <BorderBeam  size={80} />
        </div>
 
        <div className="relative">
          <motion.img
            src={tech.img}
            alt={`${tech.name} logo`}
            className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          />
  
          <div className="absolute inset-0 bg-gray-400/20 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
        </div>
 
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300 text-center">
          {tech.name}
        </span>
 
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px  bg-gray-300 group-hover:w-8 transition-all duration-300" />
      </div>
    </motion.div>
  );
};

export default Stack;