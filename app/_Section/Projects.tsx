"use client";
import ProjectCard from "@/components/project-card";
import React, { useEffect } from "react";
import { PROJECTS_DATA } from "@/data/index";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
const Projects = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };
  return (
    <div className="">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="text-xl font-black text-center py-10"
      >
        Projects
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2e gap-10 sm:gap-4"
    variants={containerVariants}
      >
        {PROJECTS_DATA.map((project) => (
          <motion.div className="" key={project.id} variants={cardVariants}>
            <ProjectCard
              name={project.name}
              video={project.video}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
