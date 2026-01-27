'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: '01',
    title: 'Software & App Development',
    description:
      'Comprehensive software solutions including mobile app development for Android, iOS, and hybrid platforms. From app designing and UI/UX to custom software development, we deliver end-to-end solutions tailored to your business needs.',
    image: '/images/home/mobile.svg',
  },
  {
    id: '02',
    title: 'Website Solutions',
    description:
      'Professional web design and development services including static and dynamic websites, corporate and business sites, and full-featured e-commerce platforms. We create responsive, SEO-friendly websites that drive results.',
    image: '/images/home/frontend.svg',
  },
  {
    id: '03',
    title: 'Design & Creative Services',
    description:
      'Expert graphic design services including logo and branding design, social media creatives, and marketing and advertisement designs. We bring your brand vision to life with stunning visual content.',
    image: '/images/home/uiux.svg',
  },
  {
    id: '04',
    title: 'Business Automation Systems',
    description:
      'Streamline your operations with CRM, HRM, and ERP solutions. Our workflow and lead automation systems help you manage customer relationships, human resources, and enterprise processes efficiently.',
    image: '/images/home/backend.svg',
  },
  {
    id: '05',
    title: 'Communication & Marketing Tools',
    description:
      'Powerful marketing automation tools including WhatsApp bulk messaging, email marketing and bulk email sender, and SMS marketing solutions. Reach your audience effectively across multiple channels.',
    image: '/images/home/mobile.svg',
  },
  {
    id: '06',
    title: 'Digital Marketing Services',
    description:
      'Complete digital marketing solutions including social media marketing (SMM), paid advertising on Facebook, Instagram, LinkedIn & X, lead generation, brand growth, and online promotion strategies.',
    image: '/images/home/uiux.svg',
  },
  {
    id: '07',
    title: 'IT Training & Skill Development',
    description:
      'Industry-focused training programs in Java, Python, React, and full stack development. Learn with real-time projects, expert guidance, and hands-on experience to accelerate your tech career.',
    image: '/images/home/frontend.svg',
  },
  {
    id: '08',
    title: 'Job Support & Career Services',
    description:
      'Comprehensive career support including job support (backend/backdoor support), interview support, professional resume preparation, and placement assistance to help you land your dream job.',
    image: '/images/home/backend.svg',
  },
  {
    id: '09',
    title: 'Civil & Design Courses',
    description:
      'Professional training in planning and drafting, 3D design, interior design, and architectural visualization. Master the tools and techniques used by industry professionals.',
    image: '/images/home/uiux.svg',
  },
  {
    id: '10',
    title: 'Artificial Intelligence',
    description:
      'We harness the power of AI to transform raw information into intelligent insights that drive decision-making. Through advanced systems built by experienced AI software developers, organizations gain the clarity and precision needed for long-term growth.',
    image: '/images/home/ai.svg',
  },
  {
    id: '11',
    title: 'Managed Cloud & DevOps',
    description:
      'We specialize in optimizing your cloud infrastructure and streamlining operations through Managed Cloud and DevOps services. These efforts are supported by custom web software development practices that emphasize automation, uptime, and agility.',
    image: '/images/home/cloud.svg',
  },
  {
    id: '12',
    title: 'Data Analysis & Data Science',
    description:
      'We excel at uncovering data narratives through visualizations, forecasting, and insights that support strategic choices. These techniques are often embedded in custom application development services where real-time data plays a pivotal role in decision-making.',
    image: '/images/home/backend.svg',
  },
];

function ServiceVisual({ index, scrollProgress }) {
  // Calculate if this service is active based on scroll
  const isFirst = index === 0;
  const isLast = index === services.length - 1;
  const startProgress = index / services.length;
  const endProgress = (index + 1) / services.length;
  
  const opacity = useTransform(
    scrollProgress,
    [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
    isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  
  const scale = useTransform(
    scrollProgress,
    [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
    isFirst ? [1, 1, 1, 0.95] : isLast ? [0.95, 1, 1, 1] : [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Image container with glassmorphic background */}
      <div className="relative w-full max-w-lg aspect-square">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent rounded-3xl backdrop-blur-xl border border-white/5" />
        
        {/* Service Image */}
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-full h-full">
            <Image
              src={services[index].image}
              alt={services[index].title}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-50" />
      </div>
    </motion.div>
  );
}

function ServiceContent({ service, index, scrollProgress }) {
  const isFirst = index === 0;
  const isLast = index === services.length - 1;
  const startProgress = index / services.length;
  const midProgress = (index + 0.5) / services.length;
  const endProgress = (index + 1) / services.length;
  
  const opacity = useTransform(
    scrollProgress,
    [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
    isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  
  const x = useTransform(
    scrollProgress,
    [startProgress, startProgress + 0.05, endProgress - 0.05, endProgress],
    isFirst ? [0, 0, 0, 30] : isLast ? [-30, 0, 0, 0] : [-30, 0, 0, 30]
  );

  return (
    <motion.div
      style={{ opacity, x }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="space-y-6">
        {/* Index */}
        <div className="text-7xl font-bold text-white/5">
          {service.id}
        </div>

        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-light leading-relaxed max-w-xl">
          {service.description}
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#0EA5E9] text-white font-semibold text-sm hover:bg-[#0284C7] transition-colors duration-200 shadow-lg shadow-[#0EA5E9]/20 inline-block"
          style={{
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            borderRadius: '0.375rem',
          }}
        >
          Know More
        </motion.button>
      </div>
    </motion.div>
  );
}

function TimelineDot({ index, scrollProgress }) {
  const startProgress = index / services.length;
  const midProgress = (index + 0.5) / services.length;
  const endProgress = (index + 1) / services.length;
  
  const scale = useTransform(
    scrollProgress,
    [startProgress, midProgress, endProgress],
    [1, 1.8, 1]
  );
  
  const backgroundColor = useTransform(
    scrollProgress,
    [startProgress, midProgress, endProgress],
    ['rgba(255,255,255,0.2)', '#0EA5E9', 'rgba(255,255,255,0.2)']
  );

  return (
    <motion.div
      style={{ scale, backgroundColor }}
      className="w-3 h-3 rounded-full"
    />
  );
}

export default function Services() {
  const containerRef = useRef(null);
  
  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      {/* Desktop/Tablet Version - Hidden on Mobile */}
      <section
        ref={containerRef}
        id="services"
        className="hidden md:block relative bg-black min-h-[350vh]"
      >
        {/* Sticky container that holds the layout */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="container-custom w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr_1fr] gap-8 lg:gap-20 w-full items-center">
              
              {/* Timeline (far left) - hidden on mobile */}
              <div className="hidden lg:flex relative items-center">
                <div className="relative flex flex-col items-center h-[500px]">
                  {/* Vertical line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
                  
                  {/* Timeline dots */}
                  <div className="relative flex flex-col justify-between h-full z-10">
                    {services.map((service, index) => (
                      <TimelineDot
                        key={service.id}
                        index={index}
                        scrollProgress={scrollYProgress}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Left Content (sticky) */}
              <div className="relative h-full flex items-center">
                <div className="relative w-full h-96">
                  {services.map((service, index) => (
                    <ServiceContent
                      key={service.id}
                      service={service}
                      index={index}
                      scrollProgress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>

              {/* Right Visual (sticky) - hidden on mobile */}
              <div className="hidden lg:block relative h-full flex items-center">
                <div className="relative w-full h-96">
                  {services.map((service, index) => (
                    <ServiceVisual
                      key={service.id}
                      index={index}
                      scrollProgress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version - Compact Cards */}
      <section className="md:hidden relative bg-black py-12 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-light text-sm">Comprehensive solutions for your business</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-3 border border-white/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-10 h-10 relative mb-2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white leading-tight mb-1">{service.title}</h3>
                  <p className="text-xs text-gray-light leading-relaxed line-clamp-3 mb-2">{service.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
