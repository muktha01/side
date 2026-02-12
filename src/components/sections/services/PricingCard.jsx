'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { fadeInStagger } from '@/lib/animationVariants';
import { DollarSign } from 'lucide-react';

export default function PricingCard({ 
  plan, 
  featured = false,
  billingCycle = 'month',
  index = 0 
}) {
  const { 
    name, 
    price, 
    priceAnnual,
    savings,
    description, 
    features, 
    cta = 'Get Started',
    popular = false 
  } = plan;

  const displayPrice = billingCycle === 'annual' ? priceAnnual : price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: featured ? 0 : -8 }}
      className={`glass-card relative overflow-hidden ${
        featured 
          ? 'border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 lg:-translate-y-4' 
          : 'border border-white/10'
      }`}
    >
      {/* Featured Accent Bar */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />
      )}
      
      <div className="p-8 md:p-10">
        {/* Plan Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white">{name}</h3>
          {(featured || popular) && (
            <Badge variant="premium" size="sm">
              {popular ? 'MOST POPULAR' : 'BEST VALUE'}
            </Badge>
          )}
        </div>
        
        {/* Price */}
        <div className="mb-8">
          <motion.div 
            className="flex items-baseline gap-2 mb-2"
            key={billingCycle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-5xl md:text-6xl font-bold gradient-text-premium">
              ₹{displayPrice}
            </span>
            <span className="text-white/50 text-lg">/{billingCycle}</span>
          </motion.div>
          {billingCycle === 'annual' && savings && (
            <motion.p 
              className="text-sm text-emerald-500 font-medium flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <DollarSign className="w-4 h-4" /> Save ₹{savings} annually
            </motion.p>
          )}
        </div>
        
        {/* Description */}
        <p className="text-white/60 mb-8 leading-relaxed">
          {description}
        </p>
        
        {/* Features List */}
        <motion.ul 
          variants={fadeInStagger.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mb-10"
        >
          {features.map((feature, i) => (
            <motion.li
              key={i}
              variants={fadeInStagger.item}
              className="flex items-start gap-3"
            >
              <svg 
                className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={`text-sm md:text-base ${
                feature.includes('(limited)') ? 'text-white/40' : 'text-white/80'
              }`}>
                {feature}
              </span>
            </motion.li>
          ))}
        </motion.ul>
        
        {/* CTA Button */}
        <Button
          variant={featured ? 'primary' : 'secondary'}
          size="lg"
          className="w-full"
          href="/contact"
        >
          {cta}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>

      {/* Decorative Elements */}
      {featured && (
        <>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
        </>
      )}
    </motion.div>
  );
}
