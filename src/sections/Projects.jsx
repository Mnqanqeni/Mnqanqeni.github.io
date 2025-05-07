import React from "react";
import ProjectCard from "../components/ProjectCard";



const levels = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced"
};

const categories = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  FULLSTACK: "Full-Stack",
  GAME: "Game",
  JAVASCRIPT: "JavaScript"
};

const techStacks = {
  REACT: "React",
  TAILWIND: "Tailwind CSS",
  VITE: "Vite",
  JAVASCRIPT: "JavaScript",
  FRAMER: "Framer Motion",
  REST_API: "REST API",
  DJANGO: "Django",
  NODE: "Node.js",
  EXPRESS: "Express",
  POSTGRESQL: "PostgreSQL",
  DOCKER: "Docker",
  HTML: "HTML",
  CSS: "CSS",
  MUSIC_THEORY: "Music Theory"
};

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind to showcase my projects.",
    categories: [categories.FRONTEND, categories.FULLSTACK],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/portfolio.png",
      thumbnail: "/images/thumbnails/portfolio-thumb.png",
      alt: "Screenshot of personal portfolio website"
    },
    liveDemo: "https://ndiyakholwa-mnqanqeni.netlify.app/",
    repo: "https://github.com/Mnqanqeni/Mnqanqeni.github.io",
    techStack: [
      techStacks.REACT,
      techStacks.TAILWIND,
      techStacks.VITE,
      techStacks.JAVASCRIPT,
      techStacks.FRAMER,
      techStacks.REST_API
    ],
    createdDate: "2024-12",
    latestUpdate: "2024-12",
    videoDemo: "https://youtu.be/example1"
  },
  {
    title: "Personal Blog",
    description: "A blog platform built with Django and React, allowing users to comment and share posts.",
    categories: [categories.FULLSTACK],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/ecommerce.png",
      thumbnail: "/images/thumbnails/ecommerce-thumb.png",
      alt: "Screenshot of personal blog platform"
    },
    liveDemo: "https://mystore.com",
    repo: "https://github.com/yourusername/ecommerce-app",
    techStack: [techStacks.DJANGO, techStacks.REACT],
    createdDate: "2024-12",
    latestUpdate: "2025-02",
    videoDemo: "https://youtu.be/example2"
  },
  {
    title: "To-Do List App",
    description: "A simple to-do list app built with React and Tailwind CSS.",
    categories: [categories.FRONTEND, categories.FULLSTACK],
    level: levels.BEGINNER,
    image: {
      src: "/images/todo-list.png",
      thumbnail: "/images/thumbnails/todo-list-thumb.png",
      alt: "Screenshot of to-do list application"
    },
    repo: "https://github.com/Mnqanqeni/to-do",
    techStack: [techStacks.REACT, techStacks.TAILWIND, techStacks.VITE],
    createdDate: "2024-12",
    latestUpdate: "2024-11",
    videoDemo: "https://youtu.be/example4"
  },
  {
    title: "Memory Game",
    description: "A fun memory game built with JavaScript and CSS animations.",
    categories: [categories.FRONTEND, categories.GAME],
    level: levels.BEGINNER,
    image: {
      src: "/images/memory-game.png",
      thumbnail: "/images/thumbnails/memory-game-thumb.png",
      alt: "Screenshot of memory card matching game"
    },
    liveDemo: "https://memorygame.com",
    repo: "https://github.com/Mnqanqeni/memory-game",
    techStack: [techStacks.HTML, techStacks.CSS, techStacks.JAVASCRIPT],
    createdDate: "2024-12",
    latestUpdate: "2025-01",
    videoDemo: "https://youtu.be/example5"
  },
  {
    title: "Express Form",
    description: "A simple form submission app using Express.js, PostgreSQL, and Docker Compose.",
    categories: [categories.BACKEND, categories.FULLSTACK],
    level: levels.INTERMEDIATE,
    image: {
      src: "/images/express-form.png",
      thumbnail: "/images/thumbnails/express-form-thumb.png",
      alt: "Screenshot of Express.js form submission app"
    },
    liveDemo: "https://expressform.com",
    repo: "https://github.com/Mnqanqeni/express-forms",
    techStack: [
      techStacks.NODE,
      techStacks.EXPRESS,
      techStacks.POSTGRESQL,
      techStacks.DOCKER
    ],
    createdDate: "2024-12",
    latestUpdate: "2024-12",
    videoDemo: "https://youtu.be/example6"
  },
  {
    title: "Semitone Differences",
    description: "A JavaScript script to calculate semitone differences between musical notes.",
    categories: [categories.GAME, categories.JAVASCRIPT],
    level: levels.BEGINNER,
    image: {
      src: "/images/semitone.png",
      thumbnail: "/images/thumbnails/semitone-thumb.png",
      alt: "Screenshot of semitone difference calculator"
    },
    liveDemo: "https://semitonedifferences.com",
    repo: "https://github.com/Mnqanqeni/semitone-difference",
    techStack: [
      techStacks.JAVASCRIPT,
      techStacks.HTML,
      techStacks.CSS,
      techStacks.MUSIC_THEORY
    ],
    createdDate: "2024-12",
    latestUpdate: "2025-02",
    videoDemo: "https://youtu.be/example7"
  }
];


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