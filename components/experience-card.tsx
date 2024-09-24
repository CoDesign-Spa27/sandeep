import { motion } from "framer-motion";
import React from "react";
import SuperbrainLogo from "../../public/experience/SuperBrain Logo.svg";
import Image from "next/image";
import { ArrowBigDown, ChevronDown, ChevronRight } from "lucide-react";


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
    }:ExperienceCardProps
) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if(description){

        e.preventDefault();
        setExpanded(!expanded);
    }
  };


  return (
    <div className="my-2">

      <div className="bg-white/10 py-2 px-4 rounded-xl backdrop-blur-sm">
        <div className=" flex justify-between items-center">
          <div>
            <div className="text-lg items-center flex gap-2 py-1 font-bold">
                <div>
           {title}
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
                  className="text-sm text-gray-300 cursor-pointer"
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
                    {expanded ? <ChevronRight className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-black rounded-full p-1">
                <Image src={image} width={10} height={10} className="w-7 h-7" alt="logo" />
              </div>
              <div className="text-sm">{company}</div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="text-sm text-gray-300">
            {date}
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
              ease: [0.16, 1, 0.3, 1] ,
            }}
            className="py-2"
          >
            <motion.div className="text-sm text-gray-300">
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
