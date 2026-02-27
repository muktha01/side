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
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">Premium Digital Transformation & Performance Marketing</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 md:mb-6 px-1"
          >
            <span className="text-white">Build Your Complete</span>
            <br />
            <span className="gradient-text">Digital Ecosystem</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-sm sm:text-lg md:text-xl text-gray-light mb-5 md:mb-8 leading-relaxed px-2"
            style={{ textAlign: 'center', width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '0.5rem', maxWidth: '95%' }}
          >
            Websites · Mobile Apps · ROI-Driven Digital Marketing — Designed to Generate Growth, Visibility & Long-Term Success
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm md:text-base rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-3.5 bg-white/5 border border-white/20 text-white font-semibold text-sm md:text-base rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={staggerItem}
            className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-4xl mx-auto px-2"
          >
            {[
              { number: '4+', label: 'Android Apps on Play Store' },
              { number: '8+', label: 'Business Websites' },
              { number: '3+', label: 'E-Commerce Stores' },
              { number: '₹16K', label: 'Marketing / Month' },
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


    </section>
  );
}
