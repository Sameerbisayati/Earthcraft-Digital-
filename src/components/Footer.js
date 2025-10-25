import React from "react";
import { FaInstagram,FaWhatsapp,FaYoutube,FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import {motion} from 'framer-motion'

function Footer() {
  return (
<footer>
  <motion.div
  initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
  
  className="container mx-auto px-4 sm:px-6 py-12  text-white">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 md:gap-16 ">
  <div className="space-y-4 py-6 md:py-0">
<h1 className="text-2xl font-bold">Marketing</h1>
<p>+91 97394 61510</p>
<p>hello@earthcraftdigital.com</p>
  </div>
  <div className="space-y-4 ">
    <h1 className="text-2xl font-bold">Get In Touch</h1>
    <div className="flex flex-col space-y-2 w-full max-w-xs md:max-w-full mx-auto">
      <input type="text" placeholder="Enter Your Email" className="p-3 rounded-xl bg-white text-black text-base focus:outline-none "/>
    <button className="bg-blue-600 text-white p-3 font-semibold   rounded-xl hover:bg-blue-700 transition">Submit query</button>
    </div>
    </div>

 <div className="space-y-4">
    <h1 className="text-2xl font-bold">Locations</h1>
    <p>
Primary
#5, 2nd Floor, 4th Cmain JP Nagar, Sankranti Layout

Bengaluru, Karnataka 560078, IN</p>
   </div>

   <div className="space-y-4 w-full max-w-xs mx-auto">
    <h1 className="text-2xl font-bold pr-4">Connect</h1>
    <div className="flex flex-wrap gap-3 pt-3 text-lg justify-center  sm:text-2xl">
    <a className="" href="https://api.whatsapp.com/send/?phone=9739461510&text=Hi+%EF%BF%BD%2C+welcome+to+Earth+Craft+Digital%21+We+specialize+in+Digital+Marketing%2C+SEO%2C+and+Website+Development.+Tell+us+how+we+can+support+your+business+growth+today.&type=phone_number&app_absent=0"><FaWhatsapp className="cursor-pointer hover:scale-105 duration-200"/></a>
    <a className="" href="#"><FaInstagram className="cursor-pointer hover:scale-105 duration-200"/></a>
    <a className="" href="https://www.linkedin.com/company/earth-craft-digital"><FaLinkedin className="cursor-pointer hover:scale-105 duration-200"/></a>
    <a className="" href="#"><FaYoutube className="cursor-pointer hover:scale-105 duration-200"/></a>
    <a className=""href="https://earthcraftdigital.com/ "><TbWorldWww className="cursor-pointer hover:scale-105 duration-200"/></a>
</div>
</div>
</div>
  </motion.div>
</footer>

  );
}

export default Footer;