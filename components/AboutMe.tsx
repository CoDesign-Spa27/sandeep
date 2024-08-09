"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundBeams } from "./ui/background-beams";

export const AboutMe = () => {
  // Set up animation control
  const controls = useAnimation();

  // Set up intersection observer to detect when the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  // Start animation when component is in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define popping animation variants
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full rounded-md bg-neutral-950 relative flex flex-col antialiased"
    >
      <div className="max-w-7xl mx-auto p-10">
        <motion.div
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-switzer mb-4 text-white"
          initial="hidden"
          animate={controls}
          variants={popUpVariants} // Apply pop-up animation to the header
        >
          About Me
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { width: 0 },
              visible: { width: "100%" },
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="h-[0.1rem] bg-[#73C8A9] mt-2"
          />
        </motion.div>
        <motion.div
          className="font-switzer py-6 tracking-wide grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
          initial="hidden"
          animate={controls}
          variants={popUpVariants} // Apply pop-up animation to the content grid
        >
          <div className="space-y-6">
            <div className="text-sm sm:text-lg md:text-xl leading-relaxed">
              <span className="font-semibold text-2xl text-purple-400">Hello! I'm Sandeep Singh,</span> a passionate and innovative full-stack developer with a knack for crafting seamless digital experiences.
              <br />
              <br />
              With expertise in both front-end and back-end technologies, I thrive on bringing ideas to life and solving complex problems with elegant solutions.
            </div>
            <div className="text-sm sm:text-lg md:text-xl leading-relaxed">
              <span className="font-semibold text-2xl text-[#73C8A9]">My Journey</span>
              <br />
              I embarked on my journey in software development with a curiosity for how things work behind the scenes.
              <br />
              Over the years, I've honed my skills in technologies like React, Node.js, Express, Next.js, and databases such as MongoDB and PostgreSQL. I also have additional knowledge of Docker, Git, and DevOps.
              <br />
              My commitment to continuous learning ensures that I stay updated with the latest industry trends and tools.
            </div>
          </div>
          <div className="space-y-4 p-5 md:block hidden md:p-0">
            <div className="text-2xl text-pink-400 font-bold mb-4">What I Do</div>
            <div className="text-sm sm:text-lg md:text-xl leading-relaxed">
              As a full-stack developer, I enjoy working on all aspects of web development. Whether it's designing intuitive user interfaces, building robust server-side logic, or optimizing database performance, I approach each task with creativity and precision.
              <br />
              <br />
              <span className="font-semibold text-[#73C8A9]">Front-End Development:</span> Crafting responsive and user-friendly interfaces with modern frameworks and libraries.
              <br />
              <br />
              <span className="font-semibold text-[#73C8A9]">Back-End Development:</span> Developing efficient server-side logic and RESTful APIs to power applications.
              <br />
              <br />
              <span className="font-semibold text-[#73C8A9]">Database Management:</span> Designing and maintaining scalable databases to ensure data integrity and security.
            </div>
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
};
