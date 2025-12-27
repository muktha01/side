'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProgramGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryItems = [
    {
      title: "Team work",
      image: "/placeholder-teamwork.jpg",
      size: "col-lg-5"
    },
    {
      title: "Technologies, Tools & Concepts",
      image: "/placeholder-tech.jpg",
      size: "col-lg-6 valign"
    },
    {
      title: "Culture",
      image: "/placeholder-culture.jpg",
      size: "col-lg-6 mt-80"
    },
    {
      title: "Self motivation",
      image: "/placeholder-motivation.jpg",
      size: "col-lg-6 valign mt-80"
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
            <div className="col-lg-4 mb-16">
              <h6 className="text-sm text-white/60 mb-2">Sneak Peak into Program</h6>
              <p className="text-xl">What you will learn and receive</p>
            </div>
            <div className="col-lg-5 offset-lg-3">
              <div className="text">
                <h6 className="text-6xl opacity-10 uppercase">Excellence</h6>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="row justify-content-center">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              className={item.size}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={index > 1 ? 'item' : 'item md-mb50'}>
                <div className="row justify-content-center">
                  <div className={index === 0 ? 'col-12' : 'col-lg-8'}>
                    <motion.div 
                      className="relative overflow-hidden rounded-2xl group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[4/3] bg-dark-800">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    
                    <div className="mt-8 flex items-center justify-between">
                      <div>
                        <h6 className="text-xl font-semibold">{item.title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
