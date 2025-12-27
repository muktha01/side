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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    { number: 10, suffix: '+', label: 'Years Experience', icon: ClockIcon },
    { number: 500, suffix: '+', label: 'Projects Delivered', icon: CheckBadgeIcon },
    { number: 200, suffix: '+', label: 'Happy Clients', icon: HeartIcon },
    { number: 50, suffix: '+', label: 'Team Members', icon: UserGroupIcon },
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to deliver next-generation solutions',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality',
      description: 'Delivering excellence in every project with meticulous attention to detail',
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'Working closely with our clients as true partners in success',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Integrity',
      description: 'Transparent and honest communication in everything we do',
    },
    {
      icon: ChartBarIcon,
      title: 'Growth',
      description: 'Continuous learning and improvement to stay ahead of the curve',
    },
    {
      icon: SparklesIcon,
      title: 'Impact',
      description: 'Creating solutions that make a meaningful difference',
    },
  ];

  const team = [
    { name: 'John Anderson', title: 'CEO & Founder', img: 1 },
    { name: 'Sarah Chen', title: 'Chief Technology Officer', img: 2 },
    { name: 'Michael Roberts', title: 'Head of Design', img: 3 },
    { name: 'Emily Taylor', title: 'Head of Engineering', img: 4 },
    { name: 'David Kumar', title: 'Head of AI & ML', img: 5 },
    { name: 'Jessica Martinez', title: 'Head of Sales', img: 6 },
    { name: 'Alex Johnson', title: 'Head of Operations', img: 7 },
    { name: 'Lisa Wang', title: 'Head of Product', img: 8 },
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
    { year: 2015, title: 'Company Founded', description: 'Started with a vision to transform digital experiences', icon: RocketLaunchIcon },
    { year: 2016, title: 'First 10 Clients', description: 'Established strong foundation with early adopters', icon: UserGroupIcon },
    { year: 2017, title: 'Team Expansion', description: 'Grew to 20 talented professionals', icon: ChartBarIcon },
    { year: 2018, title: 'AI Division Launch', description: 'Expanded services to include AI and ML solutions', icon: SparklesIcon },
    { year: 2019, title: '100+ Projects', description: 'Milestone achievement in project delivery', icon: CheckBadgeIcon },
    { year: 2020, title: 'Global Reach', description: 'Expanded operations internationally', icon: GlobeAltIcon },
    { year: 2022, title: 'Innovation Hub', description: 'Opened R&D center for emerging technologies', icon: LightBulbIcon },
    { year: 2024, title: '500+ Projects', description: 'Reached new heights in client satisfaction', icon: TrophyIcon },
  ];

  const benefits = [
    {
      icon: AcademicCapIcon,
      title: 'Expert Team',
      description: 'Highly skilled professionals with deep industry expertise',
    },
    {
      icon: TrophyIcon,
      title: 'Proven Track Record',
      description: '500+ successful projects delivered on time and budget',
    },
    {
      icon: BoltIcon,
      title: 'Agile Methodology',
      description: 'Fast, flexible, and adaptive development approach',
    },
    {
      icon: ClockIcon,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your peace of mind',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Pricing',
      description: 'Premium quality at fair and transparent rates',
    },
    {
      icon: HeartIcon,
      title: 'Long-term Partnership',
      description: 'Building lasting relationships with our clients',
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
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950">
          <FloatingParticles />
        </div>

        {/* Parallax Background Image */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 opacity-20"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </motion.div>

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
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Building Digital Excellence Since 2015
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-12"
          >
            We Transform Ideas into Powerful Digital Solutions
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
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4"
              >
                <stat.icon className="w-12 h-12 text-cyan-400" />
              </motion.div>
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
                  Founded in 2015, we started with a simple yet powerful vision: to bridge the gap between innovative technology and business success. What began as a small team of passionate developers has grown into a global force in digital transformation.
                </p>
                <p>
                  Over the past decade, we've evolved from a local startup to an international software development powerhouse. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs.
                </p>
                <p>
                  Today, we're proud to serve clients across continents, delivering cutting-edge solutions in AI, cloud computing, mobile development, and enterprise software. Our success is measured not just in projects delivered, but in the lasting partnerships we've built and the real-world impact we've created.
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
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <value.icon className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 to-cyan-950/30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Meet Our Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-lg mb-16"
          >
            The visionaries driving innovation and excellence
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={`https://i.pravatar.cc/300?img=${member.img}`}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.title}</p>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="inline-block text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                </div>
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

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="w-2/12 flex justify-center relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center border-4 border-black">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-4 relative overflow-hidden">
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
      </section>

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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Want to Be Part of Our Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join our talented team and help shape the future of digital innovation. We're always looking for passionate individuals who want to make a difference.
          </p>

          <motion.a
            href="/careers"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-75 blur-lg"
            />
            <div className="relative px-10 py-5 bg-black rounded-full border-2 border-transparent group-hover:border-cyan-400 transition-all">
              <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                View Open Positions
              </span>
            </div>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
