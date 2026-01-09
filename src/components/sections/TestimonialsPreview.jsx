'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      image: '👨‍💼',
      rating: 5,
      text: 'Sdev transformed our business with their custom CRM solution. The team is professional, responsive, and delivered beyond our expectations. Our sales have increased by 45% since implementation.',
      project: 'CRM Development'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Head, Fashion Hub',
      image: '👩‍💼',
      rating: 5,
      text: 'Their digital marketing services are outstanding! Our social media engagement grew 300% in just 3 months. The WhatsApp bulk messaging tool has been a game-changer for customer communication.',
      project: 'Digital Marketing'
    },
    {
      name: 'Vikram Patel',
      role: 'Founder, EduTech Solutions',
      image: '👨‍🎓',
      rating: 5,
      text: 'The training program was exceptional. I learned web development from scratch and now I am running my own development agency. The hands-on projects and placement support were invaluable.',
      project: 'Training Program'
    },
    {
      name: 'Anita Reddy',
      role: 'Owner, Retail Chain',
      image: '👩‍💻',
      rating: 5,
      text: 'Got a business loan of ₹15 lakhs approved in just 48 hours! The process was smooth, transparent, and hassle-free. Highly recommend their financial services.',
      project: 'Business Loan'
    },
    {
      name: 'Suresh Iyer',
      role: 'Director, Cloud9 Cafe',
      image: '👨‍🍳',
      rating: 5,
      text: 'Their mobile app development team created a beautiful food ordering app for our restaurant. Orders increased by 60% and customer satisfaction is at an all-time high!',
      project: 'Mobile App Development'
    },
    {
      name: 'Neha Verma',
      role: 'Startup Founder',
      image: '👩‍🚀',
      rating: 5,
      text: 'The HRM system has streamlined our entire HR operations. Payroll, attendance, leave management - everything is automated now. Saved us countless hours every month!',
      project: 'HRM System Implementation'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-400 font-semibold">Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real feedback from businesses and individuals we've helped grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-cyan-500/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{testimonial.text}</p>

              <div className="pt-4 border-t border-white/10">
                <span className="text-cyan-400 text-sm font-semibold">{testimonial.project}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">4.9/5</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">150+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Join our growing community of satisfied clients who trust Sdev for their digital needs
            </p>
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300"
            >
              View More Success Stories
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
