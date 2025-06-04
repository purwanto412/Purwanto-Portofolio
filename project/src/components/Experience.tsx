import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experienceData';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Group experiences by decade
  const decades = experiences.reduce((acc, exp) => {
    const decade = Math.floor(exp.startYear / 10) * 10;
    if (!acc[decade]) {
      acc[decade] = [];
    }
    acc[decade].push(exp);
    return acc;
  }, {} as Record<number, typeof experiences>);

  // Sort decades in descending order
  const sortedDecades = Object.keys(decades)
    .map(Number)
    .sort((a, b) => b - a);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="experience" className="bg-white dark:bg-primary">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Professional Experience
        </motion.h2>
        
        <p className="text-center text-primary-light dark:text-light/80 max-w-3xl mx-auto mb-12">
          Over three decades of experience in piping engineering and construction, 
          working across various roles from Drafter to Supervisor at prestigious companies worldwide.
        </p>
        
        <div className="space-y-16">
          {sortedDecades.map((decade, decadeIndex) => (
            <motion.div 
              key={decade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={decadeIndex}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-primary dark:text-light">
                  {decade}s
                </h3>
              </div>
              
              <div className="relative pl-6 border-l-2 border-secondary/30 dark:border-secondary/20 space-y-8">
                {decades[decade].map((exp, index) => (
                  <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="relative"
                  >
                    <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-secondary"></div>
                    <div 
                      className={`card cursor-pointer transition-all duration-300 ${
                        expandedId === exp.id ? 'border-l-4 border-secondary' : ''
                      }`}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <span className="text-sm text-accent dark:text-secondary-light">{exp.duration}</span>
                          <h4 className="text-lg font-bold text-primary dark:text-light mt-1">{exp.position}</h4>
                          <h5 className="text-primary-light dark:text-light/80 font-medium">{exp.company}</h5>
                        </div>
                        
                        <div className="mt-2 md:mt-0 md:text-right">
                          <span className="inline-block px-3 py-1 bg-secondary/10 dark:bg-secondary/20 text-primary dark:text-light rounded-full text-sm">
                            {exp.location.split(' – ')[0]}
                          </span>
                        </div>
                      </div>
                      
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200 dark:border-accent/20"
                        >
                          <h5 className="text-primary dark:text-light font-medium mb-2">Responsibilities:</h5>
                          <ul className="list-disc list-inside space-y-1 text-primary-light dark:text-light/80">
                            {exp.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          
                          <p className="mt-4 text-accent dark:text-secondary-light font-medium">
                            {exp.location}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;