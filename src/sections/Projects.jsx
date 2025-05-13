import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ProjectFilter from "../components/ProjectFilter";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function Projects() {
    const projectsRef = useRef(null);
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
          setTimeout(() => {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 100); 
        } else {
          setVisibleCount((prev) => prev + initialVisibleCount);
        }
      };
      


    return (
        <section  ref={projectsRef} id="projects" className="flex flex-col items-center justify-between w-full h-auto scroll-mt-14">
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
                <button
                onClick={toggleVisibility}
                className="mt-8 px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 transition-colors duration-300 flex items-center gap-2"
              >
                {visibleCount >= filteredProjects.length ? (
                  <>
                    Show Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    Show More <FaChevronDown />
                  </>
                )}
              </button>
              

            )}
            <div className="w-full h-1-6 bg-gradient-frame-line mt-12" />
        </section>
    );
}
