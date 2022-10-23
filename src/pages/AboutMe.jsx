import Section from "../components/Section";
import "../styles/AboutMe.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const styleDes = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    };

    const technologiesItems = {
        html5: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />,
            tech: "HTML5"
        },

        css3: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />,
            tech: "CSS3"
        },

        javascript: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />,
            tech: "Javascript"
        },

        git: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />,
            tech: "Git"
        },

        react: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
            tech: "React"
        },

        typescript: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />,
            tech: "Typescript"
        },

        nodejs: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />,
            tech: "NodeJs"
        },

        java: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />,
            tech: "Java"
        },

        php: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />,
            tech: "php"
        },

        mysql: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />,
            tech: "mysql"
        },
        
        tailwind: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />,
            tech: "tailwind"
        },
        
        docker: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />,
            tech: "Docker"
        },

        linux: {
            img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />,
            tech: "Linux"
        }
        
    };

    return (
        <Section id="about-me">
            <div ref={ref}
                style={styleDes}>
                <h2>Sobre mim</h2>

                <p className="aboutme-description">
                    I am a <strong>software engineering student</strong> at the
                    technological university of Peru. I am also a self-taught person.
                    Developing programs related to <strong>frontend</strong> and <strong>backend</strong> development is one of my greatest passions.
                </p>
                <p className="aboutme-description">
                    I am very passionate about creating things related to technology and art.
                    I enjoy learning from platforms that help me improve my skills, such as FreeCodeCamp, Academia X, and TheOdinProject.
                </p>
                <h2>Soft Skills</h2>
                <ul><li>teste</li></ul>

                <h2>Minhas Habilidades</h2>
                <div className="tech-list">
                    {Object.keys(technologiesItems).map((tech, i) => (
                        <div
                            className="tech-icon"
                            key={technologiesItems[tech]["tech"]}
                            ref={ref}
                            style={{
                                transform: isInView ? "none" : "translateY(100px)",
                                opacity: isInView ? 1 : 0,
                                transition: `all .7s cubic-bezier(0.17, 0.55, 0.55, 1) ${i + 2}00ms`
                            }}
                        >
                            {technologiesItems[tech]["img"]}
                            {technologiesItems[tech]["tech"]}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default AboutMe;