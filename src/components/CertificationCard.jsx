import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function CertificationCard() {
  return (
    <div className="bg-gradient-to-br from-black/50 via-slate-900/60 to-cyan-800/40 shadow-customBlueXl backdrop-blur-md text-fourth rounded-3xl overflow-hidden p-6 max-w-md transition-transform hover:scale-[1.02] duration-300">
      <header className="flex items-center mb-4">
        <FaCertificate className="text-yellow-400 text-3xl mr-3" aria-hidden="true" />
        <div>
          <h2 className="text-2xl font-bold text-accent">React Developer Certification</h2>
          <p className="text-sm text-secondary">Issued by: FreeCodeCamp</p>
        </div>
      </header>

      <p className="text-secondary mb-4 text-base leading-relaxed">
        Certified for building and deploying React applications using modern JavaScript and best practices.
      </p>

      <div className="mb-4">
        <span className="text-sm font-medium text-secondary">Skills Covered:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["React", "JavaScript", "Hooks", "SPA Architecture"].map((skill) => (
            <span
              key={skill}
              className="bg-slate-800/40 text-fourth px-3 py-1 rounded-full text-xs border border-fourth/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="text-sm text-secondary mb-4">
        <p><strong className="text-fourth">Issued:</strong> October 2024</p>
        <p><strong className="text-fourth">Credential ID:</strong> FCC123456</p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <a
          href="https://freecodecamp.org/certificate/example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:underline text-sm"
        >
          <FaExternalLinkAlt /> View Certificate
        </a>
      </div>
    </div>
  );
}
