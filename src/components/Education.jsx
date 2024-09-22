import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "BS in Computer Engineering",
    school: "FAST NUCES, Lahore",
    gpa: "GPA: 3.44",
    graduationDate: "Graduation Date: 2024",
    awards: "Dean’s List of Honors",
  },
  {
    degree: "A-Level",
    school: "Lahore Grammar School",
    graduationDate: "Graduation Date: 2020"
  },
  {
    degree: "O-Level",
    school: "The City School",
    graduationDate: "Graduation Date: 2018"
  }
];

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5,ease:"easeOut" }}
       className='my-20 text-center text-4xl'>Education</motion.h1>
      <div>
        {educationData.map((education, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1,ease:"easeOut" }}
             className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>
                {education.graduationDate}
              </p>
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1,ease:"easeOut" }}
             className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>
                {education.degree}-{" "}
                <span className='text-sm text-purple-100'>
                  {education.school}
                </span>
              </h6>
              {education.gpa && (
                <p className='mb-2 text-neutral-400'>{education.gpa}</p>
              )}
              {education.awards && (
                <p className='mb-2 text-neutral-400'>{education.awards}</p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

