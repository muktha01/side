'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import { staggerContainer } from '@/lib/animationVariants';

export default function PricingSection({ plans }) {
  const [billingCycle, setBillingCycle] = useState('month');

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text-premium">Pricing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Choose a plan that fits your needs. All plans include our premium support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 glass-card p-2 rounded-full">
            <button
              onClick={() => setBillingCycle('month')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'month'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 px-2 py-1 bg-emerald-500 text-white text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              featured={plan.popular}
              billingCycle={billingCycle}
              index={index}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">
            All plans include SSL certificate, hosting setup, and basic SEO optimization
          </p>
          <p className="text-white/50 text-sm">
            Need a custom solution? <a href="/contact" className="text-cyan-500 hover:text-cyan-400 underline">Contact us</a> for a personalized quote
          </p>
        </motion.div>
      </div>
    </section>
  );
}
