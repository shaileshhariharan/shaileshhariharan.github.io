import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation for heading, subheading, and social icons
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;
    const social = socialRef.current;

    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subHeading) {
      subHeading.style.opacity = '0';
      subHeading.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subHeading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subHeading.style.opacity = '1';
        subHeading.style.transform = 'translateY(0)';
      }, 300);
    }

    if (social) {
      social.style.opacity = '0';
      social.style.transform = 'translateY(20px)';
      setTimeout(() => {
        social.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        social.style.opacity = '1';
        social.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  return (
    <section id="home" className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Software Developer 
              <br />
              <span className="text-teal-600 dark:text-teal-400">Specializing in AI & ML</span>
            </h1>
            <p 
              ref={subHeadingRef}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I build innovative solutions that leverage artificial intelligence and machine learning 
              to solve complex problems. With expertise in both software development and 
              AI technologies, I create impactful applications that deliver real value.
            </p>
            <div 
              ref={socialRef}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg 
                shadow-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
                text-gray-900 dark:text-white font-medium rounded-lg shadow-sm border border-gray-200 
                dark:border-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-gray-500"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="hidden lg:flex mt-8 lg:mt-0 lg:pl-10">
            <div className="w-64 h-64 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full opacity-90 
            flex items-center justify-center shadow-lg">
              <div className="w-60 h-60 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                {/* This would be your profile image */}
                <div className="text-center p-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text mb-2">JS</div>
                  <p className="text-gray-600 dark:text-gray-300">Your Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center space-x-5">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:your-email@example.com" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="#" 
            className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors ml-2"
          >
            <Download size={20} className="mr-1" />
            <span className="text-sm">Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;