import { div } from 'framer-motion/client'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { IoMdHappy } from 'react-icons/io'
import { IoPulseOutline } from 'react-icons/io5'
import { MdSocialDistance } from 'react-icons/md'
import { SlSocialInstagram } from 'react-icons/sl'
import { TbWorldWww } from 'react-icons/tb'
import {animate, motion} from "framer-motion";

const ServiceData=[
    {
        id:1,
        title:"Web Development",
        desc:"We provide modern web development series using latest technologies",
        link:"#",
        icon:<TbWorldWww/>,
delay:0.2,
    },
      {
        id:2,
        title:"SEO",
        desc:"We help you to improve your website ranking on search engines",
        link:"#",
        icon:<IoPulseOutline/>,
delay:0.3,
    },  {
        id:3,
        title:"Social Media",
        desc:"We help you to grow your business using social media platforms",
        link:"#",
        icon:<SlSocialInstagram/>,
delay:0.4,
    },
      {
        id:4,
        title:"Satisfied Clients",
        desc:"We have a track record of satisfied clients worldwide",
        link:"#",
        icon:<IoMdHappy/>,
delay:0.5,
    },
     {
        id:5,
        title:"24/7 Support",
        desc:"We provide round the clock support for all our clients",
        link:"#",
        icon:<BiSupport/>,
delay:0.6,
    },
]

const SlideLeft=(delay)=>{
return{
    initial:{
        opacity:0,
        x:50
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            delay:delay,
            ease:"easeInOut",
        }
    }
}
}

const Services = () => {
  return (
    <section id='services' className='services-section  bg-white  py-16 w-full min-h-screen '>
<div className="container mx-auto px-4 ">
    <h1 className='service-header text-3xl sm:text-4xl  font-bold text-left  mb-10'>
Services we provide
    </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {ServiceData.map((service)=>(
<motion.div
key={service.id}
variants={SlideLeft(service.delay)}
initial="initial"
whileInView="animate"
viewport={{once:true}}
     className='service-card w-full h-[250px] sm:h-[280px] rounded-2xl flex flex-col gap-4 items-center justify-center p-8  hover:bg-white hover:scale-105 duration-300 hover:shadow-xl'>
    <div className=' service-card2 text-6xl mb-3'>{service.icon}</div>
    <h1 className='service-card2 text-lg font-semibold text-center '>{service.title}</h1>
    <p className='service-card2 text-base text-center '>{service.desc}</p>
</motion.div>
        )
        )}
    </div>
</div>
    </section>
  )
}

export default Services
