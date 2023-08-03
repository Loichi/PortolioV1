import React from "react";

import ExperienceListItem from "../components/Experience/ExperienceListItem";

import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Work";
import Title from "../components/Title";

import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Experience() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationVariantsOne = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const animationVariantsTwo = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="bg-slate-100  h-80vh flex justify-center items-center">
      <div className="w-9/12 h-5/6">
        <Title title="Experiences" />
        <div className="lg:w-3/4 md:w-8/10 h-3/4 mx-auto mt-6 flex justify-evenly">
          <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariantsOne}
          className="w-2/5 h-5/6 bg-white rounded-md flex justify-center flex-col">
            <div className="w-5/6 mx-auto">
              <ExperienceListItem
                icon={<SchoolIcon />}
                date="2019 - Present"
                title="Academic Degree"
              />
              <ExperienceListItem
                icon={<SchoolIcon />}
                date="2017 - 2018"
                title="Bachelor's Degree"
              />
              <ExperienceListItem
                icon={<SchoolIcon />}
                date="2015 - 20166"
                title="Honours Degree"
              />
            </div>
          </motion.div>
          <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariantsTwo}
          className="w-2/5 h-5/6 bg-white rounded-md flex justify-center flex-col">
            <div className="w-5/6  mx-auto">
              <ExperienceListItem
                icon={<BusinessIcon />}
                date="2019 - Present"
                title="Web Designer"
              />
              <ExperienceListItem
                icon={<BusinessIcon />}
                date="2016 - 2018"
                title="Front-End Developer"
              />
              <ExperienceListItem
                icon={<BusinessIcon />}
                date="2009 - 2013"
                title="Back-End Developer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
