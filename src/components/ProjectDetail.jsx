const ProjectDetailsComp = ({ title, description, tools, image, githubLink, liveLink }) => {
  return (
    <div className=" h-screen font-heading p-8 bg-customOrange ">
      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-1/2 rounded mb-6 object-cover"
        />
      )}
      
      {/* Project Title */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      
      {/* Project Description */}
      <p className="text-lg mb-6 font-semibold font-title">{description}</p>
      
      {/* Tools & Technologies */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tools & Technologies</h2>
        <ul className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <li key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              {tool}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Action Links */}
      <div className="flex gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
        >
          GitHub Repo
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-customOrange text-white rounded hover:bg-orange-600 transition-colors"
        >
          Live Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsComp;
