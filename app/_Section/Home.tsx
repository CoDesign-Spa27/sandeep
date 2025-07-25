import React from "react";
import Profile from "../../public/profile/profile.jpg";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import GITHUB from "@/public/github.svg";
import X from "@/public/X.svg";
import LINKEDIN from "@/public/linkedin.svg";
import GMAIL from "@/public/gmail.svg";
import MEDIUM from "@/public/medium.svg";
import MEDIUMDARK from "@/public/medium-dark.svg";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FeaturedWork } from "@/components/FeaturedWorked";
import { BorderBeam } from "@/components/ui/border-beam";
import { ModeToggle } from "@/components/mode-toggle";

const Home = () => {
  const { theme } = useTheme();

  const social = [
    {
      id: 1,
      name: "CoDesign-Spa27",
      image: GITHUB,
      link: "https://github.com/CoDesign-Spa27/",
    },
    {
      id: 2,
      name: "rooh_builds",
      image: X,
      link: "https://x.com/rooh_builds",
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
      link: "mailto:dev.sandeepsingh28@gmail.com",
    },
    {
      id: 5,
      name: "medium",
      image: theme === "dark" ? MEDIUMDARK : MEDIUM,
      link: "https://medium.com/@iamsandeep28",
    },
  ];

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

  const slideIn = {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(2px)",
    },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: delay * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div className="flex items-center justify-center px-0 sm:px-6">
      <div className="max-w-4xl w-full">
        <div className="">
          <div className="relative overflow-hidden rounded-2xl p-8">
            <div className="absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffaa40] via-transparent to-[#9c40ff] opacity-70 scale-[1.004]"></div>
            </div>
            <BorderBeam size={100} />
            <div className="space-y-8">
              <div className="flex justify-between items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0}
              >
                <h1 className="text-5xl md:text-7xl font-light tracking-tight flex flex-col sm:flex-row items-start sm:space-x-4">
                  <span className="text-gray-900 dark:text-white">Sandeep</span>
                  <span className="text-[#ffaa40] font-black">Singh</span>
                </h1>
              </motion.div>
              <ModeToggle />
                </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-16 h-px bg-gradient-to-r from-gray-400 to-transparent sm:block hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 64, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <FeaturedWork />
              </div>

              <motion.div
                className="mt-8"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={1}
              >
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 leading-relaxed">
                    <Balancer>
                      Full-Stack Developer crafting innovative web experiences
                      with precision and passion.
                    </Balancer>
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 font-mono text-sm leading-relaxed">
                    Currently building digital solutions that bridge creativity
                    and functionality.
                  </p>
                </div>
              </motion.div>
              <AnimatedTooltip items={social} />
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Based in India</span>
                <span>Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
