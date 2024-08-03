"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

type ProjectCard={
name:string,
desc:string,
image?:string,
title:string,
link:string
}

export function PinCard({name,desc,image,title,link}:ProjectCard) {
  return (
    <div className=" w-full flex items-center justify-center ">
      <PinContainer
        title={title}
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {desc}
            </span>
          </div>
          <div className="flex flex-1  rounded-lg mt-4  bg-white ">
        
 
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
