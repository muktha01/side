'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function EnrollmentForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    passedoutYear: '',
    branch: '',
    city: '',
    highestQualification: '',
    course: '',
    duration: '',
    howDidYouKnow: ''
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    }
    
    if (name === 'mobile' && value && !validateMobile(value)) {
      setErrors(prev => ({ ...prev, mobile: 'Please enter a valid 10-digit mobile number' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!validateMobile(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="section-padding relative overflow-hidden bg-dark-900/30" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(/placeholder-background.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/90 to-dark-950/70" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="row items-center">
            <div className="col-11 flex items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Secure your spot in our Advanced Training and Internship Program
                </h2>
              </div>
              <div className="ml-auto hidden lg:block">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
                  <span className="text-primary font-bold">Enroll Now</span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 18 18" 
                    fill="none" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  >
                    <path
                      d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="row"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-lg-8 offset-lg-1">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12">
              <div className="row">
                <div className="col-lg-6 mb-8">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="col-lg-6 mb-8">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email"
                      required
                      className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-2 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6 mb-8">
                  <div>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Mobile Number"
                      required
                      className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-sm mt-2 block">{errors.mobile}</span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6 mb-8">
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="College Name"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="col-lg-6 mb-8">
                  <input
                    type="text"
                    name="passedoutYear"
                    value={formData.passedoutYear}
                    onChange={handleChange}
                    placeholder="Passed Out Year"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="col-lg-6 mb-8">
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Branch"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="col-lg-6 mb-8">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="col-lg-6 mb-8">
                  <input
                    type="text"
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    placeholder="Highest Qualification"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="col-lg-6 mb-8">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  >
                    <option value="" disabled className="bg-dark-950">Program Type</option>
                    <option value="FullStack" className="bg-dark-950">Full Stack</option>
                    <option value="DigitalMarketing" className="bg-dark-950">Digital Marketing</option>
                    <option value="DataAnalytics" className="bg-dark-950">Data Analytics</option>
                    <option value="MachineLearning" className="bg-dark-950">Machine Learning</option>
                  </select>
                </div>

                <div className="col-lg-6 mb-8">
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  >
                    <option value="" disabled className="bg-dark-950">Course Duration</option>
                    <option value="4months" className="bg-dark-950">4 months</option>
                    <option value="3months" className="bg-dark-950">3 months</option>
                  </select>
                </div>

                <div className="col-lg-12 mb-8">
                  <input
                    type="text"
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleChange}
                    placeholder="How do you know about us..?"
                    required
                    className="w-full bg-transparent border border-white/20 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="col-12">
                  <motion.button
                    type="submit"
                    className="px-12 py-4 bg-transparent border-2 border-white/20 rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </motion.button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
