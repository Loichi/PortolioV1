import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AproposListItem({ icon, number, label }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let interval;
      const step = number / 100;

      if (count < number) {
        interval = setInterval(() => {
          setCount((prevCount) => {
            const newCount = prevCount + step;
            return newCount >= number ? number : newCount;
          });
        }, 20);
      } else {
        setCount(number);
      }

      return () => clearInterval(interval);
    }
  }, [inView, number]);

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      className="w-1/4 h-full flex justify-center items-center"
    >
      <div className="h-1/2 lg:text-3xl">{icon}</div>
      <motion.div
        className="h-1/2 ml-3"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p className="lg:text-4xl font-bold">
          {Math.round(count).toLocaleString()}
        </motion.p>
        <p className="lg:text-2xl">{label}</p>
      </motion.div>
    </motion.div>
  );
}
