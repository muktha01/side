'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ClientLogoMarquee({ logos, title = 'Our Clients & Projects' }) {
  const [isPaused, setIsPaused] = useState(false);

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
            Real projects delivered for real businesses across India
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

          {/* Marquee using CSS animation */}
          <div
            className="flex gap-8 overflow-hidden"
            style={{ maskImage: 'none' }}
          >
            <div
              className="flex gap-8 flex-shrink-0"
              style={{
                animation: isPaused ? 'none' : 'marquee 30s linear infinite',
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                  style={{ minWidth: '160px', height: '64px' }}
                >
                  <span className="text-white/50 group-hover:text-white font-semibold text-sm whitespace-nowrap transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
              13+
            </div>
            <div className="text-white/60 text-sm">Live Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
              4+
            </div>
            <div className="text-white/60 text-sm">Android Apps on Play Store</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
              ₹15L+
            </div>
            <div className="text-white/60 text-sm">Portfolio Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
              100%
            </div>
            <div className="text-white/60 text-sm">Lifetime Support</div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
