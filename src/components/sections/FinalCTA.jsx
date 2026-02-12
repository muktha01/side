'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowRight, Rocket, Zap, Target } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full border border-cyan-500/50"
          >
            <span className="text-cyan-300 font-semibold flex items-center gap-2 justify-center">
              <Rocket className="w-4 h-4" /> Let's Build Something Amazing
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Whether you need a website, mobile app, digital marketing, training, or a loan - 
            we're here to help you succeed. Get started today with a free consultation!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <MessageCircle className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">WhatsApp Us</h3>
              <p className="text-gray-400 text-sm mb-3">Quick response guaranteed</p>
              <a href="https://wa.me/919381820806" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm font-semibold hover:text-cyan-300">
                +91 93818 20806
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <Phone className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-3">Available 24/7</p>
              <a href="tel:+919381820806" className="text-blue-400 text-sm font-semibold hover:text-blue-300">
                +91 93818 20806
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10"
            >
              <Mail className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-3">Detailed inquiries</p>
              <a href="mailto:info@sdev.digital" className="text-purple-400 text-sm font-semibold hover:text-purple-300">
                info@sdev.digital
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/919381820806?text=Hi%2C%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start a Conversation
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Form
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available Now</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Fast Response Time</span>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Free Consultation</span>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <span className="flex items-center gap-2"><Target className="w-4 h-4" /> 5+ Years Experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
