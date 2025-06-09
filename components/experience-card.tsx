import { motion } from "framer-motion";
import React from "react";
import SuperbrainLogo from "../../public/experience/SuperBrain Logo.svg";
import Image from "next/image";
import { ArrowBigDown, ChevronDown, ChevronRight } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { BorderBeam } from "./ui/border-beam";

interface ExperienceCardProps {
  title: string;
  company: string;
  description: string;
  date: string;
  image: string;
}

const ExperienceCard = ({
  title,
  company,
  description,
  date,
  image,
}: ExperienceCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setExpanded(!expanded);
    }
  };

  return (
    <div className="my-2">
      <div className="py-4 px-4 rounded-xl backdrop-blur-sm">
        <div className="absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
          <div className="absolute inset-0 bg-gradient-to-bl from-color1 via-transparent to-color2 opacity-70 scale-[1.08]"></div>
        </div>
        <div className=" sm:flex justify-between items-center relative z-10">
          <div>
            <div className="sm:text-lg items-center flex sm:gap-2 gap-0.5 py-2 font-bold">
              <div className="font-light uppercase text-sm">
                <Balancer>{title}</Balancer>
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  scale: expanded ? 1 : 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center"
              >
                <a
                  href="#"
                  onClick={handleExpand}
                  className="text-sm dark:text-gray-300 cursor-pointer"
                >
                  <motion.div
                    animate={{
                      rotate: expanded ? 90 : 0,
                    }}
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {expanded ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-900 rounded-full p-1 relative">
                <Image
                  src={image}
                  width={28}
                  height={28}
                  className="w-7 h-7"
                  alt={`${company} logo`}
                />
                <BorderBeam size={50} />
              </div>
              <div className="text-sm py-2">{company}</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-color1 to-color2 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative px-4 py-1.5  rounded-xl">
                <span className="text-sm font-mono text-gray-600 dark:text-gray-300 tracking-wide">
                  {date}
                </span>
              </div>
            </div>
          </div>
        </div>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: expanded ? 1 : 0,
              height: expanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="py-2"
          >
            <motion.div className="text-sm dark:text-gray-300 ">
              {description.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: index * 0.01 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
