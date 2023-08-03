import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMeItem() {
  const skills = [
    { label: 'Development', value: 85, color: 'yellow' },
    { label: 'UI/UX design', value: 95, color: 'red' },
    { label: 'Photography', value: 70, color: 'blue' },
  ];

  return (
    <div className="w-11/12 h-5/6 flex justify-center">
      <div className="w-1/2 h-full flex flex-col justify-center">
        <div className="w-3/4 mx-auto">
          <p className="lg:text-1xl">
            I am John Doe. Web developer from London, United Kingdom. I have rich experience in website design and building and customization, also I am good at WordPress
          </p>
        </div>
        <button className="lg:mx-12 md:mx-8 bg-red-500 text-white font-bold rounded-full lg:w-48 h-10 mt-2 ">Download CV</button>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-evenly">
        <div className="flex flex-col">
          {skills.map((skill) => (
            <React.Fragment key={skill.label}>
              <div className="flex justify-between w-3/4 font-bold">
                <p>{skill.label}</p>
                <p>{skill.value}%</p>
              </div>
              <motion.div
                className="w-5/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2"
                initial={{ width: 0 }}
                animate={{ width: `${skill.value}%` }}
              >
                <div className={`bg-${skill.color}-500 h-2.5 rounded-full`} style={{ width: '100%' }}></div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
