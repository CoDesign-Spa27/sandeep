"use client";
import { motion } from "framer-motion";
import GITHUB from "@/public/github.svg";
import X from "@/public/X.svg";
import LINKEDIN from "@/public/linkedin.svg";
import GMAIL from "@/public/gmail.svg";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Lottie from "lottie-react";
import animationData from '@/public/Json/florid-software-developer.json';
import dynamic from "next/dynamic";
import RobotLogo from "@/public/Robot-Logo.png"
import Image from "next/image";
const ProjectSection = dynamic(() => import('@/components/ProjectSection') );
const AuroraBackground = dynamic(() => import('@/components/ui/aurora-background'));
const AboutMe = dynamic(() => import('@/components/AboutMe'));
const TechStack = dynamic(() => import('@/components/TechStack'));

function Home() {
  const words = [
    "Fullstack Developer.",
    "Proficient Frontend.",
    "Software Developer.",
  ];

  const social = [
    {
      id: 1,
      name: "CoDesign-Spa27",
      image: GITHUB,
      link:'https://github.com/CoDesign-Spa27/'
    },
    {
      id: 2,
      name: "sandeep_code28",
      image: X,
      link:'https://x.com/sandeep_code28'

    },
    {
      id: 3,
      name: "Sandeep Singh",
      image: LINKEDIN,
      link:'https://www.linkedin.com/in/sandeep-singh-43b6a921a/'

    },
    {
      id: 4,
      name: "dev.sandeepsingh28@gmail.com",
      image: GMAIL,
      link:''

    },
  ];

  return (
    <>
      <div className="relative font-switzer hidden sm:block w-full">
        <div className="min-h-screen grid grid-cols-12 dark:bg-[#18181B] px-5 md:px-10 lg:px-16">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center gap-4">
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-bold bg-gradient-to-r from-[#73c8a9] via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient leading-relaxed lg:leading-snug"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-switzer font-bold">
                <Highlight className="text-black dark:text-white">
                  Sandeep Singh
                </Highlight>
                .
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: [-30, 10, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-xl md:text-4xl lg:text-5xl font-medium tracking-wider dark:text-gray-300"
            >
              Bringing{" "}
              <span className="bg-gradient-to-r from-[#73c8a9] via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient">
                Ideas to Life
              </span>{" "}
              with Full-Stack Development
            </motion.div>
            <div className="text-lg md:text-xl font-bold dark:text-white">
              I&apos;m a{" "}
              <FlipWords
                className="font-bold dark:text-[#73c8a9] text-[#FEA1A1]"
                words={words}
              />
            </div>
            <div className="py-3">
              <AnimatedTooltip items={social} />

            </div>
          </div>

          <div className="hidden md:col-span-5 lg:col-span-6 md:flex justify-center md:justify-end items-center">
            <Lottie 
              animationData={animationData}
              className="w-72 h-72 md:w-96 lg:w-[30rem] lg:h-[30rem] md:h-96 "
              loop={true}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
            }}
            />
          </div>
        </div>

        <ProjectSection />
        <AboutMe />
        <TechStack />
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden font-switzer w-full block dark:bg-[#18181B]">
        <AuroraBackground>
          <div className="flex items-center justify-center">
          <div>
           
           <Image src={RobotLogo} alt="logo" className="w-24 h-24 object-contain" />
          
         </div>
         <div className="text-xl font-semibold dark:text-white tracking-widest py-2">
         
            Hi! I am
          </div>
          </div>
          
          <div className="flex flex-col gap-5 items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-bold bg-gradient-to-r from-[#73c8a9] via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient leading-relaxed lg:leading-snug"
            >
              <div className="text-[2.6rem] font-switzer font-bold">
                <Highlight className="text-black dark:text-white">
                  Sandeep
                </Highlight>{" "}
                Singh.
              </div>
            </motion.div>
            <div className="text-xl font-bold dark:text-white">
              I&apos;m a{" "}
              <FlipWords
                className="font-bold text-[#73C8A9]"
                words={words}
              />
            </div>
            <div className="py-3">
              <AnimatedTooltip items={social} />
            </div>
          </div>
        </AuroraBackground>
        <ProjectSection />
        <AboutMe />
        <TechStack />
      </div>
    </>
  );
}

export default Home;
