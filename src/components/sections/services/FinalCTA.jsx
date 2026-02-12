'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { heroAnimations } from '@/lib/animationVariants';
import { Check } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-emerald-500/10" />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
      </div>

      <motion.div
        variants={heroAnimations.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            variants={heroAnimations.subtitle}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-8 shadow-2xl shadow-cyan-500/30"
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={heroAnimations.title}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ready to Start Your{' '}
            <span className="gradient-text-premium">Project?</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={heroAnimations.subtitle}
            className="text-xl md:text-2xl text-white/70 mb-8"
          >
            Let's build something amazing together. Get started with a free consultation.
          </motion.p>

          {/* Trust Points */}
          <motion.div
            variants={heroAnimations.cta}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            {[
              { icon: Check, text: '30-minute discovery call' },
              { icon: Check, text: 'No commitment required' },
              { icon: Check, text: 'Free project estimate' },
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <point.icon className="w-4 h-4 text-emerald-500" />
                <span className="text-sm md:text-base">{point.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={heroAnimations.cta}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button variant="primary" size="lg" href="/contact" className="min-w-[250px]">
              Schedule Consultation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href="/contact" className="min-w-[250px]">
              Download Brochure
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={heroAnimations.cta}
            className="flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-cyan-500 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:hello@sdevsolutions.com" className="flex items-center gap-2 hover:text-cyan-500 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hello@sdevsolutions.com</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
