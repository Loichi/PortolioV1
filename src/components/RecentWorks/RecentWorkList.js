import React from 'react'
import RecentWorkListItem from './RecentWorkListItem'

import {motion} from "framer-motion";

export default function RecentWorkList() {

  

  return (
    <div className='h-3/4 flex justify-center mt-2 '>
      <motion.div 
       initial='hidden'
        animate='visible'
      className='flex flex-wrap lg:w-5/6 md:w-full  justify-center lg:gap-4 md:gap-4'>

   <RecentWorkListItem imageUrl={"project-1.png"} delay={0.5}/>
   <RecentWorkListItem imageUrl={"projet-2.jpg"} delay={0.6}/>
   <RecentWorkListItem imageUrl={"projet-3.jpg"} delay={0.7}/>
   <RecentWorkListItem imageUrl={"projet-4.jpg"} delay={0.8}/>
   <RecentWorkListItem imageUrl={"projet-5.png"} delay={0.9}/>
   <RecentWorkListItem imageUrl={"projet-6.jpg"} delay={1}/>
      </motion.div>

    </div>
  )
}
