import React from 'react';
import { ArrowUpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <p className="mt-2 text-gray-400 max-w-md">
              Software Developer specializing in AI & ML solutions. Building innovative applications that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white transition-colors duration-300 mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle size={24} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
              Experience
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;