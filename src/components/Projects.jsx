import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "To-Do List Web App",
      description:
        "A responsive and user-friendly To-Do List built using HTML, CSS, and JavaScript. Supports task creation, deletion, and LocalStorage-based data persistence. Clean UI and smooth functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/KunalSagar0615/to-do-list",
    },
    {
      title: "CODESOFT Java Backend Projects",
      description:
        "Collection of backend development tasks completed during my CODESOFT Internship. Implemented Java OOP concepts, JDBC, MySQL CRUD operations, file handling, and console-based applications.",
      tech: ["Java", "MySQL", "JDBC"],
      link: "https://github.com/KunalSagar0615/CODESOFT",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-900 text-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-blue-500/40 transition duration-300" >
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">{project.title} </h3>

            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm" >{t} </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a href={project.link} target="_blank" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition" >
              <FaGithub size={22} /> View on GitHub </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
