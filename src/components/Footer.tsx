import React from 'react'
import { motion } from "framer-motion";

const appear = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: {duration: 2}}
  }

function Footer() {
    return (
        <motion.footer className="bg-gray-200 text-center lg:text-left"
        variants={appear}
        initial="hidden"
        animate="visible">
            <div className="text-gray-700 text-center p-4 bg-sky-100" >
                © Feito com muito carinho por: 
                <a className="text-gray-800" href="www.linkedin.com/in/luiz1gustavo2"> Luiz Gustavo</a>
            </div>
        </motion.footer>
    );
}

export default Footer