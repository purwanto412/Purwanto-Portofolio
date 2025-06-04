import React from 'react';
import { socialLinks } from '../data/socialLinks';
import * as lucideIcons from 'lucide-react';

type IconName = keyof typeof lucideIcons;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-light">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Purwanto Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-heading font-bold text-light">
                Purwanto
              </span>
            </div>
            
            <p className="mt-4 text-light/70 max-w-md">
              Piping Supervisor with over 30 years of experience in engineering and construction
              for power plants, petrochemical, oil & gas refinery, and more.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const IconComponent = lucideIcons[link.icon as IconName];
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: link.color,
                      color: '#ffffff'
                    }}
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/70 text-sm">
            &copy; {currentYear} Purwanto. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-light/70 hover:text-secondary text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="mx-2 text-light/50">|</span>
            <a href="#" className="text-light/70 hover:text-secondary text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;