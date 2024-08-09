"use client";
import React from "react";
import { PinContainer } from "./PinCard";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ProjectSection() {
  return (
    <div className="py-20 bg-black">
      <h1
        className="text-center text-4xl lg:text-5xl font-switzer 
      md:py-5 bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-gray-100
      font-extrabold"
      >
        Recent <span className="bg-gradient-to-r from-[#73c8a9]  via-purple-500 to-pink-400 text-transparent bg-clip-text bg-300% animate-gradient">Projects</span>. Please
        Checkout!
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <Link href={item.link} key={item.id} target="_blank">
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[29.5vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png"  alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className=" rounded-xl"
                  />
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
                        <Image width={400} height={400} src={icon} alt="icon5" className="p-2" />
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
          
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
