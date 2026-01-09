'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutSnapshot() {
  const highlights = [
    {
      icon: Rocket,
      number: '5+',
      label: 'Years of Excellence',
      description: 'Since 2020'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Projects Delivered',
      description: 'Across multiple industries'
    },
    {
      icon: Award,
      number: '150+',
      label: 'Happy Clients',
      description: 'Worldwide'
    },
    {
      icon: TrendingUp,
      number: '25+',
      label: 'Expert Team',
      description: 'Dedicated professionals'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <span className="text-cyan-400 font-semibold">About Sdev</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building Digital Solutions Since{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                2020
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Sdev is a dynamic digital agency specializing in innovative web and mobile solutions, 
              cutting-edge AI tools, comprehensive digital marketing strategies, professional training programs, 
              and flexible financial solutions.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our mission is to empower businesses and individuals with technology-driven solutions 
              that transform ideas into reality. From startups to established enterprises, we deliver 
              excellence in every project we undertake.
            </p>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300"
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
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{item.number}</div>
                <div className="text-sm font-semibold text-cyan-400 mb-1">{item.label}</div>
                <div className="text-xs text-gray-400">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
