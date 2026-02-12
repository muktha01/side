'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ClientLogoMarquee({ logos, title = 'Trusted by Industry Leaders' }) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text-premium mb-2">
            {title}
          </h2>
          <p className="text-white/60">
            Join 500+ companies that trust us with their digital transformation
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Marquee */}
          <motion.div
            ref={marqueeRef}
            className="flex gap-12"
            animate={{
              x: isPaused ? 0 : [0, -50 + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 flex items-center justify-center group"
                style={{ width: '160px', height: '80px' }}
              >
                {logo.image ? (
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <div className="text-white/40 group-hover:text-white/80 font-bold text-xl transition-colors duration-300">
                    {logo.name}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
              500+
            </div>
            <div className="text-white/60 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
              1200+
            </div>
            <div className="text-white/60 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
              98%
            </div>
            <div className="text-white/60 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
              15+
            </div>
            <div className="text-white/60 text-sm">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
