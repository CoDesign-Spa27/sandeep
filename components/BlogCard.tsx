"use client"
import { ArrowUpRightFromSquareIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogCardProps {
  title:string,
  description:string,
  img:string,
  link:string
}
function BlogCard( {title, description, img, link}:BlogCardProps) {
 

  return (
    <div>
      
      <div className="group w-full max-w-2xl mx-auto relative block h-80 sm:h-80 lg:h-[40vh] bg-black/80 overflow-hidden">
        <span className="absolute inset-0 border-2 border-dashed group-hover:border-pink-500"></span>
      
        <div className="relative h-full w-full">
          <Image 
            src={img} 
            alt="Img" 
            layout="fill" 
            objectFit="cover" 
            className="transform transition-transform group-hover:scale-110 opacity-40" 
          />
        </div>

        <div
          className="absolute bottom-0 left-0 p-4 transition-opacity group-hover:opacity-0 sm:p-6 lg:p-8"
        >
          <h2 className="mt-4 text-xl font-black sm:text-4xl text-white">{title}</h2>
        </div>

        <div
          className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 lg:p-8"
        >
          <h3 className="mt-4 text-xl font-semibold sm:text-3xl text-white">{title}</h3>

          <p className="mt-4 text-white text-sm sm:text-base">
            {description.length > 150 ? description.slice(0, 100) + "..." : description}
          </p>

<Link href={link}>
          <p
          
          className="mt-8 font-bold text-white">Read more

            <ArrowUpRightFromSquareIcon className="inline-block text-pink-500 w-4 h-4 ml-2" />
          </p>
          
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
