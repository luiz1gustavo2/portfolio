import { useEffect, useState } from "react";
import { default as ProjectBookmark } from '../assets/bookmark.png';
import { default as ProjectPortfolio } from '../assets/portfolio.png';
import { default as ProjectGoodsleep } from '../assets/goodsleep.png';
import { default as ProjectFCMotors } from '../assets/fcmotors.png';
import ProjectCard from "../components/ProjectCard";

function ProjectTab() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/luiz1gustavo2/repos", {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    })


    return (
        <div className="project">
            <div className="project-btns">

            </div>
            <div className="project-box">
                <ProjectCard />
            </div>
        </div>
    );
}

export default ProjectTab; 