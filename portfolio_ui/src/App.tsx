import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Transition } from "./components/Transition";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (isLoading) {
    return <Transition />;
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="w-full md:pl-24 lg:pl-32">
        <section id="hero">
          <Hero />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section
          id="experience"
          className="py-24 bg-gray-50  md:rounded-l-3xl rounded-none"
        >
          <Experience />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
