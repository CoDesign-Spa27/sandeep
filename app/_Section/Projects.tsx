"use client";
import {ProjectCard} from "@/components/project-card";
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
        duration: 0.8,
        delay: delay * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="">
       <motion.div
        className="mb-10 space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        custom={0}
      >
        <div className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          Projects
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white">
          Featured Work
        </h2>
        <div className="w-12 h-px  bg-gradient-to-r from-color1 to-color2" />
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center "
        variants={containerVariants}
      >
        {PROJECTS_DATA.map((project) => (
          <motion.div className="" key={project.id} variants={cardVariants}>
        <ProjectCard
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          liveLink={project.liveLink}
          codeLink={project.codeLink}
          imageUrl={project.imageUrl}
        />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
