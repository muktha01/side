'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ProcessTimeline from '@/components/sections/services/ProcessTimeline';
import FAQAccordion from '@/components/sections/services/FAQAccordion';
import LeadCaptureForm from '@/components/sections/services/LeadCaptureForm';
import TestimonialsVertical from '@/components/sections/TestimonialsVertical';
import { 
  Building2, 
  PenTool, 
  Paintbrush, 
  Key, 
  Shield, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Users,
  Hammer
} from 'lucide-react';

export default function RealEstatePage() {
  const [activeTab, setActiveTab] = useState('construction');

  // Hero Section Data
  const heroData = {
    badge: 'Real Estate & Construction',
    title: 'Complete Real Estate, Construction & Interior Solutions',
    subtitle: 'Planning • Design • Construction • Interior • Turnkey Projects',
    description: 'Your trusted partner for building dreams into reality. From initial planning to final handover, we provide complete construction and real estate solutions with transparency and quality.',
    stats: [
      { value: '200+', label: 'Projects Completed', icon: Building2 },
      { value: '98%', label: 'Client Satisfaction', icon: Star },
      { value: '15+', label: 'Years Experience', icon: Award },
    ]
  };

  // Services Data
  const services = [
    {
      icon: Building2,
      title: 'Building Construction',
      description: 'Complete construction services from foundation to finishing for residential and commercial projects.',
      features: [
        'Residential Construction (House, Villa, Apartment)',
        'Commercial Construction (Office, Shop, Showroom)',
        'Full construction from foundation to finishing',
        'Quality materials and workmanship'
      ],
      popular: true
    },
    {
      icon: PenTool,
      title: 'Planning & Design',
      description: 'Professional architectural planning and design services tailored to your needs and budget.',
      features: [
        '2D floor plans and layouts',
        '3D elevation & structural design',
        'Vastu-based planning (optional)',
        'Approval drawings and documentation'
      ],
      popular: false
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Transform your space with our expert interior design and execution services.',
      features: [
        'Home interiors and fit-outs',
        'Modular kitchen & wardrobes',
        'False ceiling & lighting',
        'Office & commercial interiors'
      ],
      popular: false
    },
    {
      icon: Key,
      title: 'Turnkey / Material Contract',
      description: 'Complete building solutions with single-point responsibility from start to finish.',
      features: [
        'Complete building with material + labor',
        'End-to-end project handling',
        'Single-point responsibility',
        'Transparent cost breakdown'
      ],
      popular: true
    }
  ];

  // Pricing Packages
  const pricingPackages = [
    {
      name: 'Basic',
      price: '₹1,400-1,600',
      unit: 'per sq.ft',
      description: 'Essential construction with standard materials',
      features: [
        'Standard cement & steel (Ultratech/JSW)',
        'Basic tiles and fixtures',
        'Standard electrical & plumbing',
        'Basic doors and windows',
        'One revision in design',
        ' 1-year warranty'
      ],
      highlighted: false
    },
    {
      name: 'Standard',
      price: '₹1,800-2,200',
      unit: 'per sq.ft',
      description: 'Premium materials with better finishing',
      features: [
        'Premium cement & steel',
        'Quality tiles & sanitary ware',
        'Branded electrical & plumbing',
        'UPVC/Aluminum windows',
        'Two revisions in design',
        'False ceiling in living area',
        '2-year warranty'
      ],
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Premium',
      price: '₹2,500+',
      unit: 'per sq.ft',
      description: 'Luxury construction with designer finishes',
      features: [
        'Ultra-premium branded materials',
        'Designer tiles & imported fittings',
        'Smart home automation ready',
        'Luxury kitchen & wardrobes',
        'Unlimited design revisions',
        'Complete interior package',
        '5-year warranty'
      ],
      highlighted: false
    }
  ];

  // Process Timeline Data
  const processSteps = [
    {
      number: 1,
      title: 'Consultation & Site Visit',
      description: 'Free consultation to understand your requirements and site inspection by our expert team.',
      duration: '1-2 days',
      deliverables: ['Site assessment report', 'Initial requirement discussion', 'Preliminary budget estimate']
    },
    {
      number: 2,
      title: 'Planning & Design',
      description: 'Detailed architectural planning with 2D layouts, 3D elevations, and structural design.',
      duration: '7-15 days',
      deliverables: ['2D floor plans', '3D elevation designs', 'Structural drawings', 'Approval documents']
    },
    {
      number: 3,
      title: 'Budget Finalization',
      description: 'Transparent cost breakdown with material specifications and payment schedule.',
      duration: '2-3 days',
      deliverables: ['Detailed quotation', 'Material specifications', 'Payment schedule', 'Contract agreement']
    },
    {
      number: 4,
      title: 'Material + Construction',
      description: 'Procurement of quality materials and execution of construction work by skilled workers.',
      duration: '6-12 months',
      deliverables: ['Quality materials as per specs', 'Regular site updates', 'Progress photographs', 'Site supervision']
    },
    {
      number: 5,
      title: 'Interior & Finishing',
      description: 'Complete interior work including painting, tiling, electrical, plumbing, and final touches.',
      duration: '2-3 months',
      deliverables: ['Interior execution', 'Electrical & plumbing completion', 'Painting & finishing', 'Fixture installation']
    },
    {
      number: 6,
      title: 'Final Handover',
      description: 'Quality inspection, final walkthrough, and project handover with warranty documentation.',
      duration: '3-5 days',
      deliverables: ['Complete quality check', 'As-built drawings', 'Warranty documents', 'Maintenance guide']
    }
  ];

  // Quality & Materials Data
  const qualityPoints = [
    {
      icon: Shield,
      title: 'Branded Cement & Steel',
      description: 'We use only ISI certified cement (Ultratech, ACC) and TMT steel (JSW, TATA) for structural strength.'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Tiles & Fittings',
      description: 'Premium tiles, sanitary ware, and fittings from trusted brands like Kajaria, Johnson, Hindware.'
    },
    {
      icon: Hammer,
      title: 'IS-Standard Construction',
      description: 'All construction follows Indian Standard codes (IS) ensuring safety, quality and durability.'
    },
    {
      icon: Award,
      title: 'Experienced Team',
      description: 'Skilled engineers, architects, and workers with 15+ years of experience in construction.'
    }
  ];

  // Why Choose Us Points
  const whyChoosePoints = [
    'One-stop solution for all construction needs',
    'Experienced civil engineers & architects',
    'Custom designs as per client requirements',
    'On-time project delivery guarantee',
    'Transparent pricing with no hidden charges',
    'Quality materials from trusted brands',
    'Regular site updates and supervision',
    'After-service support and warranty'
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'What is the cost per square foot for construction?',
      answer: 'Construction cost ranges from ₹1,400 to ₹2,500+ per sq.ft depending on the package (Basic/Standard/Premium) and material specifications. We provide detailed quotations after understanding your requirements.'
    },
    {
      question: 'Do you provide Vastu-based planning?',
      answer: 'Yes, we offer Vastu-compliant designs and planning. Our architects can incorporate Vastu principles into your floor plan and elevation design.'
    },
    {
      question: 'What is included in the turnkey package?',
      answer: 'Turnkey package includes complete construction with all materials and labor - from foundation to finishing, including interior work, electrical, plumbing, and final handover. It\'s a single-point responsibility model.'
    },
    {
      question: 'How long does construction take?',
      answer: 'Typical construction timeline is 8-15 months depending on project size and complexity. A 1200 sq.ft house usually takes 8-10 months, while larger projects may take 12-15 months.'
    },
    {
      question: 'Do you provide warranty on construction?',
      answer: 'Yes, we provide warranty ranging from 1-5 years based on the package chosen. This covers structural issues, waterproofing, and major defects.'
    },
    {
      question: 'Can I supply my own materials?',
      answer: 'Yes, we offer labor-only contracts if you prefer to supply your own materials. However, we recommend our material contract for better quality control and warranty coverage.'
    },
    {
      question: 'What approvals do I need before starting construction?',
      answer: 'You need building plan approval from local municipal corporation/panchayat. We assist in preparing approval drawings and can guide you through the approval process.'
    },
    {
      question: 'Do you handle interior design as well?',
      answer: 'Yes, we provide complete interior design services including modular kitchen, wardrobes, false ceiling, lighting, and complete home/office interiors.'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: 'SDEV built our dream home exactly as we envisioned. The quality of work and materials exceeded our expectations. Highly professional team!',
      author: 'Suresh & Lakshmi',
      position: 'Homeowners',
      company: 'Bangalore',
      rating: 5
    },
    {
      quote: 'Transparent pricing, quality materials, and on-time delivery. They handled everything from planning to handover. Best decision for our construction.',
      author: 'Rajesh Kumar',
      position: 'Villa Owner',
      company: 'Mysore',
      rating: 5
    },
    {
      quote: 'Professional interior work with attention to detail. Our modular kitchen and wardrobes are exactly what we wanted. Great team!',
      author: 'Priya Sharma',
      position: 'Apartment Owner',
      company: 'Hyderabad',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
            >
              <Building2 className="w-4 h-4 text-cyan-500" />
              <span className="text-sm font-medium text-cyan-500">{heroData.badge}</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-medium">
              {heroData.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Request Budget Estimate
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {heroData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <stat.icon className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <motion.div className="w-1 h-2 bg-cyan-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete construction and design solutions under one roof
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Budget & Packages
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparent pricing with no hidden charges. Choose the package that fits your budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-3xl p-8 ${
                  pkg.highlighted
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 md:-mt-4 md:scale-105'
                    : 'border-white/10'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-semibold whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm mb-4">{pkg.unit}</div>
                  <p className="text-gray-400 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-12"
          >
            * Prices are indicative and may vary based on location, design complexity, and material specifications.
            <br />
            All packages include: Quality materials, skilled labor, site supervision, and warranty.
          </motion.p>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our proven 6-step process ensures quality, transparency, and on-time delivery
            </p>
          </motion.div>

          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Quality & Materials Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Quality & Materials
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We use only premium, branded materials for lasting quality and durability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {qualityPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4">
                  <point.icon className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Material Brands We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Cement</p>
                <p className="text-sm">Ultratech, ACC, Ambuja</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Steel</p>
                <p className="text-sm">JSW, TATA, SAIL</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Tiles</p>
                <p className="text-sm">Kajaria, Johnson, Somany</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Sanitaryware</p>
                <p className="text-sm">Hindware, Parryware, Cera</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your trusted partner for quality construction with complete transparency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-cyan-500/50 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4">
          <TestimonialsVertical
            title="Client Success Stories"
            testimonials={testimonials}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Get answers to common questions about our construction services
            </p>
          </motion.div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Get Free Consultation
              </h2>
              <p className="text-gray-400 text-lg">
                Share your requirements and get a detailed quotation within 24 hours
              </p>
            </div>

            <LeadCaptureForm />

            {/* Quick Contact Options */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              >
                <Phone className="w-5 h-5 text-cyan-500" />
                <div>
                  <div className="text-sm text-gray-400">Call Us</div>
                  <div className="font-semibold">+91 98765 43210</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <div className="font-semibold">Chat with us</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss your project and provide you with the best construction solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
