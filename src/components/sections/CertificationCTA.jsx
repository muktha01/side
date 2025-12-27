'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function CertificationCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative bg-dark-900/50 overflow-hidden" ref={ref}>
      <div className="container section-padding relative z-10">
        <div className="row">
          <div className="col-lg-9">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-8xl font-bold mb-4">
                Get <br /> Certified!
              </h2>
            </motion.div>
          </div>
          
          <div className="col-lg-3 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-white/70">
                Upgrade your skills with SkillCentral's certification program and stand out in your career with a recognized credential. Explore our leading certification courses in Hyderabad to advance your professional journey.
              </p>
            </motion.div>
          </div>
          
          <div className="col-lg-3 flex items-center mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact" className="group relative block">
                <div className="relative w-40 h-40 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-primary transition-all duration-300">
                  <div className="absolute inset-0 rounded-full animate-spin-slow">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                      </defs>
                      <text className="text-xs fill-white uppercase tracking-wider">
                        <textPath href="#circlePath" startOffset="0%">
                          Contact us - Contact us - 
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 18 18" 
                      fill="none" 
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="col-lg-9 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <img 
                src="/placeholder-certificate.png" 
                alt="Certificate" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/placeholder-pattern.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px'
        }} />
      </div>
    </section>
  );
}
