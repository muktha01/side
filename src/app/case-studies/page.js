'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { Rocket, Star, Building2, DollarSign, Monitor, TrendingUp, Code, Flame, BarChart3, ShoppingCart } from 'lucide-react';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Icon wrapper to handle rendering
  const IconWrapper = ({ icon: Icon, className = "w-12 h-12 mx-auto text-cyan-400" }) => {
    if (!Icon) return null;
    return <Icon className={className} strokeWidth={1.5} />;
  };

  const stats = [
    { value: 500, label: 'Projects Delivered', icon: Rocket, suffix: '+' },
    { value: 98, label: 'Client Satisfaction', icon: Star, suffix: '%' },
    { value: 50, label: 'Industries Served', icon: Building2, suffix: '+' },
    { value: 800, label: 'Revenue Generated for Clients', icon: DollarSign, prefix: '₹', suffix: 'Cr+' }
  ];

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML', 'E-commerce', 'Healthcare', 'Finance', 'SaaS'];

  const caseStudies = [
    {
      id: 1,
      title: 'FinTech Dashboard Revolution',
      client: 'FinanceHub',
      industry: 'Finance',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      description: 'Transformed financial data visualization with real-time analytics and predictive insights.',
      metrics: ['+200% Revenue', '50% Time Saved', '4.9★ Rating'],
      techStack: ['React', 'Node.js', 'MongoDB', 'AWS'],
      challenge: 'Complex financial data needed intuitive visualization',
      solution: 'Built a real-time analytics dashboard with AI-powered insights',
      results: { revenue: 200, users: 50000, efficiency: 50 }
    },
    {
      id: 2,
      title: 'Healthcare Patient Portal',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      description: 'Streamlined patient management with secure mobile app for healthcare providers.',
      metrics: ['+180% Engagement', '1M+ Users', '99.9% Uptime'],
      techStack: ['React Native', 'Firebase', 'Python', 'Azure'],
      challenge: 'Secure patient data management across multiple devices',
      solution: 'HIPAA-compliant mobile platform with end-to-end encryption',
      results: { users: 1000000, satisfaction: 98, efficiency: 60 }
    },
    {
      id: 3,
      title: 'E-commerce AI Recommendation Engine',
      client: 'ShopSmart',
      industry: 'E-commerce',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      description: 'Increased sales with personalized product recommendations using machine learning.',
      metrics: ['+250% Conversion', '₹40Cr Revenue', '4.8★ Rating'],
      techStack: ['TensorFlow', 'Python', 'React', 'GCP'],
      challenge: 'Low conversion rates and poor product discovery',
      solution: 'ML-powered recommendation system with real-time personalization',
      results: { conversion: 250, revenue: 5000000, engagement: 85 }
    },
    {
      id: 4,
      title: 'Enterprise Resource Planning',
      client: 'TechCorp Global',
      industry: 'SaaS',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      description: 'Unified business operations with comprehensive ERP solution.',
      metrics: ['+150% Efficiency', '5000+ Users', '40% Cost Reduction'],
      techStack: ['Angular', 'Java', 'PostgreSQL', 'Kubernetes'],
      challenge: 'Fragmented systems across departments',
      solution: 'Integrated ERP platform with automated workflows',
      results: { efficiency: 150, costSaving: 40, users: 5000 }
    },
    {
      id: 5,
      title: 'Real Estate Mobile Platform',
      client: 'PropertyPro',
      industry: 'Real Estate',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&q=80',
      description: 'Revolutionized property search with AR visualization and virtual tours.',
      metrics: ['+300% Leads', '2M Downloads', '4.7★ Rating'],
      techStack: ['Flutter', 'ARKit', 'Firebase', 'Node.js'],
      challenge: 'Static property listings with poor engagement',
      solution: 'AR-enabled mobile app with 360° virtual tours',
      results: { leads: 300, downloads: 2000000, engagement: 75 }
    },
    {
      id: 6,
      title: 'Supply Chain Analytics',
      client: 'LogiTrack',
      industry: 'Logistics',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      description: 'Optimized logistics operations with predictive analytics and route optimization.',
      metrics: ['+120% Efficiency', '₹80Cr Saved', '95% Accuracy'],
      techStack: ['Python', 'Spark', 'TensorFlow', 'AWS'],
      challenge: 'Inefficient routing and delayed deliveries',
      solution: 'AI-powered predictive analytics for supply chain optimization',
      results: { efficiency: 120, costSaving: 10000000, accuracy: 95 }
    },
    {
      id: 7,
      title: 'EdTech Learning Platform',
      client: 'EduLearn',
      industry: 'Education',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
      description: 'Interactive online learning platform with adaptive assessments.',
      metrics: ['+400% Engagement', '500K Students', '4.9★ Rating'],
      techStack: ['Next.js', 'Django', 'WebRTC', 'Redis'],
      challenge: 'Low student engagement in online learning',
      solution: 'Gamified platform with real-time collaboration features',
      results: { engagement: 400, users: 500000, completion: 85 }
    },
    {
      id: 8,
      title: 'Food Delivery Optimization',
      client: 'QuickEats',
      industry: 'Food Tech',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80',
      description: 'Streamlined food delivery with real-time tracking and route optimization.',
      metrics: ['+180% Orders', '30min Average', '4.8★ Rating'],
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Maps API'],
      challenge: 'Long delivery times and poor tracking',
      solution: 'Real-time tracking with AI-optimized delivery routes',
      results: { orders: 180, deliveryTime: 30, satisfaction: 96 }
    },
    {
      id: 9,
      title: 'Banking Security Platform',
      client: 'SecureBank',
      industry: 'Finance',
      category: 'Web Apps',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
      description: 'Enhanced banking security with fraud detection and biometric authentication.',
      metrics: ['-90% Fraud', '3M Users', '99.99% Uptime'],
      techStack: ['React', 'Python', 'TensorFlow', 'Azure'],
      challenge: 'Rising fraud incidents and security breaches',
      solution: 'ML-based fraud detection with multi-factor authentication',
      results: { fraudReduction: 90, users: 3000000, uptime: 99.99 }
    },
    {
      id: 10,
      title: 'Fitness & Wellness App',
      client: 'FitLife',
      industry: 'Health & Fitness',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
      description: 'Personalized fitness plans with AI-powered coaching and nutrition tracking.',
      metrics: ['+500% Users', '1M Workouts', '4.9★ Rating'],
      techStack: ['Flutter', 'Firebase', 'ML Kit', 'Stripe'],
      challenge: 'Generic fitness plans with low user retention',
      solution: 'AI-personalized workout and nutrition plans',
      results: { userGrowth: 500, retention: 80, revenue: 2000000 }
    },
    {
      id: 11,
      title: 'Smart Manufacturing IoT',
      client: 'IndusTech',
      industry: 'Manufacturing',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1565515636869-facc8e1e2d4d?w=600&q=80',
      description: 'Predictive maintenance system reducing downtime with IoT sensors.',
      metrics: ['-70% Downtime', '₹64Cr Saved', '98% Accuracy'],
      techStack: ['Python', 'IoT', 'Kafka', 'TensorFlow'],
      challenge: 'Unexpected equipment failures causing downtime',
      solution: 'IoT-enabled predictive maintenance with ML models',
      results: { downtimeReduction: 70, costSaving: 8000000, efficiency: 98 }
    },
    {
      id: 12,
      title: 'Social Media Analytics',
      client: 'BrandBoost',
      industry: 'Marketing',
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      description: 'Comprehensive social media analytics and sentiment analysis platform.',
      metrics: ['+350% ROI', '10K Brands', '4.8★ Rating'],
      techStack: ['React', 'Python', 'NLP', 'AWS'],
      challenge: 'Lack of actionable insights from social media data',
      solution: 'AI-powered sentiment analysis and competitive intelligence',
      results: { roi: 350, clients: 10000, accuracy: 92 }
    }
  ];

  const testimonials = [
    {
      quote: "Working with SDEV Solutions transformed our business. Their team delivered beyond expectations and the results speak for themselves.",
      name: "Sarah Johnson",
      title: "CEO",
      company: "FinanceHub",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      quote: "The AI solution they built increased our conversion rate by 250%. Absolutely phenomenal work and exceptional support.",
      name: "Michael Chen",
      title: "CTO",
      company: "ShopSmart",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5
    },
    {
      quote: "From concept to deployment, the team was professional, responsive, and delivered a product that exceeded our requirements.",
      name: "Emily Rodriguez",
      title: "Product Manager",
      company: "MediCare Plus",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5
    },
    {
      quote: "Their expertise in mobile development helped us reach 1M+ users in just 6 months. Highly recommended!",
      name: "David Kim",
      title: "Founder",
      company: "PropertyPro",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5
    },
    {
      quote: "The predictive analytics platform they built saved us millions. True partners in our digital transformation journey.",
      name: "Lisa Anderson",
      title: "COO",
      company: "LogiTrack",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      quote: "Exceptional quality, on-time delivery, and incredible support. SDEV Solutions is our go-to technology partner.",
      name: "James Wilson",
      title: "VP Engineering",
      company: "TechCorp Global",
      avatar: "https://i.pravatar.cc/150?img=6",
      rating: 5
    }
  ];

  const industries = [
    { name: 'Finance', icon: DollarSign, count: 45 },
    { name: 'Healthcare', icon: '🏥', count: 38 },
    { name: 'E-commerce', icon: ShoppingCart, count: 52 },
    { name: 'Education', icon: '📚', count: 28 },
    { name: 'Real Estate', icon: Building2, count: 22 },
    { name: 'Manufacturing', icon: '🏭', count: 31 },
    { name: 'Logistics', icon: '🚚', count: 19 },
    { name: 'Food Tech', icon: '🍔', count: 25 },
    { name: 'SaaS', icon: Monitor, count: 67 },
    { name: 'Marketing', icon: TrendingUp, count: 34 },
    { name: 'Travel', icon: '✈️', count: 18 },
    { name: 'Entertainment', icon: '🎬', count: 21 }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: Code },
    { name: 'AWS', icon: '☁️' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Flutter', icon: '💙' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Firebase', icon: Flame },
    { name: 'GraphQL', icon: BarChart3 },
    { name: 'TypeScript', icon: '📘' }
  ];

  const clientLogos = Array(20).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`
  }));

  const filteredCases = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter || c.industry === activeFilter);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const CountUpAnimation = ({ value, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      
      requestAnimationFrame(animate);
    }, [value, duration]);

    return <>{prefix}{count}{suffix}</>;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            alt="Success Stories"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-black"></div>
        </div>

        {/* Animated Client Logos Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl"
              style={{
                left: `${(i % 4) * 25}%`,
                top: `${Math.floor(i / 4) * 33}%`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🏢
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Success Stories That{' '}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Inspire
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Discover how we've helped businesses transform through technology
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-padding bg-gray-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-5xl mb-4"
                >
                  {typeof stat.icon === 'string' ? stat.icon : <IconWrapper icon={stat.icon} />}
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  <CountUpAnimation value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Featured Case Study"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/70 transition-all duration-500"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold">Featured Project</span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">Finance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">FinTech Dashboard Revolution</h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl">
                Transformed financial data visualization with real-time analytics and predictive insights
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-green-600/20 border border-green-500 rounded-lg">
                  <span className="text-green-400 font-bold">+200% Revenue</span>
                </div>
                <div className="px-4 py-2 bg-blue-600/20 border border-blue-500 rounded-lg">
                  <span className="text-blue-400 font-bold">50% Time Saved</span>
                </div>
                <div className="px-4 py-2 bg-purple-600/20 border border-purple-500 rounded-lg">
                  <span className="text-purple-400 font-bold">1M+ Users</span>
                </div>
              </div>
              <motion.button
                whileHover={{ x: 5 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-200 transition-all"
              >
                Read Full Story
                <span>→</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredCases.length}</span> of{' '}
              <span className="text-white font-semibold">{caseStudies.length}</span> projects
            </p>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedCase(caseStudy)}
                className="glass rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">{caseStudy.client}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {caseStudy.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                    {caseStudy.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-lg text-xs text-green-400 font-semibold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-cyan-500 font-semibold inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    View Case Study
                    <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </motion.div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentTestimonial ? 1 : 0,
                  scale: index === currentTestimonial ? 1 : 0.8,
                  zIndex: index === currentTestimonial ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-12 text-center absolute inset-0"
                style={{ position: index === currentTestimonial ? 'relative' : 'absolute' }}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-3xl">★</span>
                  ))}
                </div>
                <p className="text-2xl text-gray-300 mb-8 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentTestimonial ? 'w-8 bg-cyan-500' : 'w-2 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industries We <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Serve</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                onClick={() => setActiveFilter(industry.name)}
                className="glass rounded-2xl p-6 text-center cursor-pointer hover:bg-white/10 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-3"
                >
                  {typeof industry.icon === 'string' ? industry.icon : <IconWrapper icon={industry.icon} />}
                </motion.div>
                <h3 className="font-semibold mb-1">{industry.name}</h3>
                <p className="text-sm text-gray-400">{industry.count} projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies We've <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Mastered</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="glass rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl mb-2"
                >
                  {typeof tech.icon === 'string' ? tech.icon : <IconWrapper icon={tech.icon} />}
                </motion.div>
                <p className="text-sm font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Impact We've <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Delivered</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Progress Bar 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">Client Satisfaction</h3>
              <div className="relative h-8 bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '98%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-teal-500"
                />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                98%
              </p>
            </motion.div>

            {/* Progress Bar 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">On-Time Delivery</h3>
              <div className="relative h-8 bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                95%
              </p>
            </motion.div>

            {/* Progress Bar 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">Long-term Partnerships</h3>
              <div className="relative h-8 bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                92%
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logo Wall */}
      <section className="section-padding bg-gray-900/50 overflow-hidden">
        <div className="container-custom mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Leading Brands</span>
            </h2>
          </motion.div>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 glass rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
              >
                <div className="text-4xl">🏢</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
            alt="Join Us"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Be Our Next{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's build something amazing together. Start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 rounded-lg font-semibold transition-all shadow-lg text-lg"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-lg font-semibold transition-all text-lg"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto p-4"
          onClick={() => setSelectedCase(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="max-w-5xl mx-auto my-8 glass rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-96">
              <Image
                src={selectedCase.image}
                alt={selectedCase.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-2xl"
              >
                ×
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4 inline-block">
                  {selectedCase.industry}
                </span>
                <h2 className="text-4xl font-bold mb-2">{selectedCase.title}</h2>
                <p className="text-xl text-gray-300">{selectedCase.client}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Challenge */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Challenge</h3>
                <p className="text-gray-400 text-lg">{selectedCase.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Solution</h3>
                <p className="text-gray-400 text-lg">{selectedCase.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(selectedCase.results).map(([key, value]) => (
                    <div key={key} className="glass rounded-xl p-6 text-center">
                      <p className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">
                        {typeof value === 'number' && value > 100 ? value.toLocaleString() : value}
                        {typeof value === 'number' && value <= 100 ? '%' : ''}
                      </p>
                      <p className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCase.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-6 py-3 glass rounded-lg font-semibold hover:bg-white/10 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
