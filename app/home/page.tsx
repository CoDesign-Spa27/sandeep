"use client";
import { motion } from "framer-motion";
import GITHUB from "@/public/github.svg";
import X from "@/public/X.svg";
import LINKEDIN from "@/public/linkedin.svg";
import GMAIL from "@/public/gmail.svg";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ProjectSection } from "@/components/ProjectSection";
import { AboutMe } from "@/components/AboutMe";

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
    },
    {
      id: 2,
      name: "sandeep_code28",
      image: X,
    },
    {
      id: 3,
      name: "Sandeep Singh",
      image: LINKEDIN,
    },
    {
      id: 4,
      name: "dev.sandeepsingh28@gmail.com",
      image: GMAIL,
    },
  ];

  return (
    <div className="h-[500vh] w-full">
      <HeroHighlight className="grid grid-cols-12">
        <div className="col-span-12 flex flex-col gap-2 md:col-span-7 lg:col-span-8 pl-5 md:pl-10">
          <div className="font md:py-2 font-semibold font-switzer tracking-widest md:text-2xl">
            Hi! I am
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="font-bold bg-gradient-to-r from-[#73c8a9]  via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient max-w-4xl leading-relaxed lg:leading-snug"
          >
            <div className="md:text-5xl lg:text-7xl text-4xl font-switzer font-bold">
              <Highlight className="text-black dark:text-white">
                Sandeep Singh
              </Highlight>
              .
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: [-30, 10, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mt-6"
          >
            <div className="md:text-4xl lg:text-5xl text-2xl font-switzer text-gray-300 font-medium tracking-wider">
              Bringing <span className="bg-gradient-to-r from-[#73c8a9]  via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient">Ideas to  Life</span> with Full-Stack Development
            </div>
          </motion.div>

          <div className="md:text-xl font-bold font-switzer">
            I&apos;m a{" "}
            <FlipWords
              className="font-bold font-switzer text-[#73C8A9]"
              words={words}
            />{" "}
      
          </div>

          <div className="py-4">
            <AnimatedTooltip items={social} />
          </div>
        </div>
      </HeroHighlight>
      <AboutMe />
      <ProjectSection />
    </div>
  );
}

export default Home;
