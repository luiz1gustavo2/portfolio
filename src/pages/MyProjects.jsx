import ProjectTab from "./ProjectTab";
import Section from "../components/Section";
import "../styles/Projects.css";
function MyProjects() {
    

    fetch("https://api.github.com/users/luiz1gustavo2/repos", )
    .then(response => response.json())
		.then( data => console.log(data))
		.catch( error => console.error(error));

    return (  
        <Section  id="my-projects">
            <h2>Soon</h2>
            <ProjectTab/> 
        </Section>
    );
}

export default MyProjects;