import React from "react";
import Profile from "../../public/profile/profile.jpg";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import GITHUB from "@/public/github.svg";
import X from "@/public/X.svg";
import LINKEDIN from "@/public/linkedin.svg";
import GMAIL from "@/public/gmail.svg";
import { motion } from "framer-motion";  

const Home = () => {
  const social = [
    {
      id: 1,
      name: "CoDesign-Spa27",
      image: GITHUB,
      link: "https://github.com/CoDesign-Spa27/",
    },
    {
      id: 2,
      name: "sandeep_code28",
      image: X,
      link: "https://x.com/sandeep_code28",
    },
    {
      id: 3,
      name: "Sandeep Singh",
      image: LINKEDIN,
      link: "https://www.linkedin.com/in/sandeep-singh-43b6a921a/",
    },
    {
      id: 4,
      name: "dev.sandeepsingh28@gmail.com",
      image: GMAIL,
      link: "",
    },
  ];

 
  const containerVariants = {
    hidden: { opacity: 0, x: -100 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },  
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 100 },  
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex items-center justify-between">
        <div>
     
          <motion.div
            className="md:text-6xl text-4xl font-black"
            variants={containerVariants}
          >
            Hi I am Sandeep Singh!
          </motion.div>

      
          <motion.div className="py-2 font-mono" variants={textVariants}>
            <Balancer>
              Full-Stack Developer | Passionate about building innovative web
              applications.
            </Balancer>
            <div className="my-2 gap-5 flex">
              <motion.span
                className="bg-gray-400 cursor-pointer text-neutral-900 p-1"
                variants={textVariants}
              >
                GrindCode
              </motion.span>
              <motion.span
                className="bg-gray-400 cursor-pointer text-neutral-900 p-1"
                variants={textVariants}
              >
                Rubber
              </motion.span>
            </div>
          </motion.div>

     
          <motion.div variants={socialVariants}>
            <AnimatedTooltip items={social} />
          </motion.div>
        </div>
 
        <motion.div className="rounded-full" variants={imageVariants}>
          <Image className="md:w-48 rounded-full w-40" src={Profile} alt="logo" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
