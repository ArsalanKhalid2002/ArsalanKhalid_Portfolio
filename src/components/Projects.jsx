import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5,ease:"easeOut" }}
       className='my-20 text-center text-4xl'>
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <motion.img
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1,ease:"easeOut" }}
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className='mb-6 rounded p-4'
              />
            </div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1,ease:"easeOut" }}
             className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>
                {project.description}
              </p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='mr-2 rounded bg-neutral-900 p-2'
                >
                  {tech}
                </span>
              ))}
              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 inline-block text-blue-500'
                >
                  Visit Website
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
