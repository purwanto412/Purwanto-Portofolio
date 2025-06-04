import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Training', to: 'training' },
    { name: 'Contact', to: 'contact' },
    { name: 'Schedule & Location', to: 'schedule' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-primary/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Purwanto Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-heading font-bold text-primary dark:text-light">
              Purwanto
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-primary-light dark:text-light/80 hover:text-primary dark:hover:text-light font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-primary-light text-primary dark:text-light hover:bg-gray-200 dark:hover:bg-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-primary-light text-primary dark:text-light"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="text-primary dark:text-light p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white dark:bg-primary z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-primary dark:text-light p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className="text-xl font-medium text-primary dark:text-light"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;