'use client';

import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { 
  RocketLaunchIcon, 
  EyeIcon, 
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  TrophyIcon,
  SparklesIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Parallax Section Wrapper
const ParallaxSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// Floating Particles Background
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 });
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  
  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const startX = Math.random() * dimensions.width;
        const startY = Math.random() * dimensions.height;
        const endX = Math.random() * dimensions.width;
        const endY = Math.random() * dimensions.height;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
            initial={{
              x: startX,
              y: startY,
            }}
            animate={{
              x: endX,
              y: endY,
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}
    </div>
  );
};

export default function AboutPage() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const stats = [
    { number: 4, suffix: '+', label: 'Android Apps on Play Store', icon: ClockIcon },
    { number: 8, suffix: '+', label: 'Business Websites Delivered', icon: CheckBadgeIcon },
    { number: 3, suffix: '+', label: 'E-Commerce Stores Built', icon: HeartIcon },
    { number: 100, suffix: '%', label: 'Lifetime Support', icon: UserGroupIcon },
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Transparency',
      description: 'Honest timelines, clear communication and no hidden surprises — you always know where your project stands',
    },
    {
      icon: HeartIcon,
      title: 'Long-Term Relationships',
      description: 'We don\'t just deliver projects. We build lasting partnerships focused on your sustained growth',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Affordable Excellence',
      description: 'Premium quality solutions at pricing well below market standards — portfolio valued ₹15L–₹25L in market rates',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Proven Portfolio',
      description: '4+ Android apps on Play Store, 8+ business websites and 3+ e-commerce stores across real industries',
    },
    {
      icon: UserGroupIcon,
      title: 'Conversion-Focused Design',
      description: 'Every website and app is built to enhance brand visibility, generate leads and increase revenue',
    },
    {
      icon: SparklesIcon,
      title: 'End-to-End Solutions',
      description: 'Website + E-Commerce + App + Performance Marketing — all under one roof for complete digital growth',
    },
  ];

  const team = [
    { name: 'Muktha', title: 'Founder & CEO', img: 1 },
    { name: 'Development Team', title: 'Android & Web Development', img: 2 },
    { name: 'Design Team', title: 'UI/UX & Creative', img: 3 },
    { name: 'Marketing Team', title: 'SMM, SEO & Content', img: 4 },
  ];

  const culture = [
    {
      title: 'Teamwork',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600',
      description: 'Collaborative environment where everyone thrives',
    },
    {
      title: 'Innovation',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600',
      description: 'Encouraging creative thinking and bold ideas',
    },
    {
      title: 'Collaboration',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
      description: 'Working together to achieve extraordinary results',
    },
    {
      title: 'Learning',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      description: 'Continuous growth and skill development',
    },
    {
      title: 'Workspace',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
      description: 'Modern facilities designed for productivity',
    },
    {
      title: 'Celebration',
      image: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=600',
      description: 'Recognizing achievements and milestones',
    },
  ];

  const milestones = [
    { year: 2020, title: 'Sdev In Tech Founded', description: 'Started with a vision to deliver premium digital solutions at affordable prices', icon: RocketLaunchIcon },
    { year: 2021, title: 'First Websites Launched', description: 'Delivered our first batch of professional business websites across industries', icon: UserGroupIcon },
    { year: 2022, title: 'Mobile App Development', description: 'Launched New Upasam App & Royal Educare App on Google Play Store', icon: ChartBarIcon },
    { year: 2023, title: '4+ Apps Live', description: 'Digital Health Record, Local Service Box & Innocricket App deployed successfully', icon: SparklesIcon },
    { year: 2024, title: '6th App Delivered', description: 'Ridodrop Pickup & Drop App built — 6 Android apps live in market', icon: CheckBadgeIcon },
    { year: 2025, title: 'Performance Marketing', description: 'Full SMM + SEO service launched at ₹16,000/month — ROI-driven growth for clients', icon: LightBulbIcon },
  ];

  const benefits = [
    {
      icon: TrophyIcon,
      title: '4+ Apps on Play Store',
      description: 'Android apps across healthcare, education, service booking and digital record management — all live',
    },
    {
      icon: AcademicCapIcon,
      title: '8+ Websites Delivered',
      description: 'Restaurant, resort, healthcare, pharma, fashion, education — all mobile-first with modern UI/UX',
    },
    {
      icon: ChartBarIcon,
      title: '3+ E-Commerce Stores',
      description: 'Full stores with product management, cart, order system and conversion-optimised checkout',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Affordable Pricing',
      description: 'Portfolio valued ₹15L–₹25L in market rates. You get premium quality without the premium price tag',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Transparent Communication',
      description: 'Clear updates, honest timelines and dedicated support at every stage of your project',
    },
    {
      icon: HeartIcon,
      title: 'Long-term Partnerships',
      description: 'We don\'t just close projects — we build trusted, long-term client relationships',
    },
  ];

  const testimonials = [
    {
      quote: 'Working with this team transformed our business. Their expertise in AI and cloud solutions helped us scale rapidly.',
      name: 'Robert Chen',
      company: 'TechCorp Inc.',
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      quote: 'The best development partner we\'ve ever had. Professional, responsive, and incredibly talented.',
      name: 'Amanda Foster',
      company: 'Digital Ventures',
      image: 'https://i.pravatar.cc/150?img=45',
    },
    {
      quote: 'Their innovative approach and attention to detail exceeded our expectations. Highly recommended!',
      name: 'James Wilson',
      company: 'StartupHub',
      image: 'https://i.pravatar.cc/150?img=33',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const locations = [
    { city: 'San Francisco', country: 'USA', x: 15, y: 35 },
    { city: 'London', country: 'UK', x: 48, y: 30 },
    { city: 'Singapore', country: 'Singapore', x: 75, y: 55 },
    { city: 'Dubai', country: 'UAE', x: 58, y: 45 },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          {/* Gradient Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-cyan-500/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[400px] md:h-[400px] bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
            className="absolute top-1/2 right-1/3 w-48 h-48 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl"
          />
          {/* Dot grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.04) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Your Complete Digital Partner
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Websites · Mobile Apps · Performance Marketing
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Premium quality at affordable pricing — built to generate growth, visibility and long-term success for startups, SMEs and enterprises across India.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14, 165, 233, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            Discover Our Story
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div className="mb-4">
                <stat.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 to-blue-950/30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Sdev In Tech is a results-driven digital solutions company delivering end-to-end services in Website Development, E-Commerce Solutions, Mobile Application Development, and Performance Marketing.
                </p>
                <p>
                  We build scalable digital products designed to enhance brand visibility, generate qualified leads, and increase business revenue. Our approach combines modern technology, strategic marketing, and conversion-focused design to deliver measurable growth.
                </p>
                <p>
                  Our combined portfolio reflects projects valued at over ₹15 Lakhs to ₹25 Lakhs in market standards — delivered across healthcare, education, restaurants, fashion, pharma, retail and service-based industries across India.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ParallaxSection>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent" />
                </div>
              </ParallaxSection>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Our Values
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
              >
                <div className="mb-6">
                  <value.icon className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Our Culture
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {culture.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.h3
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    className="text-2xl font-bold mb-2 text-white"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 opacity-0 group-hover:opacity-100"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 to-purple-950/30" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600"
            />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="text-cyan-400 font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </motion.div>
                </div>

                <div className="w-2/12 flex justify-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center border-4 border-black">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      {/* <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200"
            alt="World map"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Global Presence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-lg mb-16"
          >
            Serving clients across continents with local expertise
          </motion.p>

          <div className="relative h-96">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="absolute group cursor-pointer"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-cyan-500 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-white/10 rounded-lg px-4 py-2 whitespace-nowrap border border-cyan-500/30"
                >
                  <div className="text-white font-bold">{location.city}</div>
                  <div className="text-cyan-400 text-sm">{location.country}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Work With Us */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Why Work With Us
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)'
                }}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <benefit.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 to-blue-950/30" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            What Our Clients Say
          </motion.h2>

          <div className="relative h-96 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentTestimonial === index ? 1 : 0,
                  scale: currentTestimonial === index ? 1 : 0.8,
                  x: currentTestimonial === index ? 0 : index < currentTestimonial ? -100 : 100,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${currentTestimonial === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-12 border border-cyan-500/20 h-full flex flex-col justify-center">
                  <div className="text-cyan-400 text-6xl mb-6">"</div>
                  <p className="text-xl text-gray-300 mb-8 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-500"
                    />
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.company}</div>
                    </div>
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
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === index ? 'bg-cyan-500 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
            alt="Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 to-purple-950/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">Our Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Trusted Digital Transformation Partner for India
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            To become a trusted digital transformation partner for startups, SMEs, and enterprises across India by delivering scalable technology solutions and measurable marketing growth.
          </p>
          <p className="text-base text-gray-400 mb-10">
            Phone: <a href="tel:+919381820806" className="text-cyan-400 hover:underline">+91 93818 20806</a> &nbsp;·&nbsp; Website: <a href="https://www.sdevintech.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">www.sdevintech.com</a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/30"
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              View Open Positions
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
