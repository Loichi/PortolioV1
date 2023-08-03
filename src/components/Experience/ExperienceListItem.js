import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ExperienceListItem({ icon, date, title }) {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: 0.8 }}
      ref={ref}
      className='lg:w-4/5 md:w-9/10 h-1/3 flex ml-8 mt-1 pb-2'
    >
      <div className='flex flex-col'>
        <div>{icon}</div>
        <div className="w-1 h-5/6 bg-red-500 mx-auto"></div>
      </div>
      <div className='ml-8 mt-8'>
        <p className='lg:text-1xl text-slate-500'>{date}</p>
        <p className='lg:text-1xl font-bold'>{title}</p>
        <p className='lg:text-1xl text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.</p>
      </div>
    </motion.div>
  );
}
