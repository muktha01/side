'use client';

import { motion } from 'framer-motion';
import { scrollAnimations } from '@/lib/animationVariants';

export default function ProcessTimeline({ steps }) {
  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text-premium">Process</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A proven workflow that delivers exceptional results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Connecting Line */}
                {!isLast && (
                  <motion.div
                    className="absolute top-16 left-8 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent md:left-12"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    style={{ transformOrigin: 'top' }}
                  />
                )}
                
                <div className="flex gap-6 md:gap-8 pb-16">
                  {/* Step Number */}
                  <motion.div
                    className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-lg shadow-cyan-500/50"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-30 blur-xl" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="glass-card p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/60 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                        <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-white/70">{step.duration}</span>
                      </div>
                      
                      {/* Deliverables */}
                      {step.deliverables && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <p className="text-sm font-semibold text-white/80 mb-3">
                            Deliverables:
                          </p>
                          <ul className="space-y-2">
                            {step.deliverables.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Total Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 glass-card p-6 max-w-2xl mx-auto"
        >
          <p className="text-white/70">
            <span className="font-semibold text-white">Total estimated timeline:</span> 8-16 weeks
          </p>
          <p className="text-sm text-white/50 mt-2">
            Timeline may vary based on project complexity and requirements
          </p>
        </motion.div>
      </div>
    </section>
  );
}
