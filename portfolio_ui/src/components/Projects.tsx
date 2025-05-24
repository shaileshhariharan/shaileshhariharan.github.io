import { useState } from "react";
import { Cpu, FileText, Github, ListTodo, Rocket } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "PromptResume - AI Resume Builder",
      description:
        "PromptResume is an AI-powered resume builder that creates professional resumes from your background and skills in seconds. Built with React and Express, it offers an easy interface, real-time preview, and PDF export for quick, polished results.",
      technologies: ["React", "NodeJS", "ExpressJS", "GroqCloud"],
      links: {
        github: "https://github.com/Shaileshhariharan03/prompt_resume",
      },
      icon: FileText,
    },
    {
      id: 2,
      title: "Quick Deploy – App Deployment Platform",
      description:
        "Quick Deploy is a full-stack platform for one-click deployment of frontend apps via GitHub URLs. Built with a React frontend and Node.js microservices, it automates cloning, building, and hosting using S3/Cloudflare, SQS, and Redis—offering a lightweight alternative to Vercel or Netlify.",
      technologies: ["React", "NodeJS", "ExpressJS", "Redis"],
      links: {
        github: "https://github.com/Shaileshhariharan03/quick_deploy",
      },
      icon: Rocket,
    },
    {
      id: 3,
      title: "AI enabled Car parking using OpenCV",
      description:
        "An AI-powered system using OpenCV to automate and optimize car parking through real-time image processing and object detection, tackling issues like congestion and poor space allocation.",
      technologies: ["Python", "OpenCV"],
      links: {
        github:
          "https://github.com/Shaileshhariharan03/AIEnabledCarParking_OpenCV",
      },
      icon: Cpu,
    },
    {
      id: 4,
      title: "Todo List iOS App",
      description:
        "This is a simple Todo List app built using SwiftUI. The app allows users to create, update, and delete tasks. The tasks are displayed in a list format, and users can mark tasks as completed or pending with a simple tap.",
      technologies: ["SwiftUI", "iOS"],
      links: {
        github: "https://github.com/Shaileshhariharan03/TodoList_App",
      },
      icon: ListTodo,
    },
  ]);

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair font-medium mb-16">
          WORK
        </h2>

        <div className="mb-16">
          {/* <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Selected projects showcasing my expertise in full-stack development, AI, and problem-solving. Each project 
            represents real-world solutions built with modern technologies.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              icon={project.icon}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/Shaileshhariharan03?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 group"
          >
            <span className="text-sm uppercase tracking-widest">
              View More on GitHub
            </span>
            <Github
              size={16}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
