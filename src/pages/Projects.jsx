import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: "#d84a83" }}>Projects</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: "#d84a83" }}>{project.title}</h5>
                  <p className="card-text" style={{ color: "black" }}>{project.description}</p>
                  <p>
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="badge bg-dark me-1">{tech}</span>
                    ))}
                  </p>
                  <a
                    href={project.link}
                    className="btn btn-outline-dark mt-auto"
                    style={{ borderRadius: "25px" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
