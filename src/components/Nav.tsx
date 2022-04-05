import React from 'react'
import { motion } from "framer-motion";
import Logo from './Logo';

const appear = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: {duration: 2}}
}

function Nav() {

  return ( 
<motion.div className="navbar bg-sky-600 mb-2 shadow-lg"
    variants={appear}
    initial="hidden"
    animate="visible">
  <div className="px-2 mx-2 navbar-start">
    <Logo />
  </div> 
  <div className="hidden px-2 mx-2 navbar-center lg:flex">
    <div className="flex items-stretch">
      <a className="btn btn-ghost btn-md mr-2 rounded-btn text-black"> {/* Criar NavLink component */}
              Home
            </a> 
      <a className="btn btn-ghost btn-md mr-2 rounded-btn text-black">
              Portfolio
            </a> 
      <a className="btn btn-ghost btn-md rounded-btn text-black">
              Contato
            </a>
    </div>
  </div> 
</motion.div>
  );
}

export default Nav