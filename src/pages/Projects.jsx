import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "E-Commerce App",
    description: "A full-stack e-commerce web and mobile app with product listing, payments, and admin dashboard.",
    tech: ["React", "Spring Boot", "MongoDB", "Cashfree"],
    github: "https://github.com/vamshipenti/ecommerce-app",
    status: "Coming Soon - under development"
    
  },
  {
    title: "Personal Finance Tracker",
    description: "React Native app to track income and expenses, visual insights, and budget planning.",
    tech: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com/vamshipenti/Finance-Tracker",
   
  },
  {
    title: "Emotional-Wellbeing-Tracker",
    description: "Emotional well-being app to track mood swings and mental state throughout the day.",
    tech: ["React Native", "Expo"],
    github: "https://github.com/vamshipenti/Emotional-Wellbeing-Tracker",
   
  },
  {
    title: "Shopping Cart",
    description: "Shopping Cart Mobile Application Developed using React Native.",
    tech: ["React Native"],
    github: "https://github.com/vamshipenti/Shopping-Cart",
    
  },
  {
    title: "Purchase Order Entry System",
    description: "Simplified tool for managing purchase orders",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/vamshipenti/POES-Java",
    status: "Sorry, The Project is in Private Mode",
   
  },
  {
    title: "Employee Management System",
    description: "Manages employee data and workflows",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/vamshipenti/RRE",
    status: "Sorry, The Project is in Private Mode",
  },
  {
    title: "Portfolio Website",
    description: "My Portfolio Website",
    tech: ["React","CSS"],
    github: "https://github.com/Vamshipenti/Portfolio",
   
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-button filled">GitHub</a>
                
                 
              </div>
              <p className="project-status">{project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
