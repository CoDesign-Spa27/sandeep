"use client"
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { EXPERIENCE_DATA } from '@/data/index'
import ExperienceCard from '@/components/experience-card';
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

  return (
    <div className="py-10">
 
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}  
        className="text-xl font-black text-center py-5"
      >
        Work Experience
      </motion.div>
 
      <motion.div
        className="flex flex-col gap-2"
        variants={containerVariants}
        initial="hidden"
        animate={controls}  
      >
        {EXPERIENCE_DATA.map((experience) => (
          <motion.div
            key={experience.id}
            variants={cardVariants}  
          >
            <ExperienceCard {...experience} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience;
