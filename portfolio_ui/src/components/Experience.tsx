import React, { useRef, useEffect } from 'react';
import { experienceData } from '../data/experienceData';

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            My professional journey in software development and AI/ML technologies.
          </p>
        </div>
        
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className={`timeline-item mb-12 opacity-0 ${
                index % 2 === 0 ? 'md:flex md:justify-end' : 'md:flex'
              }`}
            >
              <div className={`relative md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
              }`}>
                {/* Dot */}
                <div className="absolute top-5 -left-2.5 md:top-5 md:-left-2.5 w-5 h-5 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900">
                  {index === 0 && (
                    <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-teal-500 animate-ping opacity-75"></div>
                  )}
                </div>
                
                <div className={`ml-6 md:ml-0 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  <span className="text-teal-600 dark:text-teal-400 font-medium">
                    {experience.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                    {experience.role}
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                    {experience.company}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">
                    {experience.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-start">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;