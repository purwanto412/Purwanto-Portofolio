import React from 'react';
import { motion } from 'framer-motion';
import { contactLinks } from '../data/socialLinks';
import * as lucideIcons from 'lucide-react';

type IconName = keyof typeof lucideIcons;

const Contact: React.FC = () => {
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
    <section id="contact" className="bg-white dark:bg-primary">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Get In Touch
        </motion.h2>
        
        <p className="text-center text-primary-light dark:text-light/80 max-w-3xl mx-auto mb-12">
          Have a project in mind or want to discuss professional opportunities? 
          Feel free to reach out through any of these channels.
        </p>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <div className="grid gap-6">
            {contactLinks.map((link) => {
              const IconComponent = lucideIcons[link.icon as IconName];
              return (
                <a 
                  key={link.id}
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-gray-50 dark:bg-primary-light rounded-lg transition-all duration-300 hover:bg-secondary/10 dark:hover:bg-secondary/20 group"
                  style={{
                    '--hover-color': link.color
                  } as React.CSSProperties}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-6 transition-colors duration-300"
                    style={{
                      backgroundColor: `${link.color}20`,
                    }}
                  >
                    <IconComponent 
                      size={32} 
                      style={{ color: link.color }}
                      className="transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary dark:text-light mb-1">
                      {link.name}
                    </h4>
                    <p className="text-primary-light dark:text-light/80">
                      {link.name === 'Email' && 'purwanto.alya@gmail.com'}
                      {link.name === 'WhatsApp' && '+62 81227047043'}
                      {link.name === 'LinkedIn' && (
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-light dark:text-light/80 underline hover:text-secondary"
                        >
                          Visit LinkedIn Profile
                        </a>
                      )}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-primary-light dark:text-light/80">
              Based in Sidamulya RT 003 RW 003 Ds. Binangun,<br />
              Kec. Bantarsari – Kab. Cilacap, Central Java (53258)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
