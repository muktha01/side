'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Student Experience Platform</span>
          </h2>
          <p className="text-gray-light text-lg max-w-4xl mx-auto leading-relaxed">
            Highlands Community Charter & Technical School is California&apos;s second-largest charter school, committed to
            inclusivity and educational equity, serving diverse communities and bridging gaps for all students.
          </p>
        </motion.div>

        {/* Placeholder for case study visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-dark-800 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="aspect-video bg-dark-700 rounded-2xl flex items-center justify-center text-gray-dark">
            {/* This would contain the actual case study image/mockup */}
            <div className="text-center">
              <svg
                className="w-24 h-24 mx-auto mb-4 text-primary/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-dark">Case Study Visual</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
