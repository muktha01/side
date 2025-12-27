'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EligibilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eligibilityCategories = [
    {
      icon: "0",
      title: "Graduates Seeking Specialized Skills",
      description: "Are you a recent graduate looking for the best training programs in Hyderabad to gain practical skills in IT or non-IT fields? Our comprehensive programs are designed to equip you with industry-relevant knowledge and hands-on experience, setting you up for success in your chosen career path."
    },
    {
      icon: "1",
      title: "IT Professionals Looking to Upskill",
      description: "Are you an IT professional seeking the best software training in Hyderabad to enhance your expertise in cutting-edge technologies? Our advanced courses, including Java, Python, SQL, React.js, and more, are designed to keep you ahead in the rapidly evolving IT landscape. Gain hands-on experience with real-time projects and certification through our internship programs."
    },
    {
      icon: "2",
      title: "Non-IT Professionals Transitioning to Tech Careers",
      description: "Ready to make a career shift into the thriving tech industry? Our tailored training programs cater to professionals from diverse backgrounds, offering foundational knowledge and practical skills to succeed in tech roles. Start your journey towards a rewarding tech career today."
    },
    {
      icon: "0",
      title: "Career Switchers Exploring New Opportunities",
      description: "Considering a career change? SkillCentral offers the best training programs in Hyderabad for career switchers, providing specialized courses and internships. Whether you're shifting industries or upgrading your skills, our programs are designed to empower you to navigate your career transition with confidence."
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Discover Your Path: Who Can Enroll in SkillCentral's Premier Training Programs?
          </h2>
        </motion.div>

        <div className="row">
          {eligibilityCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="col-lg-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex gap-6 mb-8 glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-4">{category.title}</h5>
                  <p className="text-white/70 leading-relaxed">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
