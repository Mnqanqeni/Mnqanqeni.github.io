const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
        <img src={project.image} alt={project.title} className="h-48 object-cover" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div className="mt-2 text-xs text-blue-600 flex flex-wrap gap-1">
              {project.categories.map((cat) => (
                <span key={cat} className="bg-blue-100 px-2 py-1 rounded">{cat}</span>
              ))}
            </div>
          </div>
          <div className="mt-4 space-x-2">
            {project.liveDemo && <a href={project.liveDemo} className="text-sm text-green-600 underline">Live</a>}
            {project.repo && <a href={project.repo} className="text-sm text-gray-600 underline">Repo</a>}
            {project.videoDemo && <a href={project.videoDemo} className="text-sm text-purple-600 underline">Video</a>}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  