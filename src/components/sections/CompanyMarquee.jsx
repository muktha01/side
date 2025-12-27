'use client';

import { motion } from 'framer-motion';

export default function CompanyMarquee() {
  const companies = [
    { name: 'Accenture', logo: '/placeholder-logo.png' },
    { name: 'Bajaj', logo: '/placeholder-logo.png' },
    { name: 'Capgemini', logo: '/placeholder-logo.png' },
    { name: 'Cognizant', logo: '/placeholder-logo.png' },
    { name: 'Google', logo: '/placeholder-logo.png' },
    { name: 'IBM', logo: '/placeholder-logo.png' },
    { name: 'Dell', logo: '/placeholder-logo.png' },
    { name: 'Honeywell', logo: '/placeholder-logo.png' },
    { name: 'Deloitte', logo: '/placeholder-logo.png' },
    { name: 'Infosys', logo: '/placeholder-logo.png' },
    { name: 'Toyota', logo: '/placeholder-logo.png' },
    { name: 'HCL', logo: '/placeholder-logo.png' },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mb-20">
        <div className="text-center mb-24">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Land Your Dream Job in Top Hiring Companies
          </motion.h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 pr-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[200px] h-24 glass rounded-lg px-8"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  <div className="text-white/60 text-center font-semibold">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
