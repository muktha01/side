'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/sections/Header';
import { Globe, TrendingUp, DollarSign, Heart, Award, Users, Scale, BookOpen, HeartPulse } from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    position: '',
    coverLetter: '',
    whyJoin: '',
    resume: null
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const benefits = [
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Work from anywhere in the world with flexible hours'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Clear career progression paths and mentorship programs'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Market-leading salaries and performance bonuses'
    },
    {
      icon: Scale,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and generous PTO policy'
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and certifications'
    },
    {
      icon: HeartPulse,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance and wellness programs'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and encourage creative problem-solving.',
      gradient: 'from-[#0EA5E9] to-[#06B6D4]'
    },
    {
      title: 'Collaborative Culture',
      description: 'We believe in teamwork, open communication, and supporting each other.',
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      title: 'Customer Success',
      description: 'Our clients\' success drives everything we do, from design to deployment.',
      gradient: 'from-[#F59E0B] to-[#EF4444]'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth through training and development opportunities.',
      gradient: 'from-[#10B981] to-[#3B82F6]'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We\'re looking for an experienced full stack developer to join our engineering team.'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful, user-centered designs for web and mobile applications.'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Build and maintain our infrastructure and deployment pipelines.'
    },
    {
      id: 4,
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop innovative AI solutions and machine learning models for our clients.'
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Contract',
      description: 'Drive our digital marketing strategy and grow our online presence.'
    }
  ];

  const departments = ['All', ...new Set(openPositions.map(job => job.department))];

  const filteredJobs = filterDepartment === 'All' 
    ? openPositions 
    : openPositions.filter(job => job.department === filterDepartment);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData({ ...formData, position: job.title });
    setIsApplicationModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors({ ...formErrors, resume: 'File size must be less than 5MB' });
        return;
      }
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFormErrors({ ...formErrors, resume: 'Only PDF and DOC files are allowed' });
        return;
      }
      setFormData({ ...formData, resume: file });
      setFormErrors({ ...formErrors, resume: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.position) errors.position = 'Please select a position';
    if (!formData.resume) errors.resume = 'Resume is required';
    if (!formData.coverLetter.trim()) errors.coverLetter = 'Cover letter is required';
    if (!formData.whyJoin.trim()) errors.whyJoin = 'This field is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsApplicationModalOpen(false);
      setSubmitSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        position: '',
        coverLetter: '',
        whyJoin: '',
        resume: null
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#0EA5E9] to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build Your Career with SDEV
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join a team of innovators, creators, and problem solvers shaping the future of technology
            </motion.p>
            <motion.button
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#0EA5E9]/30 hover:shadow-xl hover:shadow-[#0EA5E9]/40 transition-all duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black/95">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-xl text-white/60">Benefits and perks that make SDEV a great place to work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-[#0EA5E9]/50 hover:shadow-lg hover:shadow-[#0EA5E9]/20 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon && React.createElement(benefit.icon, { 
                    className: "w-12 h-12 text-cyan-400",
                    strokeWidth: 1.5 
                  })}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#0EA5E9] transition-colors duration-300">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-white/60">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className={`w-16 h-1 bg-gradient-to-r ${value.gradient} mb-6 rounded-full`}></div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/70 text-lg">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gradient-to-b from-black to-black/95">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-white/60">Find your perfect role and join our team</p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilterDepartment(dept)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filterDepartment === dept
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-[#0EA5E9]/50 hover:shadow-xl hover:shadow-[#0EA5E9]/20 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#0EA5E9] transition-colors duration-300">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/60 mb-6">{job.description}</p>
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/30 transition-all duration-300 group-hover:scale-105"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-white/60 mb-6">No positions available in this department at the moment.</p>
              <button
                onClick={() => setFilterDepartment('All')}
                className="text-[#0EA5E9] hover:text-[#06B6D4] transition-colors duration-300"
              >
                View all positions
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#8B5CF6]/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
              onClick={() => {
                setSelectedJob(null);
                setFormData({ ...formData, position: 'General Application' });
                setIsApplicationModalOpen(true);
              }}
              className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#0EA5E9]/30 hover:shadow-xl hover:shadow-[#0EA5E9]/40 transition-all duration-300 hover:scale-105"
            >
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplicationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => !isSubmitting && setIsApplicationModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl w-full my-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {!submitSuccess ? (
                <>
                  {/* Close Button */}
                  <button
                    onClick={() => !isSubmitting && setIsApplicationModalOpen(false)}
                    disabled={isSubmitting}
                    className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-300 disabled:opacity-50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <h2 className="text-3xl font-bold mb-2">Apply for Position</h2>
                  <p className="text-white/60 mb-8">
                    {selectedJob ? selectedJob.title : 'General Application'}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-white/80 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                      {formErrors.fullName && <p className="text-red-400 text-sm mt-1">{formErrors.fullName}</p>}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 mb-2 font-medium">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                        {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2 font-medium">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                        {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>

                    {/* LinkedIn and Portfolio */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 mb-2 font-medium">LinkedIn Profile</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all duration-300"
                          placeholder="linkedin.com/in/johndoe"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2 font-medium">Portfolio/Website</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all duration-300"
                          placeholder="johndoe.com"
                        />
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-white/80 mb-2 font-medium">Resume *</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="flex items-center justify-center w-full bg-white/5 border-2 border-dashed border-white/20 rounded-xl px-4 py-8 cursor-pointer hover:border-[#0EA5E9] hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="text-center">
                            <svg className="w-12 h-12 mx-auto mb-2 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-white/60">
                              {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                            </p>
                            <p className="text-white/40 text-sm mt-1">PDF, DOC, DOCX (max 5MB)</p>
                          </div>
                        </label>
                      </div>
                      {formErrors.resume && <p className="text-red-400 text-sm mt-1">{formErrors.resume}</p>}
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label className="block text-white/80 mb-2 font-medium">Cover Letter *</label>
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your experience and qualifications..."
                      />
                      {formErrors.coverLetter && <p className="text-red-400 text-sm mt-1">{formErrors.coverLetter}</p>}
                    </div>

                    {/* Why Join */}
                    <div>
                      <label className="block text-white/80 mb-2 font-medium">Why do you want to join SDEV? *</label>
                      <textarea
                        name="whyJoin"
                        value={formData.whyJoin}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all duration-300 resize-none"
                        placeholder="What excites you about working with us?"
                      />
                      {formErrors.whyJoin && <p className="text-red-400 text-sm mt-1">{formErrors.whyJoin}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#0EA5E9]/30 hover:shadow-xl hover:shadow-[#0EA5E9]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                    className="w-20 h-20 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">Application Submitted!</h3>
                  <p className="text-white/70 text-lg">Thank you for applying. We'll review your application and get back to you soon.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
