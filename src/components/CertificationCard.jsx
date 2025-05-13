import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function CertificationCard({certification,index,visibleCount}) {
  return (
    <div className={`${index<visibleCount? "block":"hidden"} bg-gradient-to-br from-black/50 via-slate-900/60 to-cyan-800/40 shadow-customBlueXl backdrop-blur-md text-fourth rounded-3xl m-5 p-8 max-w-md min-w-10 transition-transform hover:scale-[1.02] duration-300`}>
      <header className="flex items-center mb-4">
        <FaCertificate className="text-yellow-400 text-3xl mr-3" aria-hidden="true" />
        <div>
          <h2 className="text-2xl font-bold text-accent">{certification.title}</h2>
          <p className="text-sm text-secondary">Issued by: {certification.issuer}</p>
        </div>
      </header>

      <p className="text-secondary mb-4 text-base leading-relaxed">
        {certification.description}
      </p>

      <div className="mb-4">
        <span className="text-sm font-medium text-secondary">Level:</span>
        <div className="flex flex-wrap gap-2 mt-1">
            <span
              className="bg-slate-800/40 text-fourth px-3 py-1 rounded-full text-xs border border-fourth/30"
            >
              {certification.level}
            </span>
        </div>
      </div>


      <div className="mb-4">
        <span className="text-sm font-medium text-secondary">Categories:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {certification.categories.map((category,index) => (
            <span
              key={index}
              className="bg-slate-800/40 text-fourth px-3 py-1 rounded-full text-xs border border-fourth/30"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm font-medium text-secondary">Skills Covered:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {certification.skills.map((skill) => (
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
        <p><strong className="text-fourth">Issued:</strong> {certification.issuedDate}</p>
        <p><strong className="text-fourth">Credential ID:</strong> {certification.credentialId}</p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <a
          href={certification.certificationUrl}
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
