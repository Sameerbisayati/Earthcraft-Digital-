import React from "react";
import Header from "../components/Header";
import { IoIosArrowRoundForward } from "react-icons/io";
import {motion} from "framer-motion";

export const FadeUp=(delay)=>{
  return{
    initial:{
      opacity:0,
      y:50,
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:100,
        duration:0.5,
        delay:delay,
        ease:"easeInOut"
      }
    }
  }
}


function Hero() {
  return (
  <section className="relative min-h-screen flex items-start justify-center overflow-hidden  ">
    <motion.video
    initial={{x:50,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
    autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src="/laptop.mp4" type="video/mp4"/>Your browser does not support video tag 
    </motion.video>
    <div className="absolute inset-0 bg-black/40 z-10">
    </div>
    <div className="container bg-gray-200 grid grid-cols-1 md:grid-cols-2 min-h-[650px] pt-10 pb-6">
      <div className="flex flex-col mx-auto px-6 text-center md:text-left text-white justify-center py-4 md:py-0 relative z-20 ">
        <div className="text-center md:text-left  space-y-10 lg:max-w-[400px]">
           <motion.h1
           variants={FadeUp(0.6)}
           initial="initial"
           animate="animate" 
           className=" text-9xl text-white lg-text-5xl text-center font-bold !leading-snug">
        Crafting Sustainable{' '}
        <span className="text-secondary">
          Digital Features</span> 
          <motion.p
          variants={FadeUp(0.4)}
          initial="initial"
          animate="animate"
          className="text-4xl lg-text-3xl text-white text-justify">Premium digital marketing & web solutions built for purpose-
        driven brands</motion.p>
  <div className="flex justify-center gap-6 mt-10">
                <motion.a
            href="#services"
            variants={FadeUp(1.0)}
            initial="initial"
            animate="animate"
            className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 inline-block"
         >
            Our Services
          <IoIosArrowRoundForward className="text-xl  transition-transform group-hover:translate-x-2 group-hover:rotate-45 duration-300"/>

          </motion.a>

          <motion.a
            href="#contact"
            variants={FadeUp(1.2)} 
            initial="initial"
            animate="animate"
            className="px-8 py-3 text-lg font-semibold text-blue-600 bg-transparent border-2 border-blue-600 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105 inline-block"
          >
            Get in Touch
          <IoIosArrowRoundForward className="text-xl  transition-transform group-hover:translate-x-2 group-hover:rotate-45 duration-300"/>
          </motion.a>
     </div>
      </motion.h1>
              </div>
      </div>
       </div>
       
     
    
  </section>
  );
}

export default Hero;