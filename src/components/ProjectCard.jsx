import { FaExternalLinkAlt, FaGithub, FaVideo } from "react-icons/fa";
import portfolio from "../assets/images/portfolio.jpeg";

export default function ProjectCard() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 max-w-md">
      <img
        src={portfolio}
        alt="Portfolio Website"
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">Portfolio Website</h2>
      <p className="text-gray-600 mb-4">
        A personal portfolio built with React and Tailwind to showcase my projects.
      </p>

      <div className="mb-3">
        <span className="text-sm font-medium text-gray-500">Categories:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["Frontend", "Full-Stack"].map((cat) => (
            <span
              key={cat}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <span className="text-sm font-medium text-gray-500">Tech Stack:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["React", "Tailwind CSS", "Vite", "Javascript", "Framer Motion", "rest API"].map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-4">
        <p><strong>Created:</strong> 2024-12</p>
        <p><strong>Last Updated:</strong> 2024-12</p>
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href="https://ndiyakholwa-mnqanqeni.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
        <a
          href="https://github.com/Mnqanqeni/Mnqanqeni.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-800 hover:underline"
        >
          <FaGithub /> Repo
        </a>
        <a
          href="https://youtu.be/example1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-red-600 hover:underline"
        >
          <FaVideo /> Video
        </a>
      </div>
    </div>
  );
}
