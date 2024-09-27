"use client"
import MobileStack from '@/components/MobileStack'
import Stack from '@/components/Stack'
import React from 'react'

const names=['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB',  'Next.js', 'React Native', 'Docker','Git', 'GitHub','HTML','CSS','Javascript','Workers',
  'MySql','PrismaORM', 'PostgreSQL','Firebase','Framer motion'
 ]
const TechStack = () => {
  return (
    <div>
        <div className='sm:block hidden'>

<Stack />      
        </div>
        <div className='sm:hidden block'>
<MobileStack names={names}/>
        </div>
    </div>
  )
}

export default TechStack
