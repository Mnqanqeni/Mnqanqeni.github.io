import { FaExternalLinkAlt, FaGithub, FaVideo } from "react-icons/fa";
import project1 from "../assets/images/project-1.png";

export default function ProjectCard() {
  return (
    <div className="bg-gradient-to-br from-black/50 via-slate-900/60 to-cyan-800/40 shadow-customBlueXl backdrop-blur-md text-fourth rounded-3xl m-5 p-8 max-w-md min-w-10 transition-transform hover:scale-[1.02] duration-300">
      <img
        src={project1}
        alt="Portfolio Website"
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
      />

      <h2 className="text-2xl font-bold text-accent mb-2">Portfolio Website</h2>

      <p className="text-secondary mb-4 text-base leading-relaxed">
        A personal portfolio built with React and Tailwind to showcase my projects.
      </p>

      <div className="mb-4">
        <span className="text-sm font-medium text-secondary">Categories:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["Frontend", "Full-Stack"].map((cat) => (
            <span
              key={cat}
              className="bg-cyan-900/30 text-accent px-3 py-1 rounded-full text-xs border border-accent/40"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm font-medium text-secondary">Tech Stack:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["React", "Tailwind CSS", "Vite", "Javascript", "Framer Motion", "REST API"].map((tech) => (
            <span
              key={tech}
              className="bg-slate-800/40 text-fourth px-3 py-1 rounded-full text-xs border border-fourth/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="text-sm text-secondary mb-4">
        <p><strong className="text-fourth">Created:</strong> 2024-12</p>
        <p><strong className="text-fourth">Last Updated:</strong> 2024-12</p>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://ndiyakholwa-mnqanqeni.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:underline text-sm"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
        <a
          href="https://github.com/Mnqanqeni/Mnqanqeni.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-secondary hover:text-fourth hover:underline text-sm"
        >
          <FaGithub /> Repo
        </a>
        <a
          href="https://youtu.be/example1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-red-500 hover:underline text-sm"
        >
          <FaVideo /> Video
        </a>
      </div>
    </div>
  );
}
