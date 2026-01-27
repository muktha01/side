'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Customer Success', href: '#success' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms Of Use', href: '#terms' },
  ];

  const services = [
    { name: 'Software & App Development', href: '/services/software-app-development' },
    { name: 'Website Solutions', href: '/services/website-solutions' },
    { name: 'UI/UX Design', href: '/services/uiux-design' },
    { name: 'Mobile App Development', href: '/services/mobile-app' },
    { name: 'Web App Development', href: '/services/web-app' },
    { name: 'Design & Creative Services', href: '/services/design-creative' },
    { name: 'Business Automation Systems', href: '/services/business-automation' },
    { name: 'Communication & Marketing Tools', href: '/services/communication-marketing' },
    { name: 'Artificial Intelligence (AI)', href: '/services/ai' },
    { name: 'Data Analytics & Data Science', href: '/services/data-analytics' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Training Institute', href: '/services/training-institute' },
    { name: 'Job Support & Career Services', href: '/services/job-support-career' },
    { name: 'Civil & Design Courses', href: '/services/civil-design-courses' },
  ];

  const compliance = [
    'ISO 27001:2022',
    'ISO 9001:2015',
    'SOC 2 Type 2',
    'GDPR',
    'ISMS Policy',
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-black to-gray-900/50 border-t border-white/10 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-6 group">
              <img 
                src="/images/logo.png" 
                alt="SDEV Solutions Logo" 
                className="h-8 md:h-10 w-auto"
              />
              <span className="text-white font-bold text-base md:text-lg">
                SDEV Solutions
              </span>
            </Link>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Software Development Company for Scalable & Innovative Solutions
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-light hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-white/10 hover:border-primary/50"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-light hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-white/10 hover:border-primary/50"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-light hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-white/10 hover:border-primary/50"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-light hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-white/10 hover:border-primary/50"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xs md:text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-xs md:text-sm inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Offices */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">Compliances</h3>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {compliance.map((item) => (
                <li key={item} className="text-gray-400 text-xs md:text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-6">Bangalore Office</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Marathahalli
              <br />
              Bangalore, Karnataka
              <br />
              India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              © {currentYear} SDEV Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="#privacy"
                className="text-gray-500 hover:text-cyan-400 transition-colors duration-200 text-xs md:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-gray-500 hover:text-cyan-400 transition-colors duration-200 text-xs md:text-sm"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Book a Meeting Button (Fixed) */}
        <motion.a
          href="https://wa.me/919381820806?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-4 md:bottom-8 md:right-8 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-xs md:text-sm shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 z-40 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="hidden sm:inline">Book Meeting</span>
          <span className="sm:hidden">Chat</span>
        </motion.a>
      </div>
    </footer>
  );
}
