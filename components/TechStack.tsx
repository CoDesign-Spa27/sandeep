import { motion } from 'framer-motion';
import React from 'react';
import { Headline } from './ui/HeadLine';
import { techStack } from '@/data';

const TechStack = () => {
  return (
    <div className='w-full   dark:bg-neutral-950 bg-white'>
      <div className='max-w-7xl mx-auto p-10'>
        <Headline title='Tech Stack' />
        <div className='mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              className='relative p-[0.5px] rounded-lg animate-gradient bg-300% bg-gradient-to-r  from-violet-500 via-blue-500 to-pink-500 animate-gradient-border'
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
              <div className='p-5 rounded-lg bg-gray-100 dark:bg-neutral-900 flex flex-col items-center justify-center'>
                <motion.img
                  src={item.img}
                  alt={`${item.name} Logo`}
                  className='sm:w-20 w-10 h-10 sm:h-20 object-contain sm:mb-4'
                  whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                />
                <motion.h3
                  className='sm:block text-lg capitalize hidden font-semibold text-center text-gray-800 dark:text-white'
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

export default TechStack;
