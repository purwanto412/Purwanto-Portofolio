import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Phone, Mail, Award } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="bg-gray-50 dark:bg-primary-light">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Curriculum Vitae
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Personal Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
            className="card"
          >
            <h3 className="text-xl font-bold font-heading text-primary dark:text-light mb-6 border-b-2 border-secondary pb-2">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mr-4">
                  <Award size={20} className="text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-light">Full Name</h4>
                  <p className="text-primary-light dark:text-light/80">Purwanto</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mr-4">
                  <Calendar size={20} className="text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-light">Date of Birth</h4>
                  <p className="text-primary-light dark:text-light/80">June 1st, 1970</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-light">Address</h4>
                  <p className="text-primary-light dark:text-light/80">
                    Sidamulya RT 003 RW 003 Ds. Binangun, Kec. Bantarsari – Kab. Cilacap – Central Java (53258)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mr-4">
                  <Phone size={20} className="text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-light">Phone</h4>
                  <p className="text-primary-light dark:text-light/80">081227047043</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary dark:text-light">Email</h4>
                  <p className="text-primary-light dark:text-light/80">purwanto.alya@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Qualifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
            className="card"
          >
            <h3 className="text-xl font-bold font-heading text-primary dark:text-light mb-6 border-b-2 border-secondary pb-2">
              Summary of Qualifications
            </h3>
            
            <p className="text-primary-light dark:text-light/80 mb-4">
              Having more than 25years experience in engineering and Construction for Refinery, 
petrochemical, Oil and Gas, Power plant Geothermal and LNG plan etc.
            </p>
            
            <div className="mb-4">
              <h4 className="font-medium text-primary dark:text-light mb-2">In Piping Engineering Phase:</h4>
              <ul className="list-disc list-inside space-y-1 text-primary-light dark:text-light/80">
                <li>Had served as Drafter, Designer and Field Engineer. </li>
                <li>Prepare Pipe routing study as basic conceptual for engineering drawing (lay-out).</li>
                <li>Conduct material take off and prepared work volume.</li>
                <li>Develop shop fabrication drawing/ spool drawing and as built drawing. </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-primary dark:text-light mb-2">In Piping Construction:</h4>
              <ul className="list-disc list-inside space-y-1 text-primary-light dark:text-light/80">
                <li>Had served as Piping Supervisor and Engineering Construction.</li>
                <li>Supervised piping installation for underground and aboveground lines.</li>
                <li>Performed line check for route, plumb, supports/shoes, and material specs.</li>
                <li>Prepared and executed punch list; monitored activities and manpower.</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeIn}
          className="mt-12"
        >
          <h3 className="section-subtitle">Education & Background</h3>
          
          <div className="card">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-primary dark:text-light">Senior High School</h4>
                <p className="text-primary-light dark:text-light/80">Education Degree</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 bg-secondary/10 dark:bg-secondary/20 text-primary dark:text-light rounded-full text-sm font-medium">
                  Passport No: X5491608
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;