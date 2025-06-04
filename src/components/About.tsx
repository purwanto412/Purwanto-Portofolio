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
        duration: 0.5,
      },
    }),
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
          {/* Personal Info */}
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
              {[
                {
                  icon: <Award size={20} />,
                  label: 'Full Name',
                  value: 'Purwanto',
                },
                {
                  icon: <Calendar size={20} />,
                  label: 'Date of Birth',
                  value: 'June 1st, 1970',
                },
                {
                  icon: <MapPin size={20} />,
                  label: 'Address',
                  value:
                    'Sidamulya RT 003 RW 003 Ds. Binangun, Kec. Bantarsari – Kab. Cilacap – Central Java (53258)',
                },
                {
                  icon: <Phone size={20} />,
                  label: 'Phone',
                  value: '081227047043',
                },
                {
                  icon: <Mail size={20} />,
                  label: 'Email',
                  value: 'purwanto.alya@gmail.com',
                },
              ].map((item, index) => (
                <div className="flex items-start" key={index}>
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mr-4 text-primary dark:text-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-primary dark:text-light">{item.label}</h4>
                    <p className="text-primary-light dark:text-light/80">{item.value}</p>
                  </div>
                </div>
              ))}
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
              Over 25 years of experience in engineering and construction for Refinery, Petrochemical, Oil & Gas,
              Power Plants, Geothermal, and LNG Plant projects.
            </p>

            <div className="mb-4">
              <h4 className="font-medium text-primary dark:text-light mb-2">In Piping Engineering Phase:</h4>
              <ul className="list-disc list-inside space-y-1 text-primary-light dark:text-light/80">
                <li>Served as Drafter, Designer, and Field Engineer.</li>
                <li>Prepared pipe routing studies for layout drawings.</li>
                <li>Performed material take-off and estimated work volume.</li>
                <li>Created shop fabrication, spool, and as-built drawings.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-primary dark:text-light mb-2">In Piping Construction:</h4>
              <ul className="list-disc list-inside space-y-1 text-primary-light dark:text-light/80">
                <li>Served as Piping Supervisor and Construction Engineer.</li>
                <li>Supervised underground and aboveground piping installations.</li>
                <li>Conducted line checks for routing, supports, and specs.</li>
                <li>Managed punch list, monitored progress, and workforce activities.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Education */}
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
