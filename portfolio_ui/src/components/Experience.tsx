import { useState } from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const [experiences] = useState([
    {
      id: 1,
      role: "Analyst - Machine Learning Engineer",
      company: "Tiger Analytics",
      url: "https://www.tigeranalytics.com",
      period: "Oct 2024 - Present",
      description:
        "Building intelligent, scalable web applications and multimodal systems by integrating frontend, backend, and AWS services.",
      achievements: [
        "Developed chatbot and multimodal applications using React, Angular, and Bedrock Agents",
        "Built backend systems with FastAPI and Django to support seamless frontend-backend communication",
        "Implemented AWS Lambda services to invoke Bedrock Agents and enhance scalability",
        "Designed and integrated WebSocket layers to power real-time notification modules",
      ],
    },
  ]);

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair font-medium mb-16">
          ABOUT
        </h2>

        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
            I'm a tech enthusiast and creative problem solver passionate about
            blending software engineering with visual design.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            I work at the intersection of code and creativity, building
            high-performance apps and intuitive interfaces using tools like
            Python, Swift, React, and Blender. From full-stack development to AI
            and 3D design, I love turning ideas into impactful digital
            experiences.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
