'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown open with instant show
  const handleDropdownEnter = (itemName) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  // Handle dropdown close with delay
  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setCloseTimeout(timeout);
  };

  const serviceCategories = [
    { name: 'Website & App Development', href: '/services/website-app-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'AI Tools', href: '/services/ai-tools' },
    { name: 'Recruitment & Staffing Solutions', href: '/services/recruitment-staffing' },
    { name: 'Loans', href: '/services/loans' },
    { name: 'Real Estate', href: '/services/real-estate' },
    { name: 'Training', href: '/services/training' },
    { name: 'Media Production', href: '/services/media-production' },
  ];

  const menuItems = [
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: serviceCategories
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
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
              >
                <Link
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap py-2 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2 z-50"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={() => handleDropdownLeave()}
                  >
                    <div className="w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                      <div className="p-2">
                        {item.dropdownItems.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent rounded-xl transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                              <span>{dropdownItem.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 py-3 border-t border-white/10 bg-white/5">
                        <Link
                          href="/services"
                          className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
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
