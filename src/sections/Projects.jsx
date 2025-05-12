import React from "react";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { levels } from "../data/levelsList";
import { categories } from "../data/categoriesList";

export default function Projects() {
    const [filters, setFilters] = useState({
        level: "All Levels",
        category: "All Categories",
    });
    const [newProjects, setNewCategories] = useState(projects)

    const handleFilter = (key, value) => {
        const updatedFilters = { ...filters, [key]: value };
        setFilters(updatedFilters);

        const filtered = projects.filter(project => {
            const levelMatch =
                updatedFilters.level === "All Levels" ||
                project.level === updatedFilters.level;

            const categoryMatch =
                updatedFilters.category === "All Categories" ||
                project.categories.includes(updatedFilters.category);

            return levelMatch && categoryMatch;
        });


        setNewCategories(filtered);
    };

    const clearFilters = () => {
        const resetFilters = {
            level: "All Levels",
            category: "All Categories"
        };
        setFilters(resetFilters);
        setNewCategories(projects);
    };


    return (
        <section id="projects" className="flex flex-col items-center justify-between w-full h-auto">
            <div className="text-3xl font-bold xl:text-5xl py-16">
                <h1> <span className="text-secondary">My </span>Projects</h1>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row gap-4 max-w-screen-md md:min-w-[700px] self-center">
                    <div className="flex-1 min-w-0">
                        <label className="block text-lg text-white">Level:</label>
                        <select value={filters.level} onChange={(e) => handleFilter("level", e.target.value)} id="filter-level" className="w-full p-2 rounded bg-secondary">
                            <option value="All Levels">All Levels</option>
                            {Object.entries(levels).map(([key, value], index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 min-w-0">
                        <label className="block text-lg text-white">Category:</label>
                        <select value={filters.category} onChange={(e) => handleFilter("category", e.target.value)} id="filter-category" className="w-full p-2 rounded bg-secondary">
                            <option value="All Categories">All Categories</option>
                            {Object.entries(categories).map(([key, value], index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </select>


                    </div>
                </div>

                <button
                    onClick={clearFilters}
                    className="text-fourth px-6 bg-secondary min-w-[10rem] py-2 rounded-md hover:bg-accent-dark transition duration-300 self-center"
                >
                    Clear Filters
                </button>

            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-10">
                {newProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line mt-8" />
        </section>
    );
}