import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            A showcase of my work in software development, AI, and machine learning.
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 mb-10">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
            ${filter === 'all' 
              ? 'bg-teal-600 text-white' 
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
            ${filter === 'ai-ml' 
              ? 'bg-teal-600 text-white' 
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('ai-ml')}
          >
            AI & ML
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
            ${filter === 'mobile' 
              ? 'bg-teal-600 text-white' 
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
            ${filter === 'web' 
              ? 'bg-teal-600 text-white' 
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;