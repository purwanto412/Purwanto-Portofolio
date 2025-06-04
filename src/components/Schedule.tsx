import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import { Clock, MapPin } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Schedule: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());

  const workingHours = [
    { day: 'Monday - Friday', hours: '06:00 - 17:00' },
    { day: 'Saturday', hours: '06:00 - 12:00' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Public Holidays', hours: 'Closed' }
  ];

  return (
    <section id="schedule" className="bg-gray-50 dark:bg-primary-light">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Schedule & Location
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary/30 flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-primary dark:text-light" />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-light">Working Hours</h3>
            </div>

            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-white dark:bg-primary rounded-lg shadow-sm"
                >
                  <span className="font-medium text-primary dark:text-light">{schedule.day}</span>
                  <span className="text-accent dark:text-secondary-light">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary/30 flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-primary dark:text-light" />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-light">Calendar</h3>
            </div>

            <div className="calendar-wrapper">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full bg-white dark:bg-primary rounded-lg shadow-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4354889741897!2d109.0524444!3d-7.4169444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e8b7b477777%3A0x3027a76e352bc0!2sBinangun%2C%20Bantarsari%2C%20Cilacap%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1709840000000!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;