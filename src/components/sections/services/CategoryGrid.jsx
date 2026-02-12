'use client';

import { motion } from 'framer-motion';
import ServiceCategoryCard from './ServiceCategoryCard';
import { staggerContainer } from '@/lib/animationVariants';
import { Monitor, Megaphone, Bot, BarChart3, Users, DollarSign, Construction, GraduationCap } from 'lucide-react';

const serviceCategories = [
  {
    id: 'website-app-development',
    title: 'Website & App Development',
    description: 'Build digital experiences that convert users into customers',
    icon: Monitor,
    servicesCount: 6,
    gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
    features: [
      'Custom website design & development',
      'Mobile app development (iOS & Android)',
      'E-commerce & admin panels',
      'Responsive & SEO-friendly'
    ],
    href: '/services/website-app-development'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Amplify your reach, maximize ROI',
    icon: Megaphone,
    servicesCount: 5,
    gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    features: [
      'Lead generation & brand promotion',
      'SEO, social media & paid ads',
      'Content marketing strategy',
      'Analytics & performance tracking'
    ],
    href: '/services/digital-marketing'
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Automation',
    description: 'Intelligent automation for modern business',
    icon: Bot,
    servicesCount: 3,
    gradient: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10',
    features: [
      'AI-powered business solutions',
      'Machine learning integration',
      'Intelligent chatbots',
      'Process automation'
    ],
    href: '/services/ai'
  },
  {
    id: 'business-tools',
    title: 'HRM, CRM & Business Tools',
    description: 'Streamline operations, boost productivity',
    icon: BarChart3,
    servicesCount: 4,
    gradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
    features: [
      'Employee & payroll management (HRM)',
      'Customer & lead management (CRM)',
      'WhatsApp bulk messaging',
      'Bulk email sender tools'
    ],
    href: '/services/business-automation'
  },
  {
    id: 'recruitment',
    title: 'Recruitment & Staffing',
    description: 'Find the perfect talent, fast',
    icon: Users,
    servicesCount: 3,
    gradient: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
    features: [
      'Employee sourcing & screening',
      'IT & Non-IT hiring',
      'Freshers & experienced candidates',
      'End-to-end recruitment process'
    ],
    href: '/services/job-support-career'
  },
  {
    id: 'loans',
    title: 'Loans & Financial Services',
    description: 'Quick approvals, trusted process',
    icon: DollarSign,
    servicesCount: 3,
    gradient: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
    features: [
      'Personal loan assistance',
      'Home & vehicle loan support',
      'Fast processing',
      'Documentation help'
    ],
    href: '/services/loans'
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Construction',
    description: 'From plan to reality',
    icon: Construction,
    servicesCount: 4,
    gradient: 'bg-gradient-to-br from-stone-500/10 to-amber-500/10',
    features: [
      'Building planning & approvals',
      'Exterior designing & 3D plans',
      'Complete construction',
      'Contract management'
    ],
    href: '/services/civil-design-courses'
  },
  {
    id: 'training',
    title: 'Training & Education',
    description: 'Learn, grow, succeed',
    icon: GraduationCap,
    servicesCount: 4,
    gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
    features: [
      'IT & Civil courses',
      'Practical training',
      'Industry-oriented programs',
      '100% placement assistance'
    ],
    href: '/services/training-institute'
  },
];

export default function CategoryGrid() {
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text-premium">Service Categories</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs. Choose your category to explore detailed services.
          </p>
        </motion.div>

        {/* Category Grid - Bento Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className={`
                ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              <ServiceCategoryCard category={category} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Not sure which service you need?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-semibold text-lg"
            whileHover={{ x: 5 }}
          >
            Let our experts guide you
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
