"use client"
import React from 'react'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import { BLOG_DATA } from '@/data'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

const arrowAnimation = {
  hover: { scale: 1.1, rotate: -10 },
  tap: { scale: 0.9, rotate: 10 },
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: 'easeOut' },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

function Page() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="min-h-screen bg-background antialiased py-10 sm:py-12 px-6 transition-all bg-[#001100] font-switzer">
        
      
        <motion.div 
          className="capitalize dark:text-white text-center mb-10 text-2xl sm:text-4xl font-black"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          
          <Link href={"/"}>
            <motion.div 
              className='sm:ml-10 mb-10 inline-block'
              variants={arrowAnimation}
              whileHover="hover"
              whileTap="tap"
            >
              <ArrowLeftIcon className='bg-gradient-to-r from-pink-500 to-purple-500 w-7 h-7 mr-10 p-1 rounded-full' />
            </motion.div>
          </Link>  

          <div>
            <Balancer>
              blogs written by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Sandeep
              </span>
            </Balancer>
          </div>
        </motion.div>

       
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {BLOG_DATA.map((blog) => (
            <motion.div key={blog.id} variants={cardVariants}>
              <BlogCard 
                title={blog.title} 
                description={blog.description} 
                img={blog.img} 
                link={blog.link} 
              />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Page
