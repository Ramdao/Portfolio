
import {PROFESSIONAL} from "../Project"



export default function Professional() {
    return (
      
         <div className="projects-container">
            {PROFESSIONAL.map((project, index) => (
                <div 
                    key={index}
                    className="project-container" 
                    onClick={() => window.open(project.link, "_blank")}
                    style={{ cursor: "pointer" }} 
                >
                    <img src={project.image} alt={project.title}></img>
                    <div>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-text">{project.text}</p>
                        <div className="project-skill">
                            {project.skills.map((skill, i) => ( // Use 'skills' (not 'SKILLS')
                                <p key={i}>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    
    );
}
