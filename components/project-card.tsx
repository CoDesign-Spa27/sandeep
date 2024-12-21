import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
}

const ProjectCard = ({
  name,
  description,
  technologies,
  liveLink,
  codeLink,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      
      className="w-full max-w-md mx-auto"
    >
      <motion.div
        whileHover={{ y: -2 , scale:1.05 }}
        transition={{ duration: 0.3 }}
        
        className="h-[400px] flex flex-col bg-gradient-to-br dark:from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:border-cyan-400 transition-all duration-300 ease-in-out"
      >
        <div className="mb-6">
          <h2 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            {name}
          </h2>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech: string, index: number) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 text-xs font-medium dark:text-slate-300 dark:bg-slate-800/50 rounded-full border border-slate-700/50"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm dark:text-slate-300 mb-6 leading-relaxed flex-grow overflow-y-auto">
          {description}
        </p>

        {/* Actions */}
        <div className="flex gap-4 mt-auto">
          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg hover:opacity-90 transition-opacity"
          >
            Live
          </motion.a>
          <motion.a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium border border-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            View Code
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;