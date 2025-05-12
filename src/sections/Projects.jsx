import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ProjectFilter from "../components/ProjectFilter";

export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects);

    return (
        <section id="projects" className="flex flex-col items-center justify-between w-full h-auto">
            <div className="text-3xl font-bold xl:text-5xl py-16">
                <h1><span className="text-secondary">My </span>Projects</h1>
            </div>

            <ProjectFilter allProjects={projects} setProjects={setFilteredProjects} />

            <div className="flex flex-wrap justify-center gap-8 mt-10">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <div className="w-full h-1-6 bg-gradient-frame-line mt-8" />
        </section>
    );
}
