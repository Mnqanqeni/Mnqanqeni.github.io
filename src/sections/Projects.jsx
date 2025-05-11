import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { skillsList } from "../data/skillsList";
import { levels } from "../data/levelsList";
import { categories } from "../data/categoriesList";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-between w-full h-auto">
            <div className="text-3xl font-bold xl:text-5xl py-16">
                <h1> <span className="text-secondary">My </span>Projects</h1>
            </div>
            <div className="flex flex-col gap-4">
                <label className="block text-lg text-white">Level:</label>
                <select id="filter-level" className="p-2 rounded bg-secondary w-full">
                    <option value="">All Levels</option>
                    {Object.entries(levels).map((skill, index) => (
                        <option key={index} value={skill[0].toLowerCase()}>{skill[1]}</option>
                    ))}
                </select>

                <div className="flex flex-row gap-4">
                    <div>
                        <label className="block text-sm text-white mb-1">Category:</label>
                        <select id="filter-category" className="p-2 rounded bg-secondary">
                            <option value="">All Categories</option>
                            {Object.entries(categories).map((category, index) => (
                                <option key={index} value={category[0].toLowerCase()}>{category[1]}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-white mb-1">Skills:</label>
                        <select id="filter-skills" className="p-2 rounded bg-secondary">
                            <option value="">All Skills</option>
                            {Object.entries(skillsList).map((skill, index) => (
                                <option key={index} value={skill[0].toLowerCase()}>{skill[1]}</option>
                            ))}
                        </select>
                    </div>
                    

                </div>
                <button
                        
                        className="w-full mt-4 py-2 px-4 rounded-md bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition"
                    >
                        Clear Filters
                    </button>

            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line mt-8" />
        </section>
    );
}