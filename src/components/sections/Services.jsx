'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: '01',
    title: 'Website & App Development',
    description: 'Build powerful web and mobile applications. From responsive websites to native iOS/Android apps and cross-platform solutions.',
    image: '/images/home/mobile.svg',
    bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-purple-500/5',
    color: 'cyan',
    size: 'large',
    link: '/services/website-app-development',
  },
  {
    id: '02',
    title: 'Digital Marketing',
    description: 'Amplify your reach and maximize ROI with data-driven digital marketing strategies across all channels.',
    image: '/images/home/data.svg',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-violet-500/5',
    color: 'blue',
    size: 'large',
    link: '/services/digital-marketing',
  },
  {
    id: '03',
    title: 'AI Tools',
    description: 'Harness artificial intelligence to transform data into intelligent insights that drive decision-making and innovation.',
    image: '/images/home/ai.svg',
    bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/5',
    color: 'violet',
    size: 'medium',
    link: '/services/ai',
  },
  {
    id: '04',
    title: 'Recruitment & Staffing Solutions',
    description: 'Find the perfect talent fast. Comprehensive recruitment services to build your dream team efficiently.',
    image: '/images/home/backend.svg',
    bgImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    gradient: 'from-emerald-500/20 via-green-500/10 to-teal-500/5',
    color: 'emerald',
    size: 'medium',
    link: '/services/recruitment-staffing',
  },
  {
    id: '05',
    title: 'Loans',
    description: 'Quick approvals and trusted financial solutions. Get the funding you need with flexible loan options.',
    image: '/images/home/data.svg',
    bgImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/5',
    color: 'emerald',
    size: 'medium',
    link: '/services/loans',
  },
  {
    id: '06',
    title: 'Real Estate',
    description: 'From property search to investment solutions. Navigate the real estate market with expert guidance.',
    image: '/images/home/frontend.svg',
    bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    gradient: 'from-orange-500/20 via-amber-500/10 to-yellow-500/5',
    color: 'orange',
    size: 'medium',
    link: '/services/real-estate',
  },
  {
    id: '07',
    title: 'Training',
    description: 'Learn, grow, and succeed. Professional training programs to upskill your team and advance careers.',
    image: '/images/home/uiux.svg',
    bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    gradient: 'from-pink-500/20 via-rose-500/10 to-red-500/5',
    color: 'pink',
    size: 'medium',
    link: '/services/training',
  },
  {
    id: '08',
    title: 'Media Production',
    description: 'Create stunning visual content that captivates. Video production, photography, and multimedia services.',
    image: '/images/home/cloud.svg',
    bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    gradient: 'from-purple-500/20 via-indigo-500/10 to-blue-500/5',
    color: 'purple',
    size: 'medium',
    link: '/services/media-production',
  },
];

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    cyan: 'from-cyan-500 to-blue-500',
    purple: 'from-purple-500 to-pink-500',
    pink: 'from-pink-500 to-rose-500',
    emerald: 'from-emerald-500 to-teal-500',
    blue: 'from-blue-500 to-indigo-500',
    violet: 'from-violet-500 to-purple-500',
    sky: 'from-sky-500 to-cyan-500',
    orange: 'from-orange-500 to-amber-500',
  };

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-1',
    medium: 'md:col-span-1 md:row-span-1',
  };

  return (
    <Link href={service.link} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-xl ${sizeClasses[service.size]} cursor-pointer h-full min-h-[280px] md:min-h-[360px] transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10`}
      >
      {/* Background Image */}
      {service.bgImage && (
        <div className="absolute inset-0">
          <Image
            src={service.bgImage}
            alt={service.title}
            fill
            className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        </div>
      )}

      {/* Gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        initial={false}
      />

      {/* Animated border glow */}
      <motion.div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${colorClasses[service.color]} opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-500`}
        initial={false}
      />

      {/* Content */}
      <div className="relative h-full p-4 md:p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3 md:mb-5">
          <div className="flex-1 pr-2">
            <span className="text-[10px] md:text-xs font-mono text-white/50 mb-1 md:mb-2 block tracking-wider">{service.id}</span>
            <h3 className="text-base md:text-2xl lg:text-3xl font-bold text-white leading-tight">
              {service.title}
            </h3>
          </div>
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[service.color]} opacity-30 rounded-2xl blur-xl group-hover:opacity-50 transition-opacity`} />
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-contain p-2 drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Decorative gradient bar */}
        <div className={`h-0.5 md:h-1 w-12 md:w-16 rounded-full bg-gradient-to-r ${colorClasses[service.color]} mb-3 md:mb-5 opacity-70 group-hover:opacity-100 group-hover:w-20 md:group-hover:w-24 transition-all duration-500`} />

        {/* Description */}
        <p className="text-xs md:text-base text-gray-300 leading-relaxed mb-auto line-clamp-3 md:line-clamp-none">
          {service.description}
        </p>

        {/* CTA Button */}
        <div className="mt-4 md:mt-6 pt-3 md:pt-5 border-t border-white/5">
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            className="flex items-center gap-2 text-white/70 group-hover:text-cyan-400 transition-colors duration-300"
          >
            <span className="text-xs md:text-sm font-semibold">Explore Services</span>
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="relative bg-black py-12 md:py-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-3">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1.5 text-xs md:text-sm font-semibold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-3 md:mb-4"
          >
            What We Offer
          </motion.span>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              for Your Business
            </span>
          </h2>
          
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            From ideation to execution, we deliver cutting-edge digital solutions that transform businesses and drive growth.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Services
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
