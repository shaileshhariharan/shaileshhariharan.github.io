import { ExternalLink, FileText } from "lucide-react";
import { ComponentType } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  links: {
    github: string;
  };
}

interface ProjectCardProps {
  project: Project;
  icon?: ComponentType<{ className?: string }>;
}

const ProjectCard = ({ project, icon: Icon = FileText }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 rounded-lg p-6 md:hover:border-gray-400 dark:md:hover:border-gray-800 transition-all duration-300">
      <div className="space-y-4">
        <Icon className="w-8 h-8 mb-4 text-black dark:text-gray-200" />
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center p-2 text-sm text-gray-900 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-100  transition-colors duration-300"
        >
          View Project <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
