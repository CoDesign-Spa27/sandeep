/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { EXPERIENCE_DATA } from "@/data/index";
import ExperienceCard from "@/components/experience-card";
import { useInView } from "react-intersection-observer";

const Experience = () => {
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
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };
  return (
    <div className="py-5">
      <motion.div
        className="mb-10 space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        custom={0}
      >
        <div className="text-xs font-mono text-gray-400 tracking-wider uppercase">
          Experience
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white">
          Where I've Worked
        </h2>
        <div className="w-12 h-px  bg-gradient-to-r from-color1 to-color2" />
      </motion.div>

      <motion.div
        className="flex flex-col-reverse gap-2"
        variants={containerVariants}
        animate={controls}
      >
        {EXPERIENCE_DATA.map((experience) => (
          <motion.div key={experience.id} variants={cardVariants}>
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
