import { useRef } from "react";
import { useInView } from "framer-motion";

const technologiesItems = {
  nodejs: {
      img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />,
      tech: "NodeJs"
  },

  java: {
      img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />,
      tech: "Java"
  },

  spring: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />,
    tech: "Spring"
},

  php: {
      img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />,
      tech: "php"
  },

  laravel: {  
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" />,
    tech: "Laravel"
  },

  mysql: {
      img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />,
      tech: "mysql"
  },

};

export default function BackendTech() {
const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const styleDes = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    };
  return (
    <div className="mb-20">
      <h3 className="text-5xl font-bold text-zinc-300">Backend</h3>
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
  )
}