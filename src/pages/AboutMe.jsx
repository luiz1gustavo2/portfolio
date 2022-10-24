import Section from "../components/Section";
import "../styles/AboutMe.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import * as HoverCard from '@radix-ui/react-hover-card';
import FrontendTech from "../components/Skills/FrontendTech";
import BackendTech from "../components/Skills/BackendTech";
import DevOps from "../components/Skills/DevOps";

function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const styleDes = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    };

    return (
        <Section id="about-me">
            <div ref={ref} style={styleDes}>
                <h2>Sobre Mim</h2>

                <p className="aboutme-description">
                    Eu sou um <strong>Desenvolvedor Fullstack</strong> formado em Análise e Desenvolvimento de Sistemas
                    na Faculdade Projeção. Eu busco uma oportunidade de começar no mercado de Desenvolvimento,
                    eu desenvolvo aplicações tanto <strong>frontend</strong> quanto <strong>backend</strong>, possuo uma vontade imensa de começar a trabalhar,
                    sou uma pessoa dedicada e só preciso de uma chance para mostrar todo meu potencial.

                </p>

                <p className="aboutme-description">
                    Eu vivo a tecnologia, sou um Desenvolvedor esforçado que busca sempre aprender mais, afinal sempre temos
                    algo novo a aprender. Eu tento não me prender a linguagens e frameworks, eu uso o que for necessário para
                    resolver o problema abordado pelo projeto. Estou buscando me tornar um desenvolvedor mais completo para entender
                    o funcionamento do projeto de ponta a ponta, desde o escopo até a implantação, estudando a cultura <strong>DevOps</strong>,
                    além de <span><HoverCard.Root openDelay={0}>
                        <HoverCard.Trigger className="p-1 bg-[#0F172A] text-[#05F2DB] border-2 border-white font-bold rounded-sm">Hard Skills</HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content className="bg-[#0F172A] text-[#05F2DB] p-4 border-2 border-white font-medium rounded">
                                <ul>
                                    <li>Design Patterns</li>
                                    <li>Solid</li>
                                    <li>Clean Architecture</li>
                                    <li>Clean Code</li>
                                    <li>DDD</li>
                                    <li>Cloud Computing</li>
                                </ul>
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root></span> essenciais.





                </p>
                <p className="aboutme-description">
                    Eu aprendo e me desenvolvo estudando diariamente pela plataforma Alura, Rocketseat, Dio.me e participando
                    frequentemente dos bootcamps oferecidos por essas plataformas.
                </p>

                <h2>Skills</h2>
                <div className="mb-20">
                    <FrontendTech />
                    <BackendTech />
                    <DevOps />
                </div>

                <h3 className="text-5xl font-bold text-zinc-300">Soft Skills</h3>
                <ul className="ml-10">
                    <li>- Liderança</li>
                    <li>- Comunicativo</li>
                    <li>- Resolução de Problemas</li>
                    <li>- Proativo</li>
                    <li>- Adaptável</li>
                    <li>- Trabalho em Equipe</li>
                </ul>

            </div>
        </Section>
    );
}

export default AboutMe;