import { useRef } from "react";
import { useInView } from "framer-motion";

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

  typescript: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />,
    tech: "Typescript"
  },

  react: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />,
    tech: "React"
  },

  angular: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" />,
    tech: "Angular"
  },

  tailwind: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />,
    tech: "Tailwindcss"
  },

  materialui: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" />,
    tech: "MaterialUI"
  },

  bootstrap: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />,
    tech: "Bootstrap"
  }
};

export default function FrontendTech() {
const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const styleDes = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    };
  return (
    <div className="mb-20">
      <h3 className="text-5xl font-bold text-zinc-300">Frontend</h3>
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