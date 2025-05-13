import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaVideo } from "react-icons/fa";
import axios from "axios";
import project1 from "../assets/images/project-1.png";

export default function ProjectCard({ project,index,visibleCount }) {
  const [repoDates, setRepoDates] = useState({ created: "", updated: "" });

  useEffect(() => {
    const cachedData = localStorage.getItem(`repoDates-${project.repoFullName}`);
    const lastFetched = localStorage.getItem(`repoFetched-${project.repoFullName}`);
    const today = new Date().toISOString().split("T")[0];

    if (cachedData && lastFetched === today) {
      setRepoDates(JSON.parse(cachedData));
      return;
    }

    const fetchRepoDates = async () => {
      try {
        const res = await axios.get(`https://api.github.com/repos/${project.repoFullName}`);
        const data = {
          created: new Date(res.data.created_at).toLocaleDateString(),
          updated: new Date(res.data.updated_at).toLocaleDateString(),
        };

        localStorage.setItem(`repoDates-${project.repoFullName}`, JSON.stringify(data));
        localStorage.setItem(`repoFetched-${project.repoFullName}`, today);

        setRepoDates(data);
      } catch (err) {
        console.error("Error fetching GitHub repo info:", err);
      }
    };

    fetchRepoDates();
  }, [project.repoFullName]);

  return (
    <div className={`${index<visibleCount? "block":"hidden"} bg-gradient-to-br from-black/50 via-slate-900/60 to-cyan-800/40 shadow-customBlueXl backdrop-blur-md text-fourth rounded-3xl m-5 p-8 max-w-md min-w-10 transition-transform hover:scale-[1.02] duration-300`}>
      <img
        src={project1}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
      />

      <h2 className="text-2xl font-bold text-accent mb-2">{project.title}</h2>

      <p className="text-secondary mb-4 text-base leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-row justify-between items-center">
        <div className="mb-4">
          <span className="text-sm font-medium text-secondary">Status:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="bg-slate-800/40 text-fourth px-3 py-1 rounded-full text-xs border border-fourth/30">
              {project.status}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-sm font-medium text-secondary">Level:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="bg-slate-800/40 text-fourth px-3 py-1 rounded-full text-xs border border-fourth/30">
              {project.level}
            </span>
          </div>
        </div>

      </div>

      <div className="mb-4">
        <span className="text-sm font-medium text-secondary">Categories:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.categories.map((cat) => (
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
          {project.techStack.map((tech) => (
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
        <p>
          <strong className="text-fourth">Created:</strong> {repoDates.created || "—"}
        </p>
        <p>
          <strong className="text-fourth">Last Updated:</strong> {repoDates.updated || "—"}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:underline text-sm"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-fourth hover:underline text-sm"
          >
            <FaGithub /> Repo
          </a>
        )}
        {project.videoDemo && (
          <a
            href={project.videoDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-500 hover:underline text-sm"
          >
            <FaVideo /> Video
          </a>
        )}
      </div>
    </div>
  );
}
