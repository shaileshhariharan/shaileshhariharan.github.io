import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const Navigation = ({ activeSection, onNavClick }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "projects", label: "WORK" },
    { id: "experience", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (sectionId: string) => {
    onNavClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 bg-white dark:bg-gray-900 rounded-full shadow-md transition-all duration-300"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-24 lg:w-32 flex-col justify-center z-40">
        <div className="h-full flex flex-col justify-between py-12">
          <div className="flex justify-center items-center h-full">
            <ul className="flex gap-12 items-center transform -rotate-90">
              {navItems.reverse().map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavItemClick(item.id)}
                    className={`tracking-widest text-sm transition-all duration-300 hover:font-medium ${
                      activeSection === item.id ? "font-medium" : "font-light"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l border-gray-300 h-24 mx-auto my-4"></div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-950 z-40 flex flex-col justify-center items-center transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-8 items-center">
          {navItems.reverse().map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavItemClick(item.id)}
                className={`text-2xl tracking-widest transition-all duration-300 hover:font-medium
                  ${activeSection === item.id ? "font-medium" : "font-light"}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
