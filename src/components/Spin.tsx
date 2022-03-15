import * as React from "react";
import { motion } from "framer-motion";

interface PropsType {
    name: string;
  }

export const Spin: React.FC<PropsType> = (props) => {
  return (
  <motion.div
    className="container"
    whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 1.0, rotate: 360 }}
  >
    <div className="content-box w-auto h-32 rounded-tl-lg py-10 text-sky-800" {...props}></div>
      </motion.div>
);
}
