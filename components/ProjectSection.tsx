"use client";
import React from "react";
import { PinContainer } from "./PinCard";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Headline } from "./ui/HeadLine";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Delay each card by 0.2 seconds
      duration: 0.6,
    },
  }),
};

 function ProjectSection() {
  return (
    <div className="pt-20 px-10 dark:bg-[#18181B] bg-white">
      <div className="max-w-7xl mx-auto">

      <Headline title="Projects" />
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 30% of the card is in view
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <Link href={item.link} target="_blank">
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[29.5vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img src={item.img} alt="cover" className="rounded-xl" />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          width={400}
                          height={400}
                          src={icon}
                          alt="icon5"
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <MoveUpRight className="ms-2 size-6" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
