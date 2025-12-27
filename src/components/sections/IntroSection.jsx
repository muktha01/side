'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="row"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div className="col-lg-4" variants={fadeIn}>
            <div className="md-mb50">
              <img 
                src="/placeholder-team.jpg" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-lg"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
          
          <motion.div className="col-lg-5 flex items-center" variants={fadeIn}>
            <div className="md-mb50">
              <p className="text-lg leading-relaxed">
                WEBSOC.AI is a software company dedicated to crafting AI-powered applications that enhance user experiences, specializing in the development of enterprise-focused AI and GenAI products. We have launched our own advanced training and internship program - SkillCentral. Our programs offer advanced training on cutting-edge technologies, seamlessly integrated with AI.
              </p>
            </div>
          </motion.div>
          
          <motion.div className="col-lg-3" variants={fadeIn}>
            <div className="mt-8">
              <img 
                src="/placeholder-teamwork.jpg" 
                alt="Teamwork" 
                className="w-full h-auto rounded-lg"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
