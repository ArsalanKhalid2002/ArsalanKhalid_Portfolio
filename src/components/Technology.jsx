import React from 'react'

import { RiReactjsLine } from 'react-icons/ri'
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { animate, animations, motion } from 'framer-motion';

const iconVariants = (duration)=>({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5,ease:"easeOut" }}
         className='my-20 text-center text-4xl'>
            Technologies
        </motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>

<motion.div
variants={iconVariants(4)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <SiCplusplus className='text-6xl' style={{ color: '#00599C' }} />
</motion.div>

<motion.div
variants={iconVariants(8)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <FaPython className='text-6xl' style={{ color: '#306998' }} />
</motion.div>

<motion.div
variants={iconVariants(4)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <IoLogoJavascript className='text-6xl' style={{ color: '#F7DF1E' }} />
</motion.div>

<motion.div
variants={iconVariants(8)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <FaHtml5 className='text-6xl' style={{ color: '#E34F26' }} />
</motion.div>

<motion.div
variants={iconVariants(4)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <FaCss3Alt className='text-6xl' style={{ color: '#1572B6' }} />
</motion.div>

<motion.div
variants={iconVariants(8)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <DiMysql className='text-6xl' style={{ color: '#4479A1' }} />
</motion.div>

<motion.div
variants={iconVariants(4)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <TbBrandReactNative className='text-6xl' style={{ color: '#61DAFB' }} />
</motion.div>

<motion.div
variants={iconVariants(8)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <RiReactjsLine className='text-6xl' style={{ color: '#61DAFB' }} />
</motion.div>

<motion.div
variants={iconVariants(4)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <SiMongodb className='text-6xl' style={{ color: 'green' }} />
</motion.div>

<motion.div
variants={iconVariants(3)}
initial="initial"
animate="animate"
 className='rounded-2x border-4 border-neutral-800 p-4'>
    <SiGithub className='text-6xl' style={{ color: '#FFFFFF' }} />
</motion.div>


        </motion.div>
    </div>
  )
}

export default Technology