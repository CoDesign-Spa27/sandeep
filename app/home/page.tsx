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
import svg from "@/public/svg.svg"; // import your SVG
import Image from "next/image";

function Home() {
  const words = [
    "Fullstack-Developer.",
    "Proficient-Frontend.",
    "Software-Developer.",
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
    <>
      <div className="relative h-[500vh] hidden sm:block w-full">
        <HeroHighlight className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col gap-2 md:col-span-7 lg:col-span-8 pl-5 md:pl-10 relative z-10">
            <div className="text-xl md:py-2 font-semibold font-switzer tracking-widest md:text-2xl">
              Hi! I am
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-bold bg-gradient-to-r from-[#73c8a9] via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient max-w-4xl leading-relaxed lg:leading-snug"
            >
              <div className="md:text-5xl lg:text-7xl text-4xl sm:text-5xl font-switzer font-bold">
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
              className="md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug md:mt-2 lg:mt-4"
            >
              <div className="md:text-4xl lg:text-5xl text-xl sm:text-3xl font-switzer dark:text-gray-300 font-medium tracking-wider">
                Bringing{" "}
                <span className="bg-gradient-to-r from-[#73c8a9] via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient">
                  Ideas to Life
                </span>{" "}
                with Full-Stack Development
              </div>
            </motion.div>

            <div className="md:text-xl font-bold font-switzer">
              I&apos;m a{" "}
              <FlipWords
                className="font-bold font-switzer text-[#73C8A9]"
                words={words}
              />{" "}
            </div>

            <div className="md:py-3 ">
              <AnimatedTooltip items={social} />
            </div>
          </div>

          {/* Animated SVG positioned on the right side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and below the final position
            animate={{ opacity: 1, y: 0 }} // Transition to opacity 1 and the final position
            transition={{ duration: 2, ease: [0.4, 0.0, 0.2, 1] }} // Customize the animation timing
            className="absolute right-0 top-10 h-full w-[60vw] pointer-events-none"
          >
            <Image
              src={svg}
              alt="Decorative SVG"
              className="object-cover h-full w-full mix-blend-multiply opacity-75"
              priority={true}
            />
          </motion.div>
        </HeroHighlight>

        <ProjectSection />
        <AboutMe />
      </div>

      <div className="sm:hidden block">
        <HeroHighlight className="">
          <div className="text-xl md:py-2 font-semibold font-switzer tracking-widest md:text-2xl">
            Hi! I am
          </div>
          <div className="flex flex-col gap-5 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="font-bold bg-gradient-to-r from-[#73c8a9] via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient max-w-4xl leading-relaxed lg:leading-snug"
            >
              <div className="text-wrap text-[2.6rem] font-switzer font-bold">
                <Highlight className="text-black text-[2.6rem] dark:text-white">
                  Sandeep
                </Highlight>
                Singh.
              </div>
            </motion.div>

            <div className="text-center text-xl font-bold font-switzer">
              I&apos;m a{" "}
              <FlipWords
                className="font-bold font-switzer text-[#73C8A9]"
                words={words}
              />{" "}
            </div>

            <div className="md:py-3 ">
              <AnimatedTooltip items={social} />
            </div>
          </div>
        </HeroHighlight>
        <ProjectSection />
        <AboutMe />
      </div>
    </>
  );
}

export default Home;
