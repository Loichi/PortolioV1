import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function RecentWorkListItem({imageUrl, delay}) {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  
  

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={inView ? { opacity: 1, scale: 1} : { opacity: 0, scale: 0 }}
    transition={{ delay: delay }}
    ref={ref}
    className='lg:w-1/4 md:w-48 h-3/6 rounded-lg '  style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></motion.div>

  )
}
