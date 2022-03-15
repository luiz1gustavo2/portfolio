import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
    return (
        <motion.div 
        whileHover={{ scale:1.1,cursor: "pointer"}}
        transition={{ type:'spring', stiffness: 450 }}>
            <img src="logo.png" alt="logo" />
        </motion.div>
    )
}