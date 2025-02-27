import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetailsComp = ({ title, description, tools, image, githubLink, liveLink }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // If there is no history, go to home page.
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="h-screen font-heading p-8 bg-black text-white overflow-y-auto">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 bg-customOrange text-black rounded hover:bg-white transition-colors"
      >
        Back
      </button>

      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-1/3 rounded mb-6 object-contain"
        />
      )}

      {/* Project Title */}
      <h1 className="text-4xl mb-4 text-customOrange">{title}</h1>

      {/* Project Description */}
      <p className="text-lg mb-6 font-medium font-title">{description}</p>

      {/* Tools & Technologies */}
      <div className="mb-6">
        <h2 className="text-2xl mb-2 text-customOrange">Tools & Technologies</h2>
        <ul className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <li key={index} className="bg-gray-200 text-black px-3 py-1 rounded-full">
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
          className="px-4 py-2 bg-customOrange text-black rounded hover:bg-white transition-colors"
        >
          GitHub Repo
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-customOrange text-black rounded hover:bg-white transition-colors"
        >
          Live Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsComp;
