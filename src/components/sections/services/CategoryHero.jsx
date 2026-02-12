'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { heroAnimations, floatAnimation } from '@/lib/animationVariants';
import { Check, Star, Rocket } from 'lucide-react';

export default function CategoryHero({ category }) {
  const { title, description, icon, benefits } = category;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          variants={floatAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={heroAnimations.container}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.nav variants={heroAnimations.subtitle} className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <a href="/" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white">{title}</li>
              </ol>
            </motion.nav>

            {/* Icon Badge */}
            <motion.div variants={heroAnimations.subtitle} className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4">
                {icon && React.createElement(icon, { className: "w-10 h-10 text-cyan-400", strokeWidth: 1.5 })}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={heroAnimations.title}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text-premium">{title}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroAnimations.subtitle}
              className="text-xl text-white/70 mb-8 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroAnimations.cta}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button variant="primary" size="lg" href="#services">
                View All Services
              </Button>
              <Button variant="ghost" size="lg" href="/contact">
                Get Custom Quote
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={heroAnimations.cta}
              className="flex flex-wrap gap-4"
            >
              <Badge variant="success" icon={Check}>
                500+ Projects
              </Badge>
              <Badge variant="success" icon={Star}>
                4.9/5 Rating
              </Badge>
              <Badge variant="success" icon={Rocket}>
                Fast Delivery
              </Badge>
            </motion.div>
          </motion.div>

          {/* Right Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              What You'll Get
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/80 leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
