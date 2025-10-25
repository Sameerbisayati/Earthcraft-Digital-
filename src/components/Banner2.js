import React from 'react'
import BannerPng2 from "../images/Banner2.jpg"
import{motion} from "framer-motion"
import { PiPlaceholder } from 'react-icons/pi'


const Banner2 = () => {
  return (
    <section className='banner2'>
        <div className='container py-14 md:py-24  grid grid-cols-1  md:grid-cols-2 gap-2 space-y-6 md:space-y-0'>
<motion.div
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}

className='flex flex-col justify-center'>
  <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
<h1 className='text-4xl font-bold !leading-snug'>Join Our Community to start your Journey</h1>
<p className='font-semibold'>Stay updated on sustainable digital solutions</p>
      <input type="text" placeholder="Enter Your Email" className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0  text-2xl focus:outline-none placeholder:text-black "/>
<button className='bg-blue-700 rounded-full border-white border-2 hover:bg-gray-400 text-white'>Join Now</button>
</div>
</motion.div>
<div className='flex justify-center items-center '>
    <motion.img
    initial={{opacity:0,x:50}}
    whileInView={{opacity:1,x:0}}
  
    src={BannerPng2} alt=''
    className='w-full h-full max-w-md mx-auto rounded-2xl shadow-lg object-cover pt-20 drop-shadow'/>
</div>
        </div>
    </section>
  )
}

export default Banner2
