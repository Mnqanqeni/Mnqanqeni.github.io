import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";


export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-between w-full h-auto">
            <div className="text-3xl font-bold py-16">
                <h1> <span className="text-secondary">My </span>Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project,index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line mt-8" />
        </section>
    );
}