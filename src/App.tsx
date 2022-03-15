import './App.css'
import React from "react";
import { Spin } from "./components/Spin";
import { motion } from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
const appear = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: {duration: 2}}
}

function App() {

  return (
    <motion.div className="container flex justify-between"
    variants={appear}
    initial="hidden"
    animate="visible">
      <div className="text-4xl text-black container basis-1/2 mt-12 mx-auto p-16">
        <p>Olá,</p>
        <p>Meu nome é Luiz Gustavo</p>
        <p className="text-sky-600">Desenvolvedor Web</p>
      </div>
      <div className="container basis-1/3 mt-12 mx-auto p-16 grid grid-cols-2 gap-1" >
          <Spin name="sobre">Sobre Mim</Spin>
          <Spin name="projetos">Projetos</Spin>
          <Spin name="habiilidades">Habilidades</Spin>
          <Spin name="contato">Contato</Spin>
      </div>
    </motion.div>
  );
}

export default App
