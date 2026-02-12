'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { staggerContainer, cardAnimations } from '@/lib/animationVariants';

export default function ServiceShowcase({ services, categoryName }) {
  const pathname = usePathname();
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text-premium">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choose the perfect service for your project needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <Link 
              key={service.id}
              href={`${pathname}/${service.id}`}
              className="block h-full"
            >
              <motion.div
                variants={cardAnimations.card}
                className={`glass-card glow-border p-8 relative overflow-hidden group h-full cursor-pointer ${
                  service.popular ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-6 right-6">
                    <Badge variant="premium" size="sm">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
                </div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold gradient-text-premium">
                    ₹{service.startingPrice}
                  </span>
                  <span className="text-white/50">starting from</span>
                </div>

                {/* CTA */}
                <div 
                  className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 w-full px-6 py-3 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
