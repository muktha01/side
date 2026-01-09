'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { 
  TrendingUp, Target, Users, BarChart3, MessageCircle, Search, 
  Share2, Video, Megaphone, LineChart, Award, Zap, CheckCircle2,
  ArrowRight, Play, Star, Phone
} from 'lucide-react';

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '300%', label: 'Average ROI Increase', icon: TrendingUp },
    { value: '500+', label: 'Successful Campaigns', icon: Award },
    { value: '10K+', label: 'Leads Generated', icon: Users },
    { value: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Marketing',
      description: 'Engage customers directly with personalized WhatsApp campaigns',
      features: [
        'Bulk messaging campaigns',
        'WhatsApp Business API integration',
        'Automated customer responses',
        'Broadcast lists and groups management',
        'Rich media messaging (images, videos, documents)',
        'Campaign analytics and reporting'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Search,
      title: 'SEO (Search Engine Optimization)',
      description: 'Rank higher on Google and drive organic traffic to your website',
      features: [
        'Comprehensive keyword research',
        'On-page SEO optimization',
        'Technical SEO audits',
        'Link building and off-page SEO',
        'Local SEO for businesses',
        'Content optimization and strategy',
        'Monthly SEO reports and analytics'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing (SMM)',
      description: 'Build your brand presence across all major social platforms',
      features: [
        'Facebook, Instagram, LinkedIn, Twitter management',
        'Content calendar planning and creation',
        'Community management and engagement',
        'Paid social advertising campaigns',
        'Influencer collaboration strategies',
        'Social media analytics and insights',
        'Brand reputation monitoring'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Video,
      title: 'Video Editing & Production',
      description: 'Create compelling video content that converts and engages',
      features: [
        'Promotional and explainer videos',
        'Social media reels and shorts',
        'YouTube content creation and optimization',
        'Motion graphics and animations',
        'Product demo videos',
        'Testimonial video editing',
        'Video ads for all platforms'
      ],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Target,
      title: 'Meta Marketing (Facebook & Instagram Ads)',
      description: 'Run high-converting ad campaigns on Facebook and Instagram',
      features: [
        'Campaign strategy and setup',
        'Advanced audience targeting',
        'A/B testing and optimization',
        'Retargeting and lookalike audiences',
        'Ad creative design and copywriting',
        'Conversion tracking and attribution',
        'Budget optimization and scaling'
      ],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Megaphone,
      title: 'Google Ads & PPC',
      description: 'Drive instant traffic and leads with targeted paid advertising',
      features: [
        'Search, display, and shopping ads',
        'Keyword research and bidding strategy',
        'Ad copy and landing page optimization',
        'Remarketing campaigns',
        'Performance Max campaigns',
        'Conversion tracking setup',
        'ROI-focused campaign management'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Lead Generation & Conversion',
      description: 'Turn visitors into customers with optimized conversion funnels',
      features: [
        'Landing page design and optimization',
        'Lead magnet creation',
        'Email marketing automation',
        'CRM integration and management',
        'Conversion funnel analysis',
        'Lead scoring and nurturing',
        'Marketing automation setup'
      ],
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Marketing Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics',
      features: [
        'Google Analytics setup and tracking',
        'Custom dashboard creation',
        'Performance KPI tracking',
        'ROI measurement and attribution',
        'Competitor analysis',
        'Monthly performance reports',
        'Data-driven recommendations'
      ],
      color: 'from-red-500 to-pink-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business goals, target audience, and competitive landscape through in-depth research and analysis.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on insights, we create a customized digital marketing strategy with clear KPIs, channel selection, and budget allocation.',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our team executes the strategy by creating content, setting up campaigns, and deploying ads across chosen platforms.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor performance, conduct A/B tests, and optimize campaigns to maximize ROI and achieve better results.',
      icon: LineChart
    },
    {
      step: '05',
      title: 'Reporting & Scaling',
      description: 'Receive detailed monthly reports with insights and recommendations. We scale successful campaigns to drive exponential growth.',
      icon: TrendingUp
    }
  ];

  const caseStudies = [
    {
      client: 'E-Commerce Fashion Brand',
      industry: 'Retail',
      challenge: 'Low online visibility and poor conversion rates',
      solution: 'Implemented comprehensive SEO strategy and Meta ad campaigns with video content',
      results: [
        { label: 'ROI Increase', value: '450%' },
        { label: 'Organic Traffic', value: '+280%' },
        { label: 'Conversion Rate', value: '+165%' }
      ]
    },
    {
      client: 'B2B SaaS Company',
      industry: 'Technology',
      challenge: 'Need to generate qualified leads for enterprise software',
      solution: 'Multi-channel approach with LinkedIn ads, content marketing, and lead nurturing',
      results: [
        { label: 'Qualified Leads', value: '+320%' },
        { label: 'Cost Per Lead', value: '-55%' },
        { label: 'Sales Conversions', value: '+180%' }
      ]
    },
    {
      client: 'Local Service Business',
      industry: 'Home Services',
      challenge: 'Limited local market presence and low customer inquiries',
      solution: 'Local SEO, Google Ads, and WhatsApp marketing for instant customer engagement',
      results: [
        { label: 'Local Rankings', value: 'Top 3' },
        { label: 'Inquiries', value: '+290%' },
        { label: 'Revenue Growth', value: '+210%' }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our team holds certifications from Google, Facebook, and HubSpot'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Approach',
      description: 'Every decision backed by analytics and performance metrics'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '500+ successful campaigns with measurable ROI improvements'
    },
    {
      icon: Users,
      title: 'Transparent Reporting',
      description: 'Monthly detailed reports with full visibility into campaign performance'
    },
    {
      icon: Target,
      title: 'Customized Strategies',
      description: 'Tailored marketing plans designed for your unique business goals'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Dedicated account manager and round-the-clock support'
    }
  ];

  const tools = [
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Meta Business Suite', category: 'Social Media' },
    { name: 'SEMrush', category: 'SEO' },
    { name: 'Ahrefs', category: 'SEO' },
    { name: 'HubSpot', category: 'Marketing Automation' },
    { name: 'Mailchimp', category: 'Email Marketing' },
    { name: 'Google Ads', category: 'PPC' },
    { name: 'Canva Pro', category: 'Design' },
    { name: 'Adobe Creative Suite', category: 'Video Editing' },
    { name: 'Hootsuite', category: 'Social Media' },
    { name: 'WhatsApp Business API', category: 'Messaging' },
    { name: 'Hotjar', category: 'Analytics' }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹25,000',
      period: '/month',
      description: 'Perfect for small businesses starting their digital journey',
      features: [
        'Social Media Management (2 platforms)',
        'Basic SEO optimization',
        'Monthly content calendar',
        'Performance reporting',
        'Email support',
        'Up to 10 posts per month'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '₹50,000',
      period: '/month',
      description: 'Ideal for growing businesses ready to scale',
      features: [
        'Social Media Management (4 platforms)',
        'Advanced SEO & content strategy',
        'Paid ad campaigns (Meta/Google)',
        'Video editing (2 videos/month)',
        'WhatsApp marketing setup',
        'Lead generation campaigns',
        'Weekly performance reports',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solution for established businesses',
      features: [
        'Full-service digital marketing',
        'Multi-channel campaigns',
        'Unlimited content creation',
        'Advanced analytics & attribution',
        'Dedicated account manager',
        'Custom marketing automation',
        'A/B testing & optimization',
        '24/7 support & consultation'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Results vary by channel. Paid advertising (Google Ads, Meta Ads) can show results within days, while SEO typically takes 3-6 months for significant organic traffic growth. Social media marketing shows engagement within weeks. We provide realistic timelines during strategy planning.'
    },
    {
      question: 'What is your approach to measuring ROI?',
      answer: 'We track all key performance indicators including cost per lead, conversion rates, customer acquisition cost, and revenue attribution. Our monthly reports clearly show how marketing investments translate to business results with full transparency.'
    },
    {
      question: 'Do you work with businesses in my industry?',
      answer: 'We have successfully delivered campaigns across various industries including e-commerce, B2B SaaS, healthcare, real estate, education, and local services. Our strategies are customized based on your specific industry dynamics and target audience.'
    },
    {
      question: 'What makes your WhatsApp marketing effective?',
      answer: 'We use WhatsApp Business API for professional bulk messaging, segment audiences for personalized campaigns, create engaging content with rich media, and track delivery and engagement metrics. This direct channel typically achieves 70%+ open rates.'
    },
    {
      question: 'Can I choose specific services instead of a package?',
      answer: 'Absolutely! While packages offer the best value, we can create custom plans focusing on specific services like only SEO, only Meta Ads, or any combination that suits your needs and budget.'
    },
    {
      question: 'How do you handle campaign budgets?',
      answer: 'Our service fees are separate from ad spend budgets. We recommend optimal ad budgets based on your goals and competition, manage the spending efficiently, and ensure maximum ROI. You have full visibility and control over all expenses.'
    },
    {
      question: 'What kind of reporting do you provide?',
      answer: 'We provide comprehensive monthly reports including campaign performance, key metrics, insights, and recommendations. You also get real-time access to dashboards to track progress anytime. Weekly updates are provided for active campaigns.'
    },
    {
      question: 'Do you provide content creation services?',
      answer: 'Yes! Our team creates all types of content including social media posts, blog articles, ad copy, video scripts, graphics, and video editing. All content is tailored to your brand voice and marketing objectives.'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30"
            >
              <span className="text-cyan-400 font-semibold">🚀 ROI-Driven Digital Marketing</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Data-Driven Marketing
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              From WhatsApp marketing to SEO, we deliver comprehensive digital marketing solutions 
              that generate leads, boost conversions, and maximize your ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919381820806?text=Hi%2C%20I%20want%20a%20free%20marketing%20audit%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Marketing Audit
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Success Stories
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Marketing <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Agency?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Partner with a team that's committed to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Proven <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to digital marketing success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent mt-4" />
                  )}
                </div>
                
                <div className="flex-1 pb-12">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-3">
                      <step.icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 ml-10">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="text-cyan-400 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.client}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Challenge:</div>
                      <div className="text-gray-300">{study.challenge}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Solution:</div>
                      <div className="text-gray-300">{study.solution}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{result.value}</div>
                      <div className="text-xs text-gray-400">{result.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tools & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We use industry-leading tools to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold mb-2">{tool.name}</div>
                <div className="text-sm text-gray-400">{tool.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose a package that fits your business needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border ${
                  pkg.popular ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-white/10'
                } hover:border-cyan-500/50 transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 mb-1">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={`https://wa.me/919381820806?text=Hi%2C%20I%27m%20interested%20in%20the%20${pkg.name}%20package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'bg-white/5 text-white border-2 border-white/20 hover:bg-white/10'
                  }`}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about our digital marketing services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-cyan-400 transform rotate-90" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our digital marketing strategies can help you achieve your business goals. 
              Get a free consultation and marketing audit today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20discuss%20digital%20marketing%20services%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+919381820806"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 9381820806
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
