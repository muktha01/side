'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WorldwidePresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Worldwide Presence</span>
            </h2>
            <p className="text-gray-light text-lg leading-relaxed mb-8">
              We are serving satisfied customers across the USA, Europe, United Kingdom, Australia, New Zealand, Singapore, and India.
            </p>

            {/* Office Locations */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">US Office</h4>
                  <p className="text-gray-light text-sm">
                    2048 W Grand Ave Ste B, #48 Chicago, Illinois 60612
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Mumbai Office</h4>
                  <p className="text-gray-light text-sm">
                    121, R Wing, River Bldg, UP Rd, Borivali West, Mumbai, Maharashtra 400092
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Pune Office</h4>
                  <p className="text-gray-light text-sm">
                    2nd Floor, Anarson House, Aadi, 22 Manohar Pukur Rd, KYC, Pune, Maharashtra 411006
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-dark-800 rounded-2xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Stylized world map representation */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Continents simplified paths */}
                  <path
                    d="M50,100 L150,80 L180,120 L160,140 L100,150 Z"
                    fill="currentColor"
                    className="text-gray-dark"
                  />
                  <path
                    d="M200,100 L280,110 L300,150 L270,180 L230,170 Z"
                    fill="currentColor"
                    className="text-gray-dark"
                  />
                  <path
                    d="M150,200 L200,190 L220,230 L180,250 Z"
                    fill="currentColor"
                    className="text-gray-dark"
                  />
                  <path
                    d="M80,250 L140,240 L150,280 L100,290 Z"
                    fill="currentColor"
                    className="text-gray-dark"
                  />
                </svg>
              </div>

              {/* Location markers */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"
              >
                <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-1/2 right-1/3 w-4 h-4 bg-primary rounded-full animate-pulse"
              >
                <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"
              >
                <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
              </motion.div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  x1="25%"
                  y1="33%"
                  x2="66%"
                  y2="50%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <motion.line
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  x1="66%"
                  y1="50%"
                  x2="75%"
                  y2="66%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center text */}
              <div className="text-center relative z-10">
                <h3 className="text-4xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-gray-light">Serving clients worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
