'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const whyChooseUsItems = [
  {
    icon: '01',
    title: 'Comprehensive Training & Internship Programs',
    description: 'SkillCentral offers comprehensive training programs with internships in Hyderabad designed to enhance skills in both IT and non-IT fields.',
  },
  {
    icon: '02',
    title: 'Cutting-Edge Technologies',
    description: "Stay ahead with SkillCentral's courses covering C++, Java, Python, SQL, React.js, MERN stack, DevOps, and more, ensuring you're equipped for the modern tech landscape.",
  },
  {
    icon: '03',
    title: 'Engaging Classroom Training',
    description: 'Experience interactive sessions at SkillCentral that foster hands-on learning and collaboration, ensuring a dynamic training environment.',
  },
  {
    icon: '04',
    title: 'Personalized Career Support',
    description: "Benefit from personalized guidance and career counseling at SkillCentral, ensuring you're prepared to achieve your career goals.",
  },
  {
    icon: '05',
    title: 'Certification and Recognition',
    description: "Achieve recognized credentials through SkillCentral's certification programs, boosting your professional credibility.",
  },
];

const programs = [
  {
    title: 'Best Full Stack + Devops Training and Internship',
    description: 'Elevate your coding skills with our Full Stack Developer course. Learn to code like a pro from industry experts who bring real-world experience to the classroom.',
    link: '/fullstack-devops',
  },
  {
    title: 'Advanced Digital Marketing Training and Internship',
    description: 'Get the best digital marketing training in Hyderabad. Our course includes an internship, offering you hands-on experience and a certification to boost your resume.',
    link: '/digital-marketing',
  },
  {
    title: 'Data Analytics Training and Internship in Hyderabad',
    description: 'Master Python, Power BI, and other essential tools with the best data analytics training in Hyderabad. Our courses are designed to make you industry-ready.',
    link: '/data-analytics',
  },
  {
    title: 'Machine Learning Training and Internship',
    description: 'Step into the future with our machine learning training program. Gain practical experience and earn a certificate that sets you apart in the job market.',
    link: '/machine-learning',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(14, 165, 233, 0.1) 35px, rgba(14, 165, 233, 0.1) 70px)',
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* About Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20"
        >
          <div className="lg:col-span-4">
            <h6 className="text-primary text-sm font-semibold mb-2">About SkillCentral</h6>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Aimed at enhancing student&apos;s skills in a real-time environment.
              </h3>
            </div>
            <div className="md:ml-16">
              <p className="text-gray-light text-lg leading-relaxed">
                This initiative is designed to provide a comprehensive learning experience that will not only
                benefit the students but also the software industry. With a rewarding internship experience that can lead to immediate
                employment opportunities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Why Choose Us?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-dark-800 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                  <span className="text-3xl font-bold text-primary">{item.icon}</span>
                </div>
                <h5 className="text-xl font-bold text-white mb-4">{item.title}</h5>
                <p className="text-gray-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Programs Section */}
        <div className="mt-32 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
              >
                <h6 className="text-primary text-sm font-semibold mb-4">Our Programs</h6>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Empower Your Transformation with Premier Training Programs in Hyderabad.
                </h3>
                <div className="max-w-xl">
                  <p className="text-gray-light text-lg leading-relaxed">
                    At our esteemed institute, we are dedicated to helping you become the best version of yourself. 
                    Our comprehensive training and internship programs are meticulously designed to foster both personal and professional growth.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-500/10 rounded-2xl flex items-center justify-center border border-white/10"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-dark-800 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <h5 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h5>
                  <p className="text-gray-light text-sm leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                  <a
                    href={program.link}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-4 transition-all duration-300"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
