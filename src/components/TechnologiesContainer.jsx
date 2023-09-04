import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiWordpress,
    DiReact,
} from "react-icons/di"

import "../styles/components/Technologies.sass";

const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5/>},
    {id: "css", name: "CSS3", icon: <DiCss3/>},
    {id: "js", name: "javascript", icon: <DiJsBadge/>},
    {id: "node", name: "node.js", icon: <DiNodejsSmall/>},
    {id: "wordpress", name: "Wordpress", icon: <DiWordpress/>},
    {id: "react", name: "React", icon: <DiReact/>},
    
]


function TechnologiesContainer() {
    return(
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technlogy-info">
                            <h3>{tech.name}</h3>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, fugiat.
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer