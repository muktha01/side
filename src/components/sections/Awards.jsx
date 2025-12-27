'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const certifications = [
  { name: 'Globally Certified Professionals', logo: '✓' },
  { name: 'ISO 27001:2022 Information Security Management System', logo: 'ISO' },
  { name: 'ISO 9001:2015 Quality Management System', logo: 'ISO' },
  { name: 'GDPR Compliance', logo: 'GDPR' },
  { name: 'SOC 2 Type 2 Compliance', logo: 'SOC' },
];

const awards = [
  { name: 'Clutch Fastest Growth 2024', logo: 'Clutch' },
  { name: 'NoCode Community Awards', logo: 'NoCode' },
  { name: 'Clutch Global Fall 2024', logo: 'Clutch' },
  { name: 'Clutch Champion Spring 2024', logo: 'Clutch' },
  { name: 'Clutch Global Spring 2024', logo: 'Clutch' },
  { name: 'GoodFirms', logo: 'GoodFirms' },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Certifications */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Certifications & <span className="gradient-text">Compliance</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-800 rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[140px]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary font-bold text-lg">
                  {cert.logo}
                </div>
                <p className="text-sm text-gray-light">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Awards & <span className="gradient-text">Recognitions</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-800 rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[140px]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-xs text-gray-light font-medium">{award.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
