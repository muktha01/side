'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadCaptureForm({ formType = 'contact', onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    file: null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = formType === 'quote' ? 3 : 2;

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return value && !/^\+?[\d\s-()]{10,}$/.test(value) ? 'Invalid phone number' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, file: 'File size must be less than 10MB' }));
      return;
    }
    setFormData(prev => ({ ...prev, file }));
    setErrors(prev => ({ ...prev, file: '' }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      const nameError = validateField('name', formData.name);
      const emailError = validateField('email', formData.email);
      const phoneError = validateField('phone', formData.phone);
      
      if (nameError) newErrors.name = nameError;
      if (emailError) newErrors.email = emailError;
      if (phoneError) newErrors.phone = phoneError;
    }
    
    if (step === 2 && formType === 'contact') {
      const messageError = validateField('message', formData.message);
      if (messageError) newErrors.message = messageError;
    }
    
    if (step === 2 && formType === 'quote') {
      if (!formData.service) newErrors.service = 'Please select a service';
      if (!formData.budget) newErrors.budget = 'Please select a budget range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
          file: null
        });
        setCurrentStep(1);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Animation
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center"
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/60">
          We've received your {formType === 'quote' ? 'quote request' : 'message'}. We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  i + 1 <= currentStep
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/5 border border-white/10 text-white/40'
                }`}
              >
                {i + 1}
              </div>
              {i < totalSteps - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded transition-all ${
                    i + 1 < currentStep ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm text-center">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Contact Info */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Your Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.phone ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Project Details (Quote) or Message (Contact) */}
        {currentStep === 2 && formType === 'quote' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.service ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="ai-automation">AI & Automation</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.budget ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors`}
                >
                  <option value="">Select budget</option>
                  <option value="5k-10k">₹5,00,000 - ₹10,00,000</option>
                  <option value="10k-25k">₹10,00,000 - ₹25,00,000</option>
                  <option value="25k-50k">₹25,00,000 - ₹50,00,000</option>
                  <option value="50k+">₹50,00,000+</option>
                </select>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="1-month">1 Month</option>
                  <option value="2-3-months">2-3 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && formType === 'contact' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Your Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Additional Details (Quote only) */}
        {currentStep === 3 && formType === 'quote' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Additional Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Project Description
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Describe your project requirements..."
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Attach File (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-full px-4 py-8 bg-white/5 border-2 border-dashed border-white/10 rounded-lg cursor-pointer hover:border-cyan-500 transition-colors"
                  >
                    <div className="text-center">
                      <svg className="w-8 h-8 mx-auto mb-2 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-white/60 text-sm">
                        {formData.file ? formData.file.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-white/40 text-xs mt-1">PDF, DOC, DOCX, TXT (Max 10MB)</p>
                    </div>
                  </label>
                </div>
                {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {errors.submit && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
            {errors.submit}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {currentStep > 1 && (
            <motion.button
              type="button"
              onClick={handleBack}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 px-6 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Back
            </motion.button>
          )}
          
          {currentStep < totalSteps ? (
            <motion.button
              type="button"
              onClick={handleNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Next Step
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Response in 24 hours</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
