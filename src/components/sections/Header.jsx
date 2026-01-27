'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'Services', 
      href: '#services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Software & App Development', href: '/services/software-app-development' },
        { name: 'Website Solutions', href: '/services/website-solutions' },
        { name: 'UI/UX Design', href: '/services/uiux-design' },
        { name: 'Mobile App Development', href: '/services/mobile-app' },
        { name: 'Web App Development', href: '/services/web-app' },
        { name: 'Design & Creative Services', href: '/services/design-creative' },
        { name: 'Business Automation Systems', href: '/services/business-automation' },
        { name: 'Communication & Marketing Tools', href: '/services/communication-marketing' },
        { name: 'Artificial Intelligence (AI)', href: '/services/ai' },
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'Training Institute', href: '/services/training-institute' },
        { name: 'Job Support & Career Services', href: '/services/job-support-career' },
        { name: 'Civil & Design Courses', href: '/services/civil-design-courses' },
        { name: 'Loans', href: '/services/loans' },
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-cyan-500/5'
          : 'bg-black/80 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.png"
                alt="SDEV Solutions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-bold text-base md:text-lg tracking-tight">
              SDEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1 whitespace-nowrap py-2"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 opacity-60 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute left-0 top-full pt-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-gradient-to-br from-black/98 to-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden w-[600px]">
                      <div className="grid grid-cols-2 gap-1 py-4 px-3">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="group/item relative px-5 py-4 text-white/70 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-[#0EA5E9]/20 hover:via-[#0EA5E9]/10 hover:to-transparent border border-transparent hover:border-[#0EA5E9]/30 hover:shadow-lg hover:shadow-[#0EA5E9]/20 text-left overflow-hidden"
                          >
                            {/* Animated background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/0 via-[#0EA5E9]/5 to-[#0EA5E9]/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 -translate-x-full group-hover/item:translate-x-full transform" style={{ transitionDuration: '600ms' }}></div>
                            
                            {/* Left accent bar */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#0EA5E9] to-[#06B6D4] opacity-0 group-hover/item:opacity-100 group-hover/item:h-3/4 transition-all duration-300 rounded-r-full"></div>
                            
                            <span className="relative text-sm font-medium block group-hover/item:translate-x-1 transition-transform duration-300">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-[#0EA5E9] text-white font-semibold text-base hover:bg-[#0284C7] transition-colors duration-200 shadow-lg shadow-[#0EA5E9]/20"
              style={{ 
                paddingLeft: '1.5rem', 
                paddingRight: '1.5rem', 
                paddingTop: '0.5rem', 
                paddingBottom: '0.5rem',
                borderRadius: '0.375rem'
              }}
            >
              Contact
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gradient-to-b from-black/98 to-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-white font-medium hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent rounded-xl transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.name && item.dropdownItems && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-1 space-y-1 overflow-hidden"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2.5 text-sm text-white/70 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-transparent rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-500/10"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white font-medium hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent rounded-xl transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <Link href="/contact" className="block mt-6" onClick={() => setIsMobileMenuOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
