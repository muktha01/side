'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { cardAnimations, rotateHover } from '@/lib/animationVariants';

export default function ServiceCategoryCard({ category, index }) {
  const { id, title, description, icon, servicesCount, gradient, features, href } = category;

  return (
    <motion.div
      variants={cardAnimations.card}
      whileHover={cardAnimations.hover}
      whileTap={cardAnimations.tap}
      className="glass-card glow-border group cursor-pointer p-8 md:p-12 relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 ${gradient || 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10'}`} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className="w-16 h-16 mb-6 relative"
          variants={rotateHover}
          whileHover="hover"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-xl" />
          <div className="relative w-full h-full flex items-center justify-center text-4xl">
            {icon && React.createElement(icon, { 
              className: "w-12 h-12 text-cyan-400",
              strokeWidth: 1.5 
            })}
          </div>
        </motion.div>
        
        {/* Badge */}
        <Badge variant="primary" size="sm" className="mb-4">
          {servicesCount} Services
        </Badge>
        
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-premium">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-white/60 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Key Features */}
        {features && features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <motion.li 
                key={i}
                className="flex items-center gap-3 text-sm text-white/70"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <svg 
                  className="w-5 h-5 text-emerald-500 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        )}
        
        {/* CTA */}
        <Link href={href}>
          <motion.button
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Services
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </Link>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
    </motion.div>
  );
}
