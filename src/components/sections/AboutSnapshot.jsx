'use client';

import { motion } from 'framer-motion';
import { Rocket, Smartphone, Globe, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutSnapshot() {
  const highlights = [
    {
      icon: Smartphone,
      number: '4+',
      label: 'Android Apps on Play Store',
      description: 'Live on Google Play Store'
    },
    {
      icon: Globe,
      number: '8+',
      label: 'Business Websites Delivered',
      description: 'Across multiple industries'
    },
    {
      icon: TrendingUp,
      number: '3+',
      label: 'E-Commerce Stores Built',
      description: 'Grace Market, Ambo Retail & more'
    },
    {
      icon: CheckCircle,
      number: '₹25L',
      label: 'Portfolio Value',
      description: 'In market standard rates'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <span className="text-cyan-400 font-semibold text-sm md:text-base">About Sdev</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Your Complete{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Partner
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
              Sdev In Tech is a results-driven digital solutions company delivering end-to-end services in
              Website Development, E-Commerce Solutions, Mobile App Development, and Performance Marketing.
            </p>

            <p className="text-base md:text-lg text-gray-300 mb-5 md:mb-6 leading-relaxed">
              We build scalable digital products designed to enhance brand visibility, generate qualified leads,
              and increase business revenue — with a portfolio valued at over ₹15L–₹25L in market standards.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {['Proven Portfolio', 'Affordable Pricing', 'Transparent Communication', 'Lifetime Support'].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs md:text-sm font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  {badge}
                </span>
              ))}
            </div>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-sm md:text-base shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300"
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 md:gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/[0.02] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{item.number}</div>
                <div className="text-xs md:text-sm font-semibold text-cyan-400 mb-1">{item.label}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
