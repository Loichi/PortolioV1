import React from "react";

import {motion} from 'framer-motion';

import { useInView } from "react-intersection-observer";



export default function ServiceListItem({ color, title, delay}) {

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const animationTransition = {
    duration: 0.3, 
    delay: delay,
      type: "spring",
      damping: 12,
      stiffness: 150,
 
  };

  return (
    <motion.div 
 ref={ref} 
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={animationTransition}
    className={`bg-${color}-500 h-2/3 lg:w-1/4  md:w-auto rounded-2xl flex flex-col  hover:scale-110`}>
      <p className="lg:text-2xl font-bold mx-auto mt-2">{title}</p>
      <p className="mt-3 lg:text-1xl  w-2/3 mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        euismod euismod nulla, eget interdum ex cursus eu.
      </p>
    </motion.div>
  );
}
