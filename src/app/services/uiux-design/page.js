'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';

export default function UIUXDesignPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const processRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: processScrollProgress } = useScroll({
    target: processRef,
    offset: ['start start', 'end end'],
  });

  const stats = [
    { value: '70%', label: 'Increase in User Engagement' },
    { value: '40%', label: 'Improvement in Conversion Rates' },
    { value: '60%', label: 'Increase in Customer Retention' },
  ];

  const clientLogos = [
    { name: 'Google', image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=80&fit=crop' },
    { name: 'Microsoft', image: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200&h=80&fit=crop' },
    { name: 'Amazon', image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=80&fit=crop' },
    { name: 'Apple', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=80&fit=crop' },
    { name: 'Meta', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=80&fit=crop' },
    { name: 'Tesla', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop' },
  ];

  // Animated Counter Component
  function AnimatedCounter({ value, duration = 2 }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
      if (isInView) {
        const numericValue = parseInt(value);
        let startTime = null;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * numericValue));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, value, duration]);

    return <span ref={nodeRef}>{count}{value.includes('%') ? '%' : ''}</span>;
  }

  const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'Sketch', icon: '💎' },
    { name: 'Adobe XD', icon: '✨' },
    { name: 'Zeplin', icon: '🎯' },
    { name: 'Adobe Illustrator', icon: '🖌️' },
    { name: 'Framer', icon: '⚡' },
  ];

  const services = [
    {
      title: 'User Research & Analysis',
      icon: '🔍',
      description: 'Deep dive into user behavior, needs, and pain points through surveys, interviews, and data analysis.',
    },
    {
      title: 'Wireframing & Prototyping',
      icon: '📐',
      description: 'Create interactive prototypes to visualize and test user flows before full development.',
    },
    {
      title: 'Visual Design',
      icon: '🎨',
      description: 'Craft beautiful, brand-aligned interfaces with modern design systems and style guides.',
    },
    {
      title: 'Usability Testing',
      icon: '✅',
      description: 'Validate designs with real users to ensure intuitive navigation and optimal user experience.',
    },
    {
      title: 'Mobile App Design',
      icon: '📱',
      description: 'Design responsive mobile experiences for iOS and Android platforms.',
    },
    {
      title: 'Design Systems',
      icon: '🧩',
      description: 'Build scalable design systems with reusable components and clear documentation.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'The UI/UX redesign transformed our product. User engagement increased by 60% and our NPS score improved significantly.',
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      text: 'Their design process was thorough and collaborative. They truly understood our users and delivered exceptional results.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'E-Commerce Pro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'We saw a 45% increase in conversions after the redesign. The team\'s attention to detail was remarkable.',
    },
  ];

  const portfolio = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Complete redesign of shopping experience',
    },
    {
      title: 'Banking Mobile App',
      category: 'Mobile Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description: 'Intuitive financial management interface',
    },
    {
      title: 'Healthcare Dashboard',
      category: 'SaaS Design',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      description: 'Data visualization for medical professionals',
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Design',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      description: 'Engaging workout and nutrition tracker',
    },
  ];

  const processSteps = [
    {
      title: 'Discover',
      description: 'We dive deep into understanding your business goals, target audience, and market landscape to create a solid foundation for design.',
      points: [
        'Stakeholder interviews & user research',
        'Competitive analysis & market trends',
        'Define user personas & user journeys',
        'Establish project goals & success metrics',
      ],
    },
    {
      title: 'User Experience',
      description: 'We architect the information and interactions to create intuitive, seamless experiences that guide users effortlessly.',
      points: [
        'Information architecture & site mapping',
        'User flows & interaction design',
        'Low-fidelity wireframes & prototypes',
        'Usability testing & iteration',
      ],
    },
    {
      title: 'User Interface',
      description: 'We craft beautiful, accessible interfaces that align with your brand while delivering delightful user experiences.',
      points: [
        'Visual design system & brand integration',
        'High-fidelity mockups & prototypes',
        'Responsive design for all devices',
        'Design handoff & developer collaboration',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What does UI/UX design include?',
      answer: 'UI/UX design encompasses user research, wireframing, prototyping, visual design, interaction design, and usability testing to create intuitive and engaging digital experiences.',
    },
    {
      question: 'How long does a UI/UX design project take?',
      answer: 'Project timelines vary based on scope and complexity. Typically, a complete UI/UX design project takes 4-12 weeks, from initial research to final deliverables.',
    },
    {
      question: 'What is your design process?',
      answer: 'Our process follows three main phases: Discover (research & strategy), User Experience (architecture & wireframes), and User Interface (visual design & prototypes). We iterate based on feedback throughout.',
    },
    {
      question: 'Do you provide design files and assets?',
      answer: 'Yes, we provide all design files, assets, style guides, and documentation needed for development. We typically deliver files in Figma, Sketch, or Adobe XD format.',
    },
    {
      question: 'Can you redesign an existing product?',
      answer: 'Absolutely! We specialize in both new product design and redesigning existing products to improve user experience, modernize the interface, and boost conversion rates.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
        
        {/* Animated background orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mx-auto max-w-5xl leading-tight"
            >
              UI/UX Design Agency for <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Conversion-Driven</span> Digital Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We create intuitive, user-centered designs that not only look beautiful but drive real business results through enhanced usability and engagement.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30"
            >
              Start Your Project
            </motion.button>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-5xl mx-auto mt-8 md:mt-12"
          >
            <div className="relative aspect-video bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-3 md:p-4 shadow-2xl overflow-hidden group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop"
                alt="Modern UI Dashboard Design"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          {/* Infinite Scrolling Logo Marquee */}
          <div className="mt-16 md:mt-20 lg:mt-24 overflow-hidden">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center text-white/50 mb-8 md:mb-10 text-sm uppercase tracking-wider"
            >
              Trusted by Leading Brands
            </motion.p>
            <div className="relative">
              <div className="flex gap-12 overflow-hidden">
                <motion.div
                  animate={{ x: [0, -1920] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-12 flex-shrink-0"
                >
                  {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                    <div
                      key={`${client.name}-${index}`}
                      className="flex items-center justify-center h-16 w-48 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    >
                      <img src={client.image} alt={client.name} className="max-h-12 w-auto object-contain" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mx-auto max-w-4xl">
              User Experience Agency Focused on <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Clear, Effective</span> Design Solutions
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Our design philosophy centers on creating experiences that are both visually stunning and functionally superior, 
              ensuring your users achieve their goals effortlessly while your business metrics soar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 text-center hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
              >
                <motion.div
                  className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4"
                >
                  <AnimatedCounter value={stat.value} />
                </motion.div>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">UI/UX Design</span> Services
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive design solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools Section */}
      <section className="py-16 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Design Tools We Are Specialized In
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl border border-white/10 p-6 md:p-8 text-center hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
                >
                  {tool.icon}
                </motion.div>
                <p className="text-white/80 font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Success Stories — Real Impact of Our <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Designers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="inline-block bg-blue-500/10 text-blue-500 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                E-Commerce
              </div>
              <h3 className="text-2xl font-bold mb-4">Luxury Fashion Retailer Redesign</h3>
              <p className="text-white/70 mb-6">
                Complete UX overhaul of an online luxury fashion platform, focusing on personalized shopping experiences and streamlined checkout process.
              </p>
              
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                  alt="E-commerce redesign case study"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">68%</div>
                  <div className="text-sm text-white/60">Higher Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">92%</div>
                  <div className="text-sm text-white/60">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">45%</div>
                  <div className="text-sm text-white/60">More Conversions</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                SaaS Platform
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Management Tool Transformation</h3>
              <p className="text-white/70 mb-6">
                Redesigned a complex project management platform to improve team collaboration, reduce learning curve, and boost productivity.
              </p>
              
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="SaaS platform redesign case study"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">55%</div>
                  <div className="text-sm text-white/60">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">88%</div>
                  <div className="text-sm text-white/60">User Adoption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">40%</div>
                  <div className="text-sm text-white/60">Support Tickets ↓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Explore our recent design projects and see how we bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <div>
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-400 px-3 py-1 rounded-lg text-sm font-semibold mb-3"
                      >
                        {project.category}
                      </motion.span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/70">{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm font-semibold mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="text-white/60 hover:text-white text-3xl"
                >
                  ×
                </motion.button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl mb-6"
              />
              <p className="text-white/70 text-lg">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-blue-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Sticky Scroll */}
      <section ref={processRef} className="relative bg-black min-h-[300vh] border-t border-white/5">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Transform Ideas Into Innovative, <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">User Centered</span> Designs
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-12 items-center">
              {/* Timeline Indicator */}
              <div className="hidden lg:flex relative items-center justify-center">
                <div className="relative flex flex-col items-center h-[400px]">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
                  <div className="relative flex flex-col justify-between h-full z-10">
                    {processSteps.map((step, index) => {
                      const startProgress = index / processSteps.length;
                      const midProgress = (index + 0.5) / processSteps.length;
                      const endProgress = (index + 1) / processSteps.length;
                      
                      const scale = useTransform(
                        processScrollProgress,
                        [startProgress, midProgress, endProgress],
                        [1, 2, 1]
                      );
                      
                      const backgroundColor = useTransform(
                        processScrollProgress,
                        [startProgress, midProgress, endProgress],
                        ['rgba(255,255,255,0.2)', '#0EA5E9', 'rgba(255,255,255,0.2)']
                      );

                      return (
                        <motion.div
                          key={step.title}
                          style={{ scale, backgroundColor }}
                          className="w-3 h-3 rounded-full"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Left Content - Text */}
              <div className="relative h-full min-h-[500px] flex items-center">
                <div className="relative w-full">
                  {processSteps.map((step, index) => {
                    const isFirst = index === 0;
                    const isLast = index === processSteps.length - 1;
                    const startProgress = index / processSteps.length;
                    const endProgress = (index + 1) / processSteps.length;
                    
                    const opacity = useTransform(
                      processScrollProgress,
                      [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
                      isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
                    );
                    
                    const x = useTransform(
                      processScrollProgress,
                      [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
                      isFirst ? [0, 0, 0, -30] : isLast ? [30, 0, 0, 0] : [30, 0, 0, -30]
                    );

                    return (
                      <motion.div
                        key={step.title}
                        style={{ opacity, x }}
                        className="absolute inset-0 flex flex-col justify-center"
                      >
                        <motion.div
                          className="inline-block bg-blue-500/10 text-blue-500 px-4 py-2 rounded-lg font-semibold mb-4 w-fit"
                        >
                          Phase {index + 1}
                        </motion.div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h3>
                        <p className="text-white/70 text-lg mb-6 max-w-xl">{step.description}</p>
                        <ul className="space-y-3">
                          {step.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <svg
                                className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-white/80">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Content - Images */}
              <div className="hidden lg:block relative h-full min-h-[500px]">
                <div className="relative w-full h-full flex items-center justify-center">
                  {processSteps.map((step, index) => {
                    const isFirst = index === 0;
                    const isLast = index === processSteps.length - 1;
                    const startProgress = index / processSteps.length;
                    const endProgress = (index + 1) / processSteps.length;
                    
                    const opacity = useTransform(
                      processScrollProgress,
                      [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
                      isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
                    );
                    
                    const scale = useTransform(
                      processScrollProgress,
                      [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
                      isFirst ? [1, 1, 1, 0.95] : isLast ? [0.95, 1, 1, 1] : [0.95, 1, 1, 0.95]
                    );

                    return (
                      <motion.div
                        key={step.title}
                        style={{ opacity, scale }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="relative w-full max-w-lg aspect-square">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent rounded-3xl backdrop-blur-xl border border-white/5" />
                          
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                              <img
                                src={
                                  index === 0
                                    ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop'
                                    : index === 1
                                    ? 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=600&fit=crop'
                                    : 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop'
                                }
                                alt={step.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 mix-blend-multiply"></div>
                            </div>
                          </div>

                          <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full opacity-50" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Innovate Together
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-10">
              Start Your Journey To Better Business
            </p>
            <button className="bg-blue-500 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30">
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Digital Experience?</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Let's discuss your project and see how our UI/UX expertise can help you achieve your business goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Free Consultation</h3>
                    <p className="text-white/60">Get expert advice on your design challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quick Response</h3>
                    <p className="text-white/60">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Tailored Solutions</h3>
                    <p className="text-white/60">Custom designs aligned with your goals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors">
                    <option value="">Select a service</option>
                    <option value="web">Web Design</option>
                    <option value="mobile">Mobile App Design</option>
                    <option value="redesign">Product Redesign</option>
                    <option value="research">User Research</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors h-32 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-32 lg:pb-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}