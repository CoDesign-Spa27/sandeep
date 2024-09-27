import { motion } from "framer-motion";
import { Code, SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import Balancer from "react-wrap-balancer";

interface ProjectCardProps {
  name: string;
  video: string;
  description: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
}

const ProjectCard = ({
  name,
  video,
  description,
  technologies,
  liveLink,
  codeLink,
}: ProjectCardProps) => {

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="bg-black/10 dark:bg-white/10 sm:w-96 w-80 h-[28rem] sm:h-[31rem] rounded-xl sm:p-5 p-2 backdrop-blur-sm border border-transparent transition-all duration-300 ease-in-out shadow-lg"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
          borderColor: "#8b5cf6",
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col gap-3 justify-center">
          <div>
            <motion.h1
              className="text-center sm:text-xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.h1>
          </div>
          <motion.div
            className="rounded-xl overflow-hidden"
            initial={{ opacity: 0.9, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
          >
        <video
  src={video}
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  className="pointer-events-none mx-auto h-36 w-full object-cover rounded-xl object-top"
/>
          </motion.div>

          <div>
            {technologies.map((name, index) => (
              <motion.div
                key={index}
                className="bg-slate-100 rounded-full px-2 py-1 inline-block font-semibold text-[11px] sm:text-[14px] text-black m-1"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * index }}
              >
                {name}
              </motion.div>
            ))}
          </div>

          <div className="text-gray-400 sm:text-base text-sm">
            <Balancer>
             {description}
            </Balancer>
          </div>

          <div className="sm:flex hidden gap-4">
            <motion.button
            onClick={() => window.open(liveLink, "_blank")}
              className="flex overflow-hidden ring-white w-[4.9rem] hover:w-[6.5rem] items-center gap-2 cursor-pointer bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-5 py-1 rounded-full transition-all ease-in-out hover:scale-105 font-[revert] active:scale-100 shadow-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#7c3aed",
                boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Live
              <SquareArrowOutUpRight className="h-4" />
            </motion.button>

            <motion.button
            onClick={() => window.open(codeLink, "_blank")}
              className="flex overflow-hidden ring-white w-[4.9rem] hover:w-[6.5rem] items-center gap-2 cursor-pointer bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-5 py-1 rounded-full transition-all ease-in-out hover:scale-105 font-[revert] active:scale-100 shadow-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#7c3aed",
                boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Code
              <SquareArrowOutUpRight className="h-4" />
            </motion.button>
          </div>

          <div className="flex sm:hidden px-2 py-2 gap-4">
            <div 
                onClick={() => window.open(liveLink, "_blank")}
            >
            <SquareArrowOutUpRight className="h-8 w-8
             bg-gradient-to-r from-violet-600 to-indigo-500 p-2 rounded-full" />
            </div>
<div 
   onClick={() => window.open(codeLink, "_blank")}
> 
<Code className="h-8 w-8
             bg-gradient-to-r from-violet-600 to-indigo-500 p-2 rounded-full" />
</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
