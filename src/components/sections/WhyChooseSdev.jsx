'use client';

import { motion } from 'framer-motion';
import { 
  Clock, Shield, Users, Zap, Trophy, HeartHandshake, 
  Target, Lightbulb, HeadphonesIcon 
} from 'lucide-react';

export default function WhyChooseSdev() {
  const reasons = [
    {
      icon: Clock,
      title: '5+ Years Experience',
      description: 'Proven track record since 2020 with 200+ successful projects delivered across diverse industries'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '25+ skilled professionals specializing in development, design, marketing, and AI technologies'
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile methodology ensures quick turnaround times without compromising on quality'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security protocols and robust infrastructure for all our solutions'
    },
    {
      icon: Trophy,
      title: 'Award-Winning Quality',
      description: 'Recognized for excellence in digital innovation and customer satisfaction'
    },
    {
      icon: Target,
      title: 'Result-Driven Approach',
      description: 'Focus on measurable outcomes and ROI for every project we undertake'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technologies including AI, cloud, and automation for competitive advantage'
    },
    {
      icon: HeartHandshake,
      title: 'Client-Centric',
      description: 'Your success is our priority with personalized solutions tailored to your needs'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to keep your business running'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-400 font-semibold">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Businesses Trust{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sdev
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join 150+ Satisfied Clients Worldwide
            </h3>
            <p className="text-gray-300 mb-6">
              Experience the Sdev difference and transform your digital presence today
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
