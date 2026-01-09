'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate, AnimatePresence } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [pricingToggle, setPricingToggle] = useState('monthly');
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Counter animations
  useEffect(() => {
    const controls1 = animate(0, 10000, {
      duration: 2,
      onUpdate: (v) => setUserCount(Math.floor(v))
    });
    const controls2 = animate(0, 5000, {
      duration: 2,
      onUpdate: (v) => setProjectCount(Math.floor(v))
    });
    const controls3 = animate(0, 45, {
      duration: 2,
      onUpdate: (v) => setCountriesCount(Math.floor(v))
    });
    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const products = [
    {
      id: 'hrm',
      name: 'HRM System',
      tagline: 'Complete Human Resource Management',
      description: 'Streamline your HR operations with our all-in-one solution for employee management, payroll, and performance tracking.',
      icon: '👥',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      category: 'HR',
      features: [
        'Employee Database Management',
        'Automated Payroll Processing',
        'Time & Attendance Tracking',
        'Performance Review System'
      ],
      price: { monthly: 3999, yearly: 38999 },
      popular: false,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80'
    },
    {
      id: 'crm',
      name: 'CRM Platform',
      tagline: 'Supercharge Your Sales Pipeline',
      description: 'Manage leads, track deals, and grow your business with intelligent customer relationship management.',
      icon: '💼',
      gradient: 'from-[#0EA5E9] to-[#06B6D4]',
      category: 'Sales',
      features: [
        'Lead & Contact Management',
        'Sales Pipeline Automation',
        'Email Integration',
        'Advanced Analytics Dashboard'
      ],
      price: { monthly: 6499, yearly: 62999 },
      popular: true,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Bulk Messaging',
      tagline: 'Reach Thousands Instantly',
      description: 'Send personalized bulk messages, automate campaigns, and engage customers directly on WhatsApp.',
      icon: '💬',
      gradient: 'from-[#10B981] to-[#059669]',
      category: 'Marketing',
      features: [
        'Bulk Message Campaigns',
        'Template & Personalization',
        'Contact Segmentation',
        'Real-time Analytics'
      ],
      price: { monthly: 2999, yearly: 29999 },
      popular: false,
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80'
    },
    {
      id: 'google-extractor',
      name: 'Google Data Extractor',
      tagline: 'Mine Business Intelligence',
      description: 'Extract valuable business data from Google Maps, Search, and reviews for lead generation and market research.',
      icon: '🔍',
      gradient: 'from-[#F59E0B] to-[#EF4444]',
      category: 'Data',
      features: [
        'Google Maps Scraping',
        'Business Contact Extraction',
        'Review & Rating Analysis',
        'Export to CSV/Excel'
      ],
      price: { monthly: 4999, yearly: 48999 },
      popular: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      id: 'email',
      name: 'Email Bulk Messaging',
      tagline: 'Professional Email Campaigns',
      description: 'Create, send, and track professional email campaigns with our easy-to-use bulk email marketing solution.',
      icon: '📧',
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
      category: 'Marketing',
      features: [
        'Campaign Management',
        'Drag & Drop Email Builder',
        'Template Library',
        'Analytics & Open Rates'
      ],
      price: { monthly: 799, yearly: 7999 },
      popular: false,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80'
    }
  ];

  const categories = ['All', 'Sales', 'HR', 'Marketing', 'Data'];
  
  const filteredProducts = filterCategory === 'All' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Tesla', 'Uber'
  ];

  const problems = [
    {
      icon: '⏰',
      title: 'Wasting Time on Manual Tasks',
      description: 'Stop spending hours on repetitive work',
      stat: '40hrs/week saved'
    },
    {
      icon: '📊',
      title: 'Missing Important Insights',
      description: 'Get real-time data to make better decisions',
      stat: '10x better insights'
    },
    {
      icon: '💸',
      title: 'Losing Money to Inefficiency',
      description: 'Reduce operational costs significantly',
      stat: '60% cost reduction'
    },
    {
      icon: '🤝',
      title: 'Poor Customer Experience',
      description: 'Deliver exceptional service every time',
      stat: '95% satisfaction'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Floating Product Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="absolute text-6xl opacity-20"
              style={{
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {product.icon}
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-[#0EA5E9]/20 to-[#8B5CF6]/20 border border-[#0EA5E9]/30 rounded-full text-sm font-medium">
                🚀 Trusted by 500+ businesses worldwide
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Powerful Solutions for{' '}
              <span className="bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your business with our suite of intelligent software solutions. 
              Increase productivity, reduce costs, and scale faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#0EA5E9]/30 hover:shadow-xl hover:shadow-[#0EA5E9]/40 transition-all"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                View Pricing
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span>4.8/5 rating (200+ reviews)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-lg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-white/60 text-sm mb-6">TRUSTED BY LEADING COMPANIES</p>
          </motion.div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-12"
            >
              {[...companies, ...companies].map((company, i) => (
                <div key={i} className="flex-shrink-0">
                  <span className="text-2xl font-bold text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Live Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent mb-2">
                {userCount.toLocaleString()}+
              </div>
              <div className="text-white/60 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent mb-2">
                {projectCount.toLocaleString()}+
              </div>
              <div className="text-white/60 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent mb-2">
                {countriesCount}+
              </div>
              <div className="text-white/60 text-sm">Countries</div>
            </div>
          </motion.div>

          {/* Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-white/80">
                <strong>Sarah from NYC</strong> just started a free trial
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-sm font-medium text-red-400 mb-4"
            >
              Common Business Challenges
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stop Struggling With{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                These Problems
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We help businesses overcome their biggest operational challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{problem.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{problem.description}</p>
                  <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-400">
                    {problem.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-2xl font-semibold mb-6">
              <span className="text-white/60">Sound familiar? </span>
              <span className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                We have the solution.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase Grid */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">Product Suite</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Choose the perfect solution for your business needs
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  pricingToggle={pricingToggle}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-black/95 to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Choose the plan that works best for you
            </p>

            {/* Pricing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-2"
            >
              <button
                onClick={() => setPricingToggle('monthly')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  pricingToggle === 'monthly'
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingToggle('yearly')}
                className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  pricingToggle === 'yearly'
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Yearly
                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${product.popular ? 'lg:scale-105' : ''}`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white text-sm font-bold rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className={`bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border ${
                  product.popular ? 'border-[#0EA5E9]/50' : 'border-white/10'
                } rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-300`}>
                  <div className={`text-5xl mb-4`}>{product.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{product.tagline}</p>
                  
                  <div className="mb-6">
                    <motion.div
                      key={pricingToggle}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-baseline gap-2"
                    >
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent">
                        ₹{pricingToggle === 'monthly' ? product.price.monthly.toLocaleString('en-IN') : Math.floor(product.price.yearly / 12).toLocaleString('en-IN')}
                      </span>
                      <span className="text-white/60">/month</span>
                    </motion.div>
                    {pricingToggle === 'yearly' && (
                      <p className="text-sm text-green-400 mt-2">
                        Billed ₹{product.price.yearly.toLocaleString('en-IN')} annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    product.popular
                      ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/30 hover:shadow-xl hover:shadow-[#0EA5E9]/40'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-white/60 mb-4">Need a custom enterprise solution?</p>
            <button className="text-[#0EA5E9] hover:text-[#06B6D4] font-semibold transition-colors">
              Contact Sales →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowExitIntent(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                ✕
              </button>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-3xl font-bold mb-4">Wait! Don't Leave Yet</h3>
                <p className="text-white/70 mb-6">
                  Get <span className="text-[#0EA5E9] font-bold">20% off</span> your first month when you start your free trial today
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/30 transition-all">
                    Claim My Discount
                  </button>
                  <button
                    onClick={() => setShowExitIntent(false)}
                    className="w-full text-white/60 hover:text-white text-sm transition-colors"
                  >
                    No thanks, I'll pay full price
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

// Product Card Component with 3D Tilt Effect
function ProductCard({ product, index, pricingToggle }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height;
    const y = (e.clientX - rect.left) / rect.width;
    setRotateX((x - 0.5) * 10);
    setRotateY((y - 0.5) * -10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      {product.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 -right-3 z-10"
        >
          <span className="px-3 py-1 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white text-xs font-bold rounded-full shadow-lg">
            POPULAR
          </span>
        </motion.div>
      )}

      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />
      
      <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
        <motion.div
          animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl mb-4"
        >
          {product.icon}
        </motion.div>

        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${product.gradient} bg-opacity-20 rounded-full text-xs font-medium mb-4 self-start`}>
          {product.category}
        </div>

        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#0EA5E9] transition-colors">
          {product.name}
        </h3>
        <p className="text-white/60 text-sm mb-4">{product.tagline}</p>
        <p className="text-white/50 text-sm mb-6 flex-grow">{product.description}</p>

        <div className="space-y-3 mb-6">
          {product.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-2 text-sm text-white/70"
            >
              <span className="text-green-400 mt-0.5">✓</span>
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex items-baseline gap-2 mb-4">
            <span className={`text-4xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
              ₹{pricingToggle === 'monthly' ? product.price.monthly.toLocaleString('en-IN') : Math.floor(product.price.yearly / 12).toLocaleString('en-IN')}
            </span>
            <span className="text-white/60">/month</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
          >
            Start Free Trial
          </motion.button>
          
          <button className="w-full mt-2 text-sm text-white/60 hover:text-white transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
