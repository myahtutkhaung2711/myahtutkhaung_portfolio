import React from "react";
import "./project.css";

const projects = [
  {
    title: "E-commerce Shop",
    description: "An online shop with Laravel backend, MySQL database, and product management features.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, showcasing projects and contact info.",
    link: "#"
  },
  {
    title: "Blog Platform",
    description: "A simple blog site with login/register, post CRUD, and comments section.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;