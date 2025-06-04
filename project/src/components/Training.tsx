import React from 'react';
import { motion } from 'framer-motion';
import { trainings } from '../data/trainingData';
import { BookOpen, Award } from 'lucide-react';

const Training: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="training" className="bg-gray-50 dark:bg-primary-light">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Training & Education
        </motion.h2>
        
        <p className="text-center text-primary-light dark:text-light/80 max-w-3xl mx-auto mb-12">
          Continuous professional development through specialized training programs and certifications
          to enhance technical skills and expertise in the piping industry.
        </p>
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-10"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mr-4">
              <BookOpen size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-primary dark:text-light">
              Professional Training
            </h3>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {trainings.map((training) => (
              <motion.div
                key={training.id}
                variants={itemVariants}
                className="card group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 dark:bg-secondary/30 flex items-center justify-center mr-3 group-hover:bg-secondary transition-colors duration-300">
                    <Award size={20} className="text-primary dark:text-light group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-primary dark:text-light">{training.title}</h4>
                </div>
                
                {training.organization && (
                  <p className="text-accent dark:text-secondary-light ml-13 pl-13">
                    {training.organization}
                  </p>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="w-full bg-gray-200 dark:bg-accent/30 h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full w-full"></div>
                  </div>
                  <p className="text-right text-sm text-accent dark:text-secondary-light mt-1">Completed</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;