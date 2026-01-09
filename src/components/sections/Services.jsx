'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: '01',
    title: 'UI-UX Design',
    description:
      'As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. These intuitive experiences play a key role in custom software development services aimed at improving product usability.',
    image: '/images/home/uiux.svg',
  },
  {
    id: '02',
    title: 'Mobile Apps',
    description:
      'We specialize in the development of innovative and user-friendly mobile applications for both iOS and Android platforms. Our process encompasses every stage, from initial concept and design to final deployment.',
    image: '/images/home/mobile.svg',
  },
  {
    id: '03',
    title: 'Backend Development',
    description:
      'As an organization, we specialize in delivering responsive, secure, and user-friendly web solutions designed to enhance your online presence. With the expertise of a software development agency, we ensure your backend systems are scalable and future-ready.',
    image: '/images/home/backend.svg',
  },
  {
    id: '04',
    title: 'Web App Development',
    description:
      'We specialize in developing responsive web applications that deliver seamless user experiences across all devices and platforms.',
    image: '/images/home/frontend.svg',
  },
  {
    id: '05',
    title: 'Artificial Intelligence',
    description:
      'We harness the power of AI to transform raw information into intelligent insights that drive decision-making. Through advanced systems built by experienced AI software developers, organizations gain the clarity and precision needed for long-term growth.',
    image: '/images/home/ai.svg',
  },
  // {
  //   id: '06',
  //   title: 'Data Analysis & Data science',
  //   description:
  //     'We excel at uncovering data narratives through visualizations, forecasting, and insights that support strategic choices. These techniques are often embedded in custom application development services where real-time data plays a pivotal role in decision-making.',
  //   image: '/images/home/data.svg',
  // },
  {
    id: '07',
    title: 'Managed Cloud & DevOps',
    description:
      'We specialize in optimizing your cloud infrastructure and streamlining operations through Managed Cloud and DevOps services. These efforts are supported by custom web software development practices that emphasize automation, uptime, and agility.',
    image: '/images/home/cloud.svg',
  },
  {
    id: '08',
    title: 'No Code Development Tools',
    description:
      'Quickly build applications without needing technical skills. Create solutions with simple drag-and-drop tools. Ideal for teams that need to move fast without relying on developers.',
    image: '/images/home/uiux.svg',
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
    <section
      ref={containerRef}
      id="services"
      className="relative bg-black min-h-[350vh]"
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
  );
}
