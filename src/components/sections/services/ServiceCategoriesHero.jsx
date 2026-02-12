'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { heroAnimations, floatAnimation } from '@/lib/animationVariants';

export default function ServiceCategoriesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          variants={floatAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"
          variants={floatAnimation}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        variants={heroAnimations.container}
        initial="hidden"
        animate="visible"
      >
        {/* Breadcrumb */}
        <motion.nav variants={heroAnimations.subtitle} className="mb-8">
          <ol className="flex items-center justify-center gap-2 text-sm text-white/50">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-white">Services</li>
          </ol>
        </motion.nav>

        {/* Main Heading */}
        <motion.h1
          variants={heroAnimations.title}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Transform Your Business with{' '}
          <span className="gradient-text-premium">Expert Solutions</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={heroAnimations.subtitle}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          From AI-powered automation to digital marketing — we deliver results that drive growth and success
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={heroAnimations.cta}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="primary" size="lg" className="min-w-[200px]">
            Explore Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
          <Button variant="ghost" size="lg" href="/contact" className="min-w-[200px]">
            Book Free Consultation
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={heroAnimations.cta}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Expert Team' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
