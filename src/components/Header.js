import React, { useState } from "react"
import logo from '../images/logo2.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";


export const Header=(props)=>{
const [showMenu,setShowMenu]=useState(false);

const handleToggle=()=>{
  setShowMenu(!showMenu);
}

  return(
    <>
        <header className="fixed top-0 left-0 w-full z-50">
<motion.div
initial={{opacity:0, y:-50 }}
animate={{opacity:1, y:0 }}
 className="container">
  <div className={`grid navbar-grid navbar navbar-${props.mode} bg-${props.mode} text-${props.mode==="dark"?"light":"dark"}`}>
    <div className="logo">
<img src={logo} alt="Logo"/>
    </div>


<nav className={showMenu?"menu-mobile":"menu-web"}>
  <ul>
    <li><Link to="/" onClick={() => setShowMenu(false)}>Home</Link>
    </li>
    <li><Link to="/services" onClick={() => setShowMenu(false)}>Services</Link>
    </li>
    <li><Link to="/contact" onClick={() => setShowMenu(false)}>Contact</Link>
    </li>
    <li className="mode-toggle">
      <span className="mode-label">
        {props.mode==='light'?"Enable Dark Mode":"Enable Light Mode"}</span>
        <label className="switch"><input type="checkbox" onChange={props.toggleMode} checked={props.mode==='dark'}/>
        <span className="slider round"></span></label>
    </li>
  </ul>
</nav>

<div className="ham-menu">
  <button onClick={handleToggle}><GiHamburgerMenu /></button>
</div>
 </div>
</motion.div>
  </header>
</>
  )
}

export default Header;