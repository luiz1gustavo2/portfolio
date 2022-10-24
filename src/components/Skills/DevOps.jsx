import { useRef } from "react";
import { useInView } from "framer-motion";

const technologiesItems = {
  docker: {
      img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />,
      tech: "Docker"
  },

  aws: {
      img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />,
      tech: "AWS"
  },

  git: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />,
    tech: "Git"
},

figma: {
  img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />,
  tech: "Figma"
},

vscode: {
  img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />,
  tech: "VSCode"
},

github: {
  img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />,
  tech: "github"
},


          


linux: {
    img: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />,
    tech: "Linux"
}
};

export default function DevOps() {
const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const styleDes = {
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    };
  return (
    <>
      <h3 className="text-2xl md:text-5xl font-bold text-zinc-300">DevOps e Ferramentas</h3>
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
    </>
  )
}