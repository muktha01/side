'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animationVariants';

export default function ServiceFeatures({ features }) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What's <span className="gradient-text-premium">Included</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need for a successful project
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card glow-border p-8 group"
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon && React.createElement(feature.icon, { 
                  className: "w-12 h-12 text-cyan-400",
                  strokeWidth: 1.5 
                })}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Details List */}
              {feature.details && (
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {/* Hover Gradient Effect */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
