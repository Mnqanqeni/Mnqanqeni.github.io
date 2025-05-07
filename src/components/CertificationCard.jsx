import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function CertificationCard() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 max-w-md">
      <div className="flex items-center mb-4">
        <FaCertificate className="text-yellow-500 text-3xl mr-3" />
        <div>
          <h2 className="text-xl font-bold text-gray-800">React Developer Certification</h2>
          <p className="text-sm text-gray-500">Issued by: FreeCodeCamp</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">
        Certified for building and deploying React applications with modern JavaScript and best practices.
      </p>

      <div className="mb-3">
        <span className="text-sm font-medium text-gray-500">Skills:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {["React", "JavaScript", "Hooks", "SPA Architecture"].map((skill) => (
            <span
              key={skill}
              className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-4">
        <p><strong>Issued:</strong> 2024-10</p>
        <p><strong>Credential ID:</strong> FCC123456</p>
      </div>

      <a
        href="https://freecodecamp.org/certificate/example"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-600 hover:underline"
      >
        <FaExternalLinkAlt /> View Certificate
      </a>
    </div>
  );
}
