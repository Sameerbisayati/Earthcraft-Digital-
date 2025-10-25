import React from 'react'
import BannerPng from "../images/Banner.jpg";
import { GrUserExpert } from 'react-icons/gr';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FaBookReader } from 'react-icons/fa';
import { FadeUp } from './Hero';
import {motion} from "framer-motion"

const Banner = () => {
  return (
  <section className='banner-section banner relative bg-gray-50 sm:pt-40  md:mt-[400px]'>
    <div className="container mx-auto items-center py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
<div className='flex justify-center items-center '>
    <motion.img
    initial={{opacity:0,x:-50}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    transition={{duration:0.5,ease:"easeInOut"}}
    src={BannerPng} alt=''
    className='w-full h-full max-w-md mx-auto rounded-2xl shadow-lg object-cover drop-shadow'/>
</div>
<div className='flex flex-col justify-center'>
<div className='text-center md:text-left space-y-12'>
<motion.h1
initial={{opacity:0,scale:0.5}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}
transition={{duration:0.5}}
 className='text-3xl md:text-4xl font-bold !leading-snug'>About Earthcraft
  Digital
</motion.h1>
<div className='flex flex-col gap-6'>
  <motion.div
  variants={FadeUp(0.2)}
  initial="initial"
  whileInView={"animate"}
  viewport={{once:true}}
  className='flex items-center gap-2 p-6 banner-card rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
    <GrUserExpert className='text-2xl'/>
    <p className='text-lg'>150+ Quality Assured</p>
  </motion.div>
</div>
<div>
  <motion.div
  variants={FadeUp(0.4)}
  initial="initial"
  whileInView={"animate"}
  viewport={{once:true}}
  className='flex items-center gap-2 p-6 banner-card rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
    <FaBookReader className='text-2xl'/>
    <p className='text-lg'>Trusted By Many</p>
  </motion.div>
</div>
<div>
  <motion.div
  variants={FadeUp(0.6)}
  initial="initial"
  whileInView={"animate"}
  viewport={{once:true}}
  className='flex items-center gap-2 p-6 banner-card rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
    <MdOutlineAccessTime className='text-2xl'/>
    <p className='text-lg'>LifeTime Access</p>
  </motion.div>
<motion.button
variants={FadeUp(0.8)}
  initial="initial"
  whileInView={"animate"}
  viewport={{once:true}}

 className='text-3xl rounded-full bg-blue-700 h-25 text-white border-2 hover:bg-gray-400 flex items-center gap-2 mt-4 justify-center '>Get Started</motion.button>
</div>
</div>
</div>
    </div>
  </section>
  )
}

export default Banner
