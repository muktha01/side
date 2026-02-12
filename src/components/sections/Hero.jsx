'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-3 sm:px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-96 md:h-96 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-40 left-4 md:left-20 w-12 h-12 md:w-16 md:h-16 border border-cyan-400/30 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 md:mb-6 px-1"
          >
            <span className="text-white">Software Development Company for</span>
            <br />
            <span className="gradient-text">Scalable & Innovative Solutions</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-sm sm:text-lg md:text-xl text-gray-light mb-5 md:mb-8 leading-relaxed px-2"
            style={{ textAlign: 'center', width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '0.5rem', maxWidth: '95%' }}
          >
            From Vision To Execution, Accelerated With SDEV Solutions
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={staggerItem}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0EA5E9] text-white font-semibold text-sm md:text-base hover:bg-[#0284C7] transition-colors duration-200 shadow-lg shadow-[#0EA5E9]/20"
              style={{ 
                paddingLeft: '1.25rem', 
                paddingRight: '1.25rem', 
                paddingTop: '0.5rem', 
                paddingBottom: '0.5rem',
                borderRadius: '0.375rem'
              }}
            >
              Start Project
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerItem}
            className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-4xl mx-auto px-2"
          >
            {[
              { number: '11+', label: 'Years' },
              { number: '250+', label: 'Experts' },
              { number: '4+', label: 'Global Offices' },
              { number: '500+', label: 'Projects Delivered' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center py-3 md:py-0"
              >
                <div className="text-xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-sm md:text-base text-gray-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
