'use client';

import { motion } from 'framer-motion';
import { fadeInStagger } from '@/lib/animationVariants';
import { CheckCircle, Star, Briefcase, LifeBuoy, Trophy, Lock, Shield, Award } from 'lucide-react';

const trustData = {
  stats: [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Team Experts', icon: Briefcase },
    { number: '24/7', label: 'Support Available', icon: LifeBuoy },
  ],
  certifications: [
    { name: 'ISO Certified', icon: Trophy },
    { name: 'SSL Secured', icon: Lock },
    { name: 'Data Protected', icon: Shield },
    { name: 'Award Winner', icon: Award },
  ]
};

export default function TrustIndicators() {
  return (
    <section className="section-padding bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <motion.div
          variants={fadeInStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
        >
          {trustData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInStagger.item}
              className="glass-card p-6 md:p-8 text-center rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-10 h-10 text-cyan-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Trusted & <span className="gradient-text-premium">Certified</span>
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustData.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <cert.icon className="w-10 h-10 text-cyan-500" />
                <span className="text-sm text-white/70">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
