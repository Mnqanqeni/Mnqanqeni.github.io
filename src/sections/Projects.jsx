import React from "react";
import ProjectCard from "../components/ProjectCard";
import aboutMe from "../assets/images/about-me.png";
import portfolio from "../assets/images/portfolio.jpeg";

const levels = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced",
};

const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind to showcase my projects.",
      categories: ["Frontend", "Full-Stack"],
      level: levels[2],
      image: portfolio,
      liveDemo: "https://ndiyakholwa-mnqanqeni.netlify.app/",
      repo: "https://github.com/Mnqanqeni/Mnqanqeni.github.io",
      techStack: ["React", "Tailwind CSS", "Vite","Javascript","Framer Motion","rest API"],
      dateCreated: "2024-12",
      latestUpdate: "2024-12",
      videoDemo: "https://youtu.be/example1"
    },
    {
      title: "Personal Blog",
      description: "A blog platform built with Django and React, allowing users to comment and share posts.",
      categories: ["Full-Stack"],
      level: levels[2],
      image: "/images/ecommerce.png",
      liveDemo: "https://mystore.com",
      repo: "https://github.com/yourusername/ecommerce-app",
      techStack: ["Django"],
      createdDate: "2024-12",
      latestUpdate: "2025-02",
      videoDemo: "https://youtu.be/example2"
    },
    {
      title: "to-do List App",
      description: "A simple to-do list app built with React and Tailwind CSS.",
      categories: ["Frontend", "Full-Stack"],
      level: levels[1],
      image: "/images/todo-list.png",
      repo: "https://github.com/Mnqanqeni/to-do",
      techStack: ["React", "Tailwind CSS", "Vite"],
      createdDate: "2024-12",
      latestUpdate: "2024-11",
      videoDemo: "https://youtu.be/example4"
    },
    {
      title: "memory Game",
      description: "A fun memory game built with JavaScript and CSS animations.",
      categories: ["Frontend", "Game"],
      level: levels[1],
      image: "/images/memory-game.png",
      liveDemo: "https://memorygame.com",
      repo: "https://github.com/Mnqanqeni/memory-game",
      techStack: ["HTML", "CSS", "JavaScript"],
      createdDate: "2024-12",
      latestUpdate: "2025-01",
      videoDemo: "https://youtu.be/example5"
    },
    {
      title: "express form",
      description: "A simple form submission app using Express.js and Postgressql and docker-composer.",
      categories: ["Backend", "Full-Stack"],
      level: "Intermediate",
      image: "/images/express-form.png",
      liveDemo: "https://expressform.com",
      repo: "https://github.com/Mnqanqeni/express-forms",
      techStack: ["Node.js", "Express", "PostgreSQL", "Docker"],
      createdDate: "2024-12",
      latestUpdate: "2024-12",
      videoDemo: "https://youtu.be/example6"
    },
    {
      title: "semitone-differences",
      description: "A javascript script to calculate semitone differences between musical notes.",
      categories: ["Game", "JavaScript"],
      level: levels[1],
      image: "/images/semitone.png",
      liveDemo: "https://semitonedifferences.com",                                        
      repo: "https://github.com/Mnqanqeni/semitone-difference",
      techStack: ["JavaScript","HTML","CSS", "Music Theory"],
      dateCreated: "2024-12",
      latestUpdate: "2025-02",
      videoDemo: "https://youtu.be/example7"
    },
  ];
  

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-between w-full h-auto">
            <div className="text-3xl font-bold py-16">
                <h1> <span className="text-secondary">My </span>Projects</h1>
            </div>
            <ProjectCard key={projects[0].title} project={projects[0]} />
            <div className="w-full h-1-6 bg-gradient-frame-line mt-8" />
        </section>
    );
}