import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ProjectFilter from "../components/ProjectFilter";

export default function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [initialVisibleCount, setInitialVisibleCount] = useState(2);
    const [visibleCount, setVisibleCount] = useState(4)

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            const count = isMobile ? 2 : 4;
            setInitialVisibleCount(count);
            setVisibleCount(count);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const toggleVisibility = () => {
        if (visibleCount >= filteredProjects.length) {
            setVisibleCount(initialVisibleCount);
        } else {
            setVisibleCount((prev) => prev + initialVisibleCount);
        }
    };


    return (
        <section id="projects" className="flex flex-col items-center justify-between w-full h-auto scroll-mt-14">
            <div className="text-3xl font-bold xl:text-5xl py-8">
                <h1><span className="text-secondary">My </span>Projects</h1>
            </div>

            <ProjectFilter allProjects={projects} setProjects={setFilteredProjects} />

            <div className="flex flex-wrap justify-center gap-8 mt-12">

                {filteredProjects.map((project, index) => (

                    <ProjectCard key={index} index={index} project={project} visibleCount={visibleCount} />
                ))}
            </div>
            {filteredProjects.length > initialVisibleCount && (
                <button onClick={toggleVisibility} className="mt-4 text-blue-500 underline">
                    {visibleCount >= filteredProjects.length ? 'Show Less' : 'Show More'}
                </button>

            )}
            <div className="w-full h-1-6 bg-gradient-frame-line mt-12" />
        </section>
    );
}
