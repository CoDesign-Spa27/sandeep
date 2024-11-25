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
      <motion.div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center "
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
