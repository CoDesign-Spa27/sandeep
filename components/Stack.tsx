import { motion } from 'framer-motion';
import React from 'react';
import { Headline } from './ui/HeadLine';
import { techStack } from '@/data';
function Stack () {


  const textVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.3,
      },
    },
  };
  return (
    <div className='w-full'>
      <div className='w-full mx-auto'>
    <motion.div
      variants={textVariants}
      initial='hidden'
      animate='visible'
    className='text-xl font-black text-center'>
      Tech Stack
    </motion.div>
        <div className='mt-5 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8'>
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              className='relative p-[0.5px] rounded-lg'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                transition: { duration: 0.3 },
              }}
            >
              <div className='dark:bg-slate-700 sm:p-2 p-1 rounded-lg bg-neutral-300 flex flex-col items-center justify-center'>
                <motion.img
                  src={item.img}
                  alt={`${item.name} Logo`}
                  className='sm:w-10 w-10 h-10 sm:h-10 object-contain sm:mb-2'
                  whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                />
                <motion.h3
                  className='sm:block text-sm hidden capitalize font-light text-center text-black dark:text-white'
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  {item.name}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
