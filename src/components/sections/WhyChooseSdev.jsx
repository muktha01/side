'use client';

import { motion } from 'framer-motion';
import { 
  BadgeCheck, Smartphone, Globe, TrendingUp, HeartHandshake, 
  IndianRupee, LifeBuoy, Eye, Users
} from 'lucide-react';

export default function WhyChooseSdev() {
  const reasons = [
    {
      icon: BadgeCheck,
      title: 'Proven Portfolio',
      description: '4+ live Android apps on Play Store, 8+ business websites and 3+ e-commerce stores — portfolio valued ₹15L–₹25L'
    },
    {
      icon: Smartphone,
      title: '4+ Android Apps Live',
      description: 'Healthcare, education, service booking and digital record management apps — all deployed and active on Play Store'
    },
    {
      icon: Globe,
      title: 'Full Digital Ecosystem',
      description: 'Website + E-Commerce + Mobile App + Performance Marketing — all under one roof for complete digital growth'
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description: 'Premium quality solutions at pricing well below market standards — without compromising on design or functionality'
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: '16 posters + 4 videos + 2 campaigns + lead generation + ads setup & optimisation — ₹16,000/month. Ad budget separate'
    },
    {
      icon: Eye,
      title: 'Transparent Communication',
      description: 'Clear updates, honest timelines, and no hidden surprises — you always know exactly where your project stands'
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Partnership',
      description: 'We don\'t just deliver projects. We build lasting relationships focused on your sustained growth and success'
    },
    {
      icon: LifeBuoy,
      title: 'Lifetime Technical Support',
      description: 'Every client gets lifetime technical support — we remain your partner long after the project goes live'
    },
    {
      icon: Users,
      title: 'Special Value Bundles',
      description: 'App clients get a FREE website + 1 month marketing + 3 months server maintenance. Website clients get free marketing too'
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
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
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-400 font-semibold text-sm md:text-base">Why Choose Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Why Clients Trust{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sdev In Tech
            </span>
          </h2>

          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Proven portfolio. Affordable pricing. Transparent communication. Long-term partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>

              <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-3 leading-tight">{reason.title}</h3>
              <p className="text-xs md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-500/30">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              🎁 Special Offer — App + Website + Marketing Bundle
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 px-4">
              Get a FREE Business Website, 1 Month Digital Marketing & 3 Months Server Maintenance with every App project. We build your full digital ecosystem.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-sm md:text-base shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300"
            >
              Claim Your Bundle
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
