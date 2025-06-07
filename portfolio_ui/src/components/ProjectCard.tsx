import { ExternalLink, FileText } from "lucide-react";
import { ComponentType } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  links: {
    github: string;
    live?: string; // 👈 optional live link
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

        <div className="flex gap-4 items-center pt-2">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-900 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-100 transition-colors duration-300"
          >
            View Project <ExternalLink className="w-4 h-4 ml-2" />
          </a>

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-green-600 hover:text-green-400 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-300"
            >
              Live
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
