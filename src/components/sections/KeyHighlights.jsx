'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function KeyHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: "0",
      title: "Real-Time Projects",
      description: "Work on real-time projects that simulate a corporate environment. Gain practical experience and develop skills that are immediately applicable in your workplace."
    },
    {
      icon: "1",
      title: "Corporate Environment",
      description: "Our training programs are designed to mirror a corporate environment, giving you a feel for what it's like to work in a professional setting from day one."
    },
    {
      icon: "2",
      title: "Expert Guidance",
      description: "Learn from industry veterans and experts who bring years of experience and knowledge. Their insights will provide you with a deeper understanding of the subject matter."
    },
    {
      icon: "1",
      title: "Interview Preparation",
      description: "Ace your interviews with our comprehensive interview preparation modules. From mock interviews to resume building workshops, we ensure you're fully prepared to impress potential employers."
    },
    {
      icon: "2",
      title: "Global Certifications",
      description: "Gain credentials that are recognized worldwide. Our program offers certifications from leading global institutions, making your resume stand out to employers everywhere."
    },
    {
      icon: "1",
      title: "Placement Assistance",
      description: "We understand that acquiring new skills is just one part of the equation. Our dedicated placement assistance ensures that you land your dream job. Benefit from our extensive network of industry connections and get placed in top companies globally."
    }
  ];

  return (
    <section className="section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="row">
            <div className="col-lg-7">
              <h2 className="text-4xl md:text-5xl font-bold">
                Discover the standout highlights of our programs
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="row">
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              className="col-lg-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="flex gap-6 mb-8 glass rounded-2xl p-8 group cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(14, 165, 233, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 glass rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg 
                        className="w-6 h-6 text-primary" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 10V3L4 14h7v7l9-11h-7z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
