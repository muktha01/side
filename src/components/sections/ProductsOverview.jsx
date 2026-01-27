'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, Mail, MapPin, Briefcase, ArrowRight } from 'lucide-react';

export default function ProductsOverview() {
  const products = [
    {
      icon: Briefcase,
      name: 'HRM System',
      description: 'Complete employee management solution with attendance, payroll, and performance tracking',
      price: '₹3,999/mo',
      color: 'from-blue-500 to-cyan-600',
      features: ['Employee Database', 'Attendance Tracking', 'Payroll Management', 'Leave Management']
    },
    {
      icon: Users,
      name: 'CRM System',
      description: 'Powerful customer relationship management to grow your business and boost sales',
      price: '₹6,499/mo',
      color: 'from-purple-500 to-pink-600',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Email Integration']
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp Bulk Messaging',
      description: 'Send unlimited bulk messages to your customers via WhatsApp Business API',
      price: '₹2,999/mo',
      color: 'from-green-500 to-emerald-600',
      features: ['Unlimited Messages', 'Contact Management', 'Message Templates', 'Analytics Dashboard']
    },
    {
      icon: Mail,
      name: 'Email Bulk Messaging',
      description: 'Professional email marketing platform with advanced automation and tracking',
      price: '₹799/mo',
      color: 'from-orange-500 to-red-600',
      features: ['Email Campaigns', 'Automation', 'A/B Testing', 'Delivery Reports']
    },
    {
      icon: MapPin,
      name: 'Google Map Data Extractor',
      description: 'Extract business data from Google Maps for lead generation and market research',
      price: '₹4,999/mo',
      color: 'from-indigo-500 to-purple-600',
      features: ['Data Extraction', 'Export to Excel', 'Filter by Category', 'Bulk Processing']
    }
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-400 font-semibold text-sm md:text-base">Our Products</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Ready-to-Use Digital{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Powerful SaaS solutions designed to streamline your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${product.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                <product.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 min-h-[40px] md:min-h-[48px] line-clamp-2 md:line-clamp-none">{product.description}</p>

              <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-3 md:mb-4">{product.price}</div>

              <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs md:text-sm">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center px-4 py-2 md:py-2.5 bg-gradient-to-r ${product.color} text-white rounded-lg font-semibold text-xs md:text-sm transition-all duration-300`}
              >
                View Details
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-sm md:text-base shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300"
          >
            Explore All Products
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
