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
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row gap-4 max-w-screen-md md:min-w-[700px] self-center">
                    <div className="flex-1 min-w-0">
                        <label className="block text-lg text-white">Level:</label>
                        <select id="filter-level" className="w-full p-2 rounded bg-secondary">
                            <option value="">All Levels</option>
                            {Object.entries(levels).map((skill, index) => (
                                <option key={index} value={skill[0].toLowerCase()}>{skill[1]}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="block text-lg text-white">Category:</label>
                        <select id="filter-category" className="w-full p-2 rounded bg-secondary">
                            <option value="">All Categories</option>
                            {Object.entries(categories).map((category, index) => (
                                <option key={index} value={category[0].toLowerCase()}>{category[1]}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <button
                    className="text-fourth px-6 bg-secondary min-w-[10rem] py-2 rounded-md hover:bg-accent-dark transition duration-300 self-center"
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