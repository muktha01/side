'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Worldwide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const locations = [
    { name: 'USA', position: { top: '40%', left: '20%' } },
    { name: 'India', position: { top: '45%', left: '65%' } },
    { name: 'Singapore', position: { top: '55%', left: '70%' } },
  ];

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Worldwide</span>
              <br />
              Presence
            </h2>
            <p className="text-gray-light text-lg leading-relaxed">
              We are serving satisfied customers across the USA, Europe, United Kingdom, Australia, New Zealand, Singapore, and India.
            </p>
          </div>

          {/* Right - World Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] bg-dark-800 rounded-2xl border border-white/10 p-8"
          >
            {/* World Map Visualization - Simplified representation */}
            <div className="relative w-full h-full">
              {/* Map Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div key={i} className="border border-primary/20" />
                  ))}
                </div>
              </div>

              {/* Continents - Abstract shapes */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 400"
                fill="none"
              >
                {/* Abstract continent shapes */}
                <path
                  d="M100 150 L180 140 L200 180 L160 200 L100 190 Z"
                  fill="rgba(14, 165, 233, 0.1)"
                  stroke="rgba(14, 165, 233, 0.3)"
                  strokeWidth="1"
                />
                <path
                  d="M500 180 L600 170 L620 220 L580 240 L520 230 Z"
                  fill="rgba(14, 165, 233, 0.1)"
                  stroke="rgba(14, 165, 233, 0.3)"
                  strokeWidth="1"
                />
                <path
                  d="M550 250 L600 240 L610 280 L570 290 Z"
                  fill="rgba(14, 165, 233, 0.1)"
                  stroke="rgba(14, 165, 233, 0.3)"
                  strokeWidth="1"
                />
              </svg>

              {/* Location Markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="absolute"
                  style={location.position}
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 w-8 h-8 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg shadow-primary/50 -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-dark-900 px-3 py-1 rounded-full text-xs text-white whitespace-nowrap border border-primary/30">
                      {location.name}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 0.3 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 2, delay: 1 }}
                  d="M 160 160 Q 400 100 520 180"
                  stroke="rgba(14, 165, 233, 0.5)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
