import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-light via-light to-gray-100 dark:from-primary dark:via-primary dark:to-primary-light -z-10"></div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 dark:bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-secondary">
                <img
                  src="https://res.cloudinary.com/dcil8l2im/image/upload/v1749022207/purwanto_w9ml57.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-secondary dark:text-secondary-light font-medium mb-2">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary dark:text-light mb-4">
                  Purwanto
                </h1>
                <p className="text-2xl md:text-3xl text-accent dark:text-secondary-light font-medium">
                  Piping Supervisor
                </p>
              </div>
            </div>
            
            <p className="text-primary-light dark:text-light/80 max-w-xl mb-8">
              With over 30 years of experience in engineering and construction for power plants,
              petrochemical, oil & gas refinery, geothermal, and LNG plants across Indonesia and
              international locations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com/file/d/1bDvenNfCnjw17FkVu4a9Eu2yALg4AHxp/view?usp=sharing" 
                className="btn btn-primary"
                download
              >
                <Download size={18} className="mr-2" />
                Download CV
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block md:w-2/5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-md"></div>
              <div className="relative bg-white dark:bg-primary-light p-8 rounded-lg shadow-card">
                <h3 className="text-xl font-bold text-primary dark:text-light mb-3">Professional Profile</h3>
                <p className="text-primary-light dark:text-light/80 mb-4">
                  Skilled Piping Supervisor with extensive experience in design, installation, and field engineering for major industrial projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-secondary mr-2"></span>
                    <span className="text-primary-light dark:text-light/80">Pipe routing & engineering layouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-secondary mr-2"></span>
                    <span className="text-primary-light dark:text-light/80">Installation supervision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-secondary mr-2"></span>
                    <span className="text-primary-light dark:text-light/80">As-built & shop drawings</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-primary-light dark:text-light/60 text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="text-secondary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero