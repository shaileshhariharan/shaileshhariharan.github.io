import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium tracking-tight mb-8">
          Hey, I'm Shailesh
        </h1>

        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl font-light mb-6">
            Full Stack | Python | AI & ML
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            I build full-stack apps, train AI models, and ship stuff that
            actually works. React, Angular, Django, Streamlit, FastAPI —
            whatever fits. I like clean UIs, fast backends, and smart systems
            that make a real difference.
          </p>

          <div className="flex space-x-6">
            <a
              href="#projects"
              className="group flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors duration-300"
            >
              <span className="text-sm dark:text-gray-200 uppercase tracking-widest">
                View Work
              </span>
              <ArrowDown
                size={16}
                className="transform group-hover:translate-y-1 dark:text-gray-200 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
