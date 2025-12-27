'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function TestimonialsVertical() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: "Navya Sri",
      rating: 5,
      text: "Training on websoc.ai has been a transformative experience. The training has truly elevated my skills, offering hands-on experience that's both challenging and rewarding. From day one, mentors have been readily available to offer support and advice, ensuring that I stay on track with my learning goals. Websoc.ai has been instrumental in my growth as a web developer providing me with the direction and support needed to succeed."
    },
    {
      name: "Anirudh Dontula",
      rating: 5,
      text: "I had a great experience during my internship at Websoc.ai on the Full Stack JavaScript course. I gained practical skills, collaborated with a talented team, and worked on projects, significantly enhancing my web development expertise. The supportive environment and real-world challenges made it an invaluable learning opportunity."
    },
    {
      name: "Shiva Krishna",
      rating: 5,
      text: "The WebSoc.AI Skill Central internship Program is outstanding, offering hands-on projects and expert mentorship in cutting-edge technologies and Digital Marketing. Perfect for aspiring tech professionals. Highly recommended!"
    },
    {
      name: "Parsha Raghuram",
      rating: 5,
      text: "I Had a Wonderful Experience in Websoc.ai Skillcentral Internship Training in Digital Marketing And The Skillcentral is the Best Platform For freshers to learn new Things and to Upgrade Skills."
    },
    {
      name: "Alekya Rangumudri",
      rating: 5,
      text: "I'm happy to share my experience with websoc.ai team. In this company the development team helped me to develop new skills. Company provides with all good facilities."
    },
    {
      name: "Lavanya C",
      rating: 5,
      text: "I am Happy to share my experience about this company, had good experience with everyone. Friendly environment in the office premises. Learning with practical experiments. Overall, I am satisfied with the way they teach."
    }
  ];

  return (
    <section className="section-padding bg-dark-900/30" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 flex items-center">
            <motion.div 
              className="pt-0 mt-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold mb-8">
                4.9 Google Reviews
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">G</span>
                </div>
                <h3 className="text-2xl">Total 5k+ Ratings</h3>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-6 offset-lg-1">
            <div className="relative h-[600px] overflow-hidden">
              <motion.div
                className="flex flex-col gap-8"
                animate={{
                  y: [0, -2000],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="glass rounded-3xl p-8 min-h-[280px]"
                  >
                    <div className="mb-8">
                      <div className="flex gap-1 mb-8 text-primary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h6 className="font-semibold">{testimonial.name}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-950 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
