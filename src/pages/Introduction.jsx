import Typed from "typed.js";
import { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import "../styles/Introduction.css";

export default function Introduction() {
  const nome = useRef(null);
  const profissao = useRef(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const typed = new Typed(nome.current, {
      strings: ["Olá! Eu sou", "Luiz Gustavo Nunes."],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 100
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(profissao.current, {
      strings: ["Desenvolvedor Frontend", "Desenvolvedor Backend", "Desenvolvedor Fullstack"],
      startDelay: 6000,
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 100
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="header" id="intro">
      <div className="grid grid-cols-1 grid-rows-2 ">
        <div className="title">
          <h1 ref={nome} className="text-sky-100"></h1>
        </div>
        <div className="title-neon">
          <h1 ref={profissao} className="transition ease-in-out hover:text-yellow-300 duration-1000 "></h1>
        </div>
      </div>
      <div className="intro-description">
        <p>Sou um Desenvolvedor Fullstack, formado em Análise e Desenvolvimento de Sistemas, disciplinado e  dedicado.</p>
        <p>Sou um profissional adaptável, estudo desenvolvimento há 3 anos e recentemente comecei a estudar a cultura DevOps.</p>
      </div>

      <button
        className={`hamburguer ${open ? "" : "open"}`}
        onClick={() => open ? setOpen(false) : setOpen(true)}
      >
      </button>
      <Nav
        classNav={`navBar ${open ? "" : "open"}`}
        isOpen={open}
        onLinkClick={() => open ? setOpen(false) : setOpen(true)}/>

    </header>

  );
}
