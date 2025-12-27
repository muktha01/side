'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
    {
      skillCentral: "Full-time corporate simulation",
      traditional: "Part-time training sessions"
    },
    {
      skillCentral: "AI integration hands-on experience",
      traditional: "Theoretical AI knowledge"
    },
    {
      skillCentral: "Potential for continued employment",
      traditional: "Uncertain job prospects"
    },
    {
      skillCentral: "Focus on in-demand skills",
      traditional: "Generic training curriculum"
    }
  ];

  return (
    <section className="section-padding bg-dark-900/50 relative overflow-hidden" ref={ref}>
      <div className="container pt-8">
        <div className="row">
          <div className="col-lg-4">
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h6 className="text-sm text-primary mb-4">Elevating the Learning Experience</h6>
              <h2 className="text-4xl font-bold mb-4">
                Innovative, Effective, Accessible.
              </h2>
              <p className="text-sm text-white/60">
                Why SkillCentral's Program Outshines Traditional Institutes.
              </p>
            </motion.div>
          </div>
          
          <div className="col-lg-7 offset-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Header Row */}
              <div className="border-t border-white/10 pt-8 pb-8">
                <div className="row">
                  <div className="col-lg-6 border-r border-white/10 pr-6">
                    <h6 className="text-xl font-bold text-primary">
                      SkillCentral's Transformative Learning Approach
                    </h6>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                    <h6 className="text-xl font-bold text-white/60">
                      Traditional Institutes' Limitations
                    </h6>
                  </div>
                </div>
              </div>

              {/* Comparison Rows */}
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  className="border-t border-white/10 pt-8 pb-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="flex items-start gap-3">
                        <svg 
                          className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <p className="text-white font-medium">{item.skillCentral}</p>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <div className="flex items-start gap-3">
                        <svg 
                          className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M6 18L18 6M6 6l12 12" 
                          />
                        </svg>
                        <p className="text-white/60">{item.traditional}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg 
          viewBox="0 0 500 250" 
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
            fill="currentColor"
            className="text-dark-950"
          />
        </svg>
      </div>
    </section>
  );
}
